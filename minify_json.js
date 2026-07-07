import fs from "fs";

// Read the existing JSON file
const jsonData = fs.readFileSync("economyConfig.json", "utf8");
const parsedData = JSON.parse(jsonData);

// Write minified version (no whitespace)
fs.writeFileSync("economyConfig.min.json", JSON.stringify(parsedData));

console.log("JSON minified successfully");
