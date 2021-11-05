let mock = [
  {
    id: 1,
    game: "Legend of Zelda",
    name: "Level 1: The Eagle",
    boss: "Aquamentus",
    items: "Bow, Boomerang",
    enemies: "Blade Trap, Gel, Goriya, Keese, Stalfos, Wallmaster",
    image: 'level1.png'
  },
  {
    id: 2,
    game: "Legend of Zelda",
    name: "Level 2: The Moon",
    boss: "Dodongo",
    items: "Magical Boomerang",
    enemies: "Blade Trap, Gel, Goriya, Keese, Moldorm, Rope, Stone Statue",
    image: 'level2.png'
  },
  {
    id: 3,
    game: "Legend of Zelda",
    name: "Level 3: The Mangi",
    boss: "Manhandla",
    items: "Raft",
    enemies: "Blade Trap, Bubble, Darknut, Keese, Zol",
    image: 'level3.png'
  },
  {
    id: 4,
    game: "Legend of Zelda",
    name: "Level 4: The Snake",
    boss: "Gleeok",
    items: "Stepladder",
    enemies: "Blade Trap, Bubble, Gel, Keese, Like Like, Vire, Zol",
    image: 'level4.png'
  },
  {
    id: 5,
    game: "Legend of Zelda",
    name: "Level 5: The Lizard",
    boss: "Digdogger",
    items: "Recorder",
    enemies: "Darknut, Dodongo, Gibdo, Keese, Pols Voice, Stone Statue, Zol",
    image: 'level5.png'
  },
  {
    id: 6,
    game: "Legend of Zelda",
    name: "Level 6: The Dragon",
    boss: "Gohma",
    items: "Magical Rod",
    enemies: "Blade Trap, Bubble, Keese, Like Like, Stone Statue, Vire, Wizzrobe, Vol",
    image: 'level6.png'
  },
  {
    id: 7,
    game: "Legend of Zelda",
    name: "Level 1: The Demon",
    boss: "Aquamentus",
    items: "Red Candle",
    enemies: "Enemies: Blade Trap, Bubble, Dodongo, Goriya, Keese, Moldorm, Rope, Stalfos, Stone Statue, Wallmaster",
    image: 'level6.png'
  },
  {
    id: 8,
    game: "Legend of Zelda",
    name: "Level 8: The Lion",
    boss: "Gleeok",
    items: "Book of Magic, Magical Key",
    enemies: "Bubble, Darknut, Gibdo, Keese, Pols Voice, Stone Statue, Zol",
    image: 'level8.png'
  },
  {
    id: 9,
    game: "Legend of Zelda",
    name: "Level 9: Death Mountain",
    boss: "Ganon",
    items: "Red Ring, Silver Arrow",
    enemies: "Blade Trap, Bubble, Gel, Keese, Lanmola, Like Like, Patra, Stone Statue, Vire, Wizzrobe, Zol",
    image: 'level9.png'
  },
  {
    id: 10,
    game: "The Adventure of Link",
    name: "Parapa Palace",
    boss: "Mazura",
    items: "Candle",
    enemies: "Bot (Dark Blue), Bubble, Guma, Iron Knuckle (Orange), Stalfos (Red), Wosu",
    image: 'parapa.png'
  },
  {
    id: 11,
    game: "The Adventure of Link",
    name: "Midoro Palace",
    boss: "Jermafenser",
    items: "Handy Glove",
    enemies: "Bot (Dark Blue), Bubble, Guma, Iron Knuckle (Orange), Iron Knuckle (Red), Ra, Rope, Stalfos (Blue)",
    image: 'midoro.png'
  },
  {
    id: 12,
    game: "The Adventure of Link",
    name: "Island Palace",
    boss: "Rebonack",
    items: "The Raft",
    enemies: "Armored Stalfos (Red), Armored Stalfos (Blue), Bot, Doomknocker, Iron Knuckle (Orange), Iron Knuckle (Red), Iron Knuckle (Blue), Mau, Moa, Myu, Ra, Wosu",
    image: 'island.png'
  },
  {
    id: 13,
    game: "The Adventure of Link",
    name: "Maze Island Palace",
    boss: "Carok",
    items: "Boots",
    enemies: "Armored Stalfos (Red), Armored Stalfos (Blue), Bot (Dark Blue), Bubble, Doomknocker, Iron Knuckle (Red), Iron Knuckle (Blue), Mau, Moa, Myu, Ra, Wizard, Wosu",
    image: 'maze.png'
  },
  {
    id: 14,
    game: "The Adventure of Link",
    name: "Palace on the Sea",
    boss: "Gooma",
    items: "Flute",
    enemies: "Bot (Dark Blue), Bago-Bago, Bubble, Guma, Iron Knuckle (Orange), Iron Knuckle (Red), Iron Knuckle (Blue), Mago, Mau, Moa, Myu, Ra, Rope, Stalfos (Blue)",
    image: 'on_the_sea.png'
  },
  {
    id: 15,
    game: "The Adventure of Link",
    name: "Three-Eye Rock Palace",
    boss: "Barba",
    items: "Cross",
    enemies: "Armored Stalfos (Blue), Bubble, Doomknocker, Iron Knuckle (Red), Iron Knuckle (Blue), Mau, Moa, Myu, Ra, Rebonack, Wizard, Wosu",
    image: 'three-eye.png'
  },
  {
    id: 16,
    game: "The Adventure of Link",
    name: "Great Palace",
    boss: "Thunderbird and Sage(Link's Shadow)",
    items: "None",
    enemies: "Red Bago-Bago, Bot (Great Palace), Bubble (Great Palace), Red Fokka, Blue Fokka, Fokkeru, Boss Bot, King Bubble, Myu (Great Palace), Orange Ra, Red Rope",
    image: 'great.png'
  },
  {
    id: 17,
    game: "Ocarina of Time",
    name: "Inside the Deku Tree",
    boss: "Parasitic Armored Arachnid Gohma",
    items: "Fairy Slingshot",
    enemies: "Big Skulltula, Deku Baba, Deku Scrub, Gold Skulltula, Gohma Larva, Spiketrap, Skulltula, Skullwalltula",
    image: 'deku_tree.jpeg'
  },
  {
    id: 18,
    game: "Ocarina of Time",
    name: "Dodongo's Cavern",
    boss: "Infernal Dinosaur: King Dodongo",
    items: "Bomb Bag",
    enemies: "Armos, Baby Dodongo, Beamos, Blade Trap, Business Scrub, Dodongo, Gold Skulltula, Keese, Fire Keese, Lizalfos, Skullwalltula",
    image: 'dodongo.jpeg'
  },
  {
    id: 19,
    game: "Ocarina of Time",
    name: "Inside Jabu-Jabu's Belly",
    boss: "Bio-electric Anenome, Barinade",
    items: "Boomerang",
    enemies: "Bari, Biri, Octorok, Parasitic Tentacle, Shabom, Stinger, Tailpasaran",
    image: 'jabu.png'
  },
  {
    id: 20,
    game: "Ocarina of Time",
    name: "Bottom of the Well",
    boss: "Mini Boss: Dead Hand",
    items: "Lens of Truth",
    enemies: "Beamos, Big Skulltula, Deku Baba, Fire Keese, Gibdo, Gold Skulltula, Green Bubble, Like Like, ReDead",
    image: 'well.png'
  },
  {
    id: 21,
    game: "Ocarina of Time",
    name: "Forest Temple",
    boss: "Phantom Ganon",
    items: "Fairy Bow",
    enemies: "Big Deku Baba, Big Skulltula, Blue Bubble, Floormaster, Gold Skulltula, Green Bubble, Octorok, Skullwalltula, Stalfos, Wallmaster, Wolfos",
    image: 'forest.jpeg'
  },
  {
    id: 22,
    game: "Ocarina of Time",
    name: "Fire Temple",
    boss: "Volvagia",
    items: "Megaton Hammer",
    enemies: "Door Mimic, Fire Keese, Flying Tile, Gold Skulltula, Keese, Like Like, Red Bubble, Torch Slug",
    image: 'fire.png'
  },
  {
    id: 23,
    game: "Ocarina of Time",
    name: "Ice Cavern",
    boss: "Miniboss: White Wolfos",
    items: "Blue Fire",
    enemies: "Freezard, Gold Skulltula, Ice Keese, Keese, White Wolfos",
    image: 'ice.jpeg'
  },
  {
  id: 24,
  game: "Ocarina of Time",
  name: "Water Temple",
  boss: "Morpha",
  items: "Longshot",
  enemies: "Keese, Like Like, Shell Blade, Spike, Stinger, Tektite",
  image: 'water.jpeg'
  },
  {
  id: 25,
  game: "Ocarina of Time",
  name: "Shadow Temple",
  boss: "Bongo Bongo",
  items: "Hover Boots",
  enemies: "Beamos, Blade Trap, Eye Switch, Fire Keese, Flying Jar, Gibdo, Keese, Like Like, ReDead, Red Bubble, Stalfos, Skulltula, Wallmaster",
  image: 'shadow.png'
  },
  {
  id: 26,
  game: "Ocarina of Time",
  name: "Spirit Temple",
  boss: "Twinrova",
  items: "Silver Guantlets, Mirror Shield",
  enemies: "Anubis, Armos, Beamos, Blade Trap, Fire Keese, Flying Jar, Floormaster, Green Bubble, Keese, Like Like, Lizalfos, Skullwalltula, Stalfos, Torch Slug, Wallmaster, White Bubble, Wolfos",
  image: 'spirit.png'
  },
  {
  id: 27,
  game: "Ocarina of Time",
  name: "Ganon's Castle",
  boss: "Ganondorf/Ganon",
  items: "Golden Guantlets",
  enemies: "Beamos, Blade Trap, Business Scrub, Dinolfos, Fire Keese, Freezard, Green Bubble, Iron Knuckle, Keese, Like Like, Red Bubble, ReDead, Skulltula, Stalfos, Torch Slug, Wallmaster, Wolfos",
  image: 'castle.jpeg'
  },


]

export default mock;
