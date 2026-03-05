// Creature types — color, resource drop, icon filename, and crafting uses
const creatureTypes = {
  "Kokoraptor": {
    color: "#f97316",
    resource: "Brilliant Scale",
    icon: "assets/icons/brilliant_scale.png",
    crafting: ""
  },
  "Dawnfeather": {
    color: "#fde68a",
    resource: "Dawnfeather Egg",
    icon: "assets/icons/dawnfeather_egg.png",
    crafting: ""
  },
  "Elderbraun": {
    color: "#92400e",
    resource: "Eldermilk",
    icon: "assets/icons/eldermilk.png",
    crafting: ""
  },
  "Mocadiles": {
    color: "#166534",
    resource: "Mocha Scale",
    icon: "assets/icons/mocha_scale.png",
    crafting: ""
  },
  "Quackari": {
    color: "#facc15",
    resource: "Quackari Egg",
    icon: "assets/icons/quackari_egg.png",
    crafting: ""
  },
  "Awesomesaurus": {
    color: "#10b981",
    resource: "Radiant Scale",
    icon: "assets/icons/radiant_scale.png",
    crafting: ""
  },
  "Sorellisk": {
    color: "#6366f1",
    resource: "Sorelleon Scale",
    icon: "assets/icons/sorelleon_scale.png",
    crafting: ""
  },
  "Wisperhooves": {
    color: "#e9d5ff",
    resource: "Whisperwool",
    icon: "assets/icons/whisperwool.png",
    crafting: ""
  },
  "Ahria": {
    color: "#f472b6",
    resource: "Ahriatuft",
    icon: "assets/icons/ahriatuft.png",
    crafting: ""
  },
  "Emberlyn": {
    color: "#ef4444",
    resource: "Embertuft",
    icon: "assets/icons/embertuft.png",
    crafting: ""
  },
  "Jasper": {
    color: "#78716c",
    resource: "Jaspertuft",
    icon: "assets/icons/jaspertuft.png",
    crafting: ""
  },
  "Maple": {
    color: "#ea580c",
    resource: "Mapletuft",
    icon: "assets/icons/mapletuft.png",
    crafting: ""
  },
  "Wimblehop": {
    color: "#84cc16",
    resource: "Wimbletuft",
    icon: "assets/icons/wimbletuft.png",
    crafting: ""
  }
};

const creatureLocations = [
  { id: 1, coords: [3463, 2326], radius: 30, creatures: ["Kokoraptor"] },
  
  { id: 2, coords: [2777, 2240], radius: 50, creatures: ["Dawnfeather"] },
  
  { id: 3, coords: [2433, 2564], radius: 50, creatures: ["Elderbraun"] },
  { id: 4, coords: [2662, 2079], radius: 50, creatures: ["Elderbraun"] },
  { id: 5, coords: [1878, 2343], radius: 150, creatures: ["Elderbraun"] },
  { id: 6, coords: [1635, 3016], radius: 50, creatures: ["Elderbraun"] },
  { id: 16, coords: [2313, 3627], radius: 50, creatures: ["Elderbraun"] },
  
  { id: 7, coords: [2192, 3170], radius: 100, creatures: ["Mocadiles"] },
  
  { id: 8, coords: [2690, 988], radius: 100, creatures: ["Quackari"] },
  
  { id: 9, coords: [3443, 2306], radius: 30, creatures: ["Awesomesaurus"] },
  
  { id: 10, coords: [2184, 1702], radius: 150, creatures: ["Sorellisk"] },
  
  { id: 11, coords: [2896, 2732], radius: 50, creatures: ["Wisperhooves"] },
  { id: 12, coords: [1665, 2498], radius: 50, creatures: ["Wisperhooves"] },
  { id: 13, coords: [1793, 2862], radius: 50, creatures: ["Wisperhooves"] },

  { id: 14, coords: [1247, 2180], radius: 100, creatures: ["Ahria"] },

  { id: 15, coords: [2300, 3637], radius: 100, creatures: ["Emberlyn"] },

  { id: 17, coords: [3551, 2958], radius: 20, creatures: ["Jasper"] },
  { id: 18, coords: [3509, 2969], radius: 20, creatures: ["Maple"] },

  { id: 19, coords: [2838, 1466], radius: 100, creatures: ["Wimblehop"] }
];
