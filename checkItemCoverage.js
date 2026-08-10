/**
 * Build guard: every item this config SELLS or CRAFTS must have an
 * `itemsProperties` entry.
 *
 * Why it exists
 * -------------
 * `itemsProperties` in economyConfig is what high-ui's SHOP screens read for an
 * item's weight, category and stack limit. (The gamemode itself does NOT read
 * it — the server has its own catalogue at
 * `server/high-roleplay/inventory/itemProperties.ts` and seeds the database
 * from that.) So a shop row or a recipe whose item has no entry here does not
 * crash anything: the cart just silently has no weight, no category filter and
 * no stack cap for it.
 *
 * That silence is the problem. Twenty-one items had drifted into exactly that
 * state — the whole junk-job output, nine vests, the body cam, the drone and
 * two fishing rod tiers — and nothing ever said so. This check turns that into
 * a loud build failure.
 *
 * It also reports items whose properties exist but which nothing sells or
 * crafts. Those are only a WARNING: plenty of items are legitimately obtained
 * from jobs, loot or admin tools rather than a shop.
 */

/** Walk the whole config and collect every `itemName` / `item` string. */
function collectReferencedItems(node, path, out) {
  if (!node || typeof node !== "object") return;

  if (Array.isArray(node)) {
    for (const entry of node) collectReferencedItems(entry, path, out);
    return;
  }

  for (const [key, value] of Object.entries(node)) {
    if (
      (key === "itemName" || key === "item") &&
      typeof value === "string" &&
      value.startsWith("item_")
    ) {
      if (!out.has(value)) out.set(value, new Set());
      // keep the first two path segments — enough to say "supermarket" or
      // "gang crafting" without printing a 60-character path
      out.get(value).add(path.split(".").filter(Boolean).slice(0, 2).join("."));
    }
    if (value && typeof value === "object") {
      collectReferencedItems(value, `${path}.${key}`, out);
    }
  }
}

export function checkItemCoverage(economyConfig) {
  const properties = economyConfig.itemsProperties ?? {};
  const referenced = new Map();

  // Deliberately skips `itemsProperties` itself — every key in there is a
  // definition, not a reference, and including it would make the check circular.
  for (const [section, value] of Object.entries(economyConfig)) {
    if (section === "itemsProperties") continue;
    collectReferencedItems(value, section, referenced);
  }

  const missing = [...referenced.keys()]
    .filter((item) => !(item in properties))
    .sort();

  const unused = Object.keys(properties)
    .filter((item) => !referenced.has(item))
    .sort();

  if (unused.length > 0) {
    console.log(
      `Item coverage: ${unused.length} item(s) have properties but are not sold ` +
        `or crafted anywhere — fine if they come from a job, loot or an admin ` +
        `tool.`,
    );
  }

  if (missing.length > 0) {
    const detail = missing
      .map((item) => `  - ${item}  (used by: ${[...referenced.get(item)].join(", ")})`)
      .join("\n");
    throw new Error(
      `Item coverage check FAILED — ${missing.length} item(s) are sold or ` +
        `crafted but have no itemsProperties entry, so the shop UI has no ` +
        `weight, category or stack limit for them:\n${detail}\n\n` +
        `Fix: copy the definition from the gamemode catalogue at ` +
        `high-roleplay-v1/src/src/server/high-roleplay/inventory/itemProperties.ts ` +
        `into items/itemProperties.js. Do not invent values — that file is the ` +
        `source of truth and the server seeds the database from it.`,
    );
  }

  console.log(
    `Item coverage: ${referenced.size} referenced item(s) verified, 0 missing.`,
  );
}
