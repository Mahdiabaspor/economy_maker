// BurgerShot / food jobs — PRESERVED, NOT MAINTAINED.
//
// This block used to be produced by a source module that has since been removed
// from the generator (the BurgerShot removal that is in progress in high-ui).
// The block still exists in the DEPLOYED economyConfig, so regenerating without
// it silently DELETED it from the live config on the next copy.
//
// Nothing reads `jobs.foodJobs` — not the gamemode, not high-ui — so its loss
// broke nothing, which is exactly why it went unnoticed. It is frozen here,
// copied verbatim from the deployed config, so that generate + copy is
// LOSSLESS: the generator should never quietly drop a section that is live.
//
// When the BurgerShot removal is finished and you have decided the food jobs
// are gone for good, delete this file and its import in
// generate_economy_config.js — deliberately, in one commit, rather than by
// accident through a regenerate.
export const foodJobsConfig =
{
  "burgerShot": {
    "cookBench": [
      {
        "itemName": "item_cooked_food_burger_meat",
        "label": "Cooked Meat",
        "craftTime": 3.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_burger_meat",
            "label": "Raw Meat",
            "count": 1
          }
        ]
      },
      {
        "itemName": "item_cooked_food_chicken",
        "label": "Cooked Chicken",
        "craftTime": 3.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_chicken",
            "label": "Raw Chicken",
            "count": 1
          }
        ]
      },
      {
        "itemName": "item_cooked_food_burger_meat_vegan",
        "label": "Cooked Vegan Meat",
        "craftTime": 3.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_burger_meat_vegan",
            "label": "Raw Vegan Meat",
            "count": 1
          }
        ]
      }
    ],
    "finalBench": [
      {
        "itemName": "item_food_burger",
        "label": "Classic Hamburger",
        "craftTime": 4,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_burger_meat",
            "label": "Cooked Meat",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 1
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 2
          }
        ]
      },
      {
        "itemName": "item_food_double_burger",
        "label": "Double Hamburger",
        "craftTime": 5,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_burger_meat",
            "label": "Cooked Meat",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 2
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 2
          }
        ]
      },
      {
        "itemName": "item_food_cheese_burger",
        "label": "Cheese Burger",
        "craftTime": 4,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_burger_meat",
            "label": "Cooked Meat",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 1
          },
          {
            "itemName": "item_food_sliced_cheese",
            "label": "Sliced Cheese",
            "count": 1
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 2
          }
        ]
      },
      {
        "itemName": "item_food_double_cheese_burger",
        "label": "Double Cheese Burger",
        "craftTime": 5,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_burger_meat",
            "label": "Cooked Meat",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 2
          },
          {
            "itemName": "item_food_sliced_cheese",
            "label": "Sliced Cheese",
            "count": 2
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 2
          }
        ]
      },
      {
        "itemName": "item_food_chicken_burger",
        "label": "Chicken Burger",
        "craftTime": 4,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_chicken",
            "label": "Cooked Nugget",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 1
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 2
          }
        ]
      },
      {
        "itemName": "item_food_vegan_burger",
        "label": "Veggie Burger",
        "craftTime": 4,
        "requiredItems": [
          {
            "itemName": "item_food_burger_bun",
            "label": "Burger Bun",
            "count": 2
          },
          {
            "itemName": "item_cooked_food_burger_meat_vegan",
            "label": "Vegan Patty",
            "count": 1
          },
          {
            "itemName": "item_raw_food_sliced_pickle",
            "label": "Sliced Pickle",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_tomato",
            "label": "Sliced Tomato",
            "count": 3
          },
          {
            "itemName": "item_raw_food_sliced_lettuce",
            "label": "Sliced Lettuce",
            "count": 2
          },
          {
            "itemName": "item_raw_food_sliced_onion",
            "label": "Sliced Onion",
            "count": 2
          },
          {
            "itemName": "item_food_ketchup",
            "label": "Ketchup",
            "count": 1
          }
        ]
      }
    ],
    "sliceBench": [
      {
        "itemName": "item_raw_food_sliced_tomato",
        "label": "Sliced Tomato",
        "craftTime": 1.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_tomato",
            "label": "Tomato",
            "count": 1
          }
        ]
      },
      {
        "itemName": "item_raw_food_sliced_pickle",
        "label": "Sliced Pickle",
        "craftTime": 1.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_pickle",
            "label": "Pickle",
            "count": 1
          }
        ]
      },
      {
        "itemName": "item_raw_food_sliced_lettuce",
        "label": "Sliced Lettuce",
        "craftTime": 1.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_lettuce",
            "label": "Lettuce",
            "count": 1
          }
        ]
      },
      {
        "itemName": "item_raw_food_sliced_onion",
        "label": "Sliced Onion",
        "craftTime": 1.5,
        "requiredItems": [
          {
            "itemName": "item_raw_food_onion",
            "label": "Onion",
            "count": 1
          }
        ]
      }
    ]
  }
};
