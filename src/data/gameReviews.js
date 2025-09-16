const gameReviews = [
  {
    id: "diablo-2",
    slug: "diablo-2",
    title: "Diablo II",
    creator: "Blizzard North",
    type: "game",
    date: "2000-06-29",
    year: 2000,
    rating: 5.0,
    curated: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Diablo_II_Coverart.png",
    bestTracks: [],
    tags: ["arpg", "hack-and-slash", "isometric"],
    body: `10/10 gameplay, art style, music, and atmosphere. The click-to-move controls feel effortless and immediate,
the loot loop is endlessly satisfying, and its gothic look + iconic sound effects define the genre.
Hardcore adds real stakes—especially on melee—turning every dungeon into a pulse-raiser. Perfectly replayable.`,
  },
  {
    id: "super-mario-64",
    slug: "super-mario-64",
    title: "Super Mario 64",
    creator: "Nintendo",
    type: "game",
    date: "1996-09-29",
    year: 1996,
    rating: 5.0,
    curated: 2,
    image: "https://e.snmc.io/lk/o/x/15f80bc5703e1482a05054ae9f9a93cd/5276953",
    bestTracks: [],
    tags: ["platformer", "3d", "nintendo"],
    body: `The purest 3D platformer. Movement is expressive and intuitive; you can feel the momentum in every jump and dive.
Genius sandbox levels invite curiosity and mastery with a skill ceiling that’s still being pushed by speedrunners.
Timeless soundtrack, timeless design.`,
  },
  {
    id: "starcraft",
    slug: "starcraft",
    title: "StarCraft",
    creator: "Blizzard Entertainment",
    type: "game",
    date: "1998-03-31",
    year: 1998,
    rating: 5.0,
    curated: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/93/StarCraft_box_art.jpg",
    bestTracks: [],
    tags: ["rts", "esports", "classic"],
    body: `The RTS blueprint. Terran, Zerg, Protoss—distinct, elegant, and (almost miraculously) balanced.
Unit sound design and music are burned into memory, and competitive StarCraft essentially created modern esports.`,
  },
  {
    id: "elden-ring",
    slug: "elden-ring",
    title: "Elden Ring",
    creator: "FromSoftware",
    type: "game",
    date: "2022-02-25",
    year: 2022,
    rating: 5.0,
    curated: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    bestTracks: [],
    tags: ["action-rpg", "open-world", "soulslike"],
    body: `A vast, densely interesting world that rewards curiosity at every turn.
FromSoftware’s combat and encounter design scale beautifully into open-world freedom.
The Lands Between are haunting, empowering, and full of “I can’t believe that worked” moments.`,
  },
  {
    id: "quake-3-arena",
    slug: "quake-3-arena",
    title: "Quake III Arena",
    creator: "id Software",
    type: "game",
    date: "1999-12-02",
    year: 1999,
    rating: 5.0,
    curated: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Quake3Title.jpg",
    bestTracks: [],
    tags: ["fps", "arena", "esports"],
    body: `Pure skill expression. Lightning-fast flow, razor-sharp aim, and movement tech that still feels futuristic.
Every rail shot, every rocket juggle is a dopamine hit. Defined arena FPS and trained generations of competitors.`,
  },
  {
    id: "dark-souls",
    slug: "dark-souls",
    title: "Dark Souls",
    creator: "FromSoftware",
    type: "game",
    date: "2011-09-22",
    year: 2011,
    rating: 5.0,
    curated: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
    bestTracks: [],
    tags: ["action-rpg", "soulslike", "hardcore"],
    body: `Interlocked world design at its absolute best. Slow, purposeful combat and a mood so thick you can feel the ash.
Cryptic lore invites obsession, and every shortcut feels like a designer wink.
A foundational text for modern action RPGs.`,
  },
  {
    id: "world-of-warcraft-classic",
    slug: "world-of-warcraft-classic",
    title: "World of Warcraft (Classic)",
    creator: "Blizzard Entertainment",
    type: "game",
    date: "2004-11-23",
    year: 2004,
    rating: 5.0,
    curated: 7,
    image:
      "https://static.wikia.nocookie.net/wowpedia/images/6/60/WoW-boxcover.jpg/revision/latest/scale-to-width-down/1000?cb=20190228164118",
    bestTracks: [],
    tags: ["mmo", "rpg", "social"],
    body: `A social phenomenon as much as a game.
Azeroth felt alive: meaningful leveling, dungeons that demanded coordination, and raids that forged communities.
Classic captured discovery and camaraderie in a way few games ever have.`,
  },
  {
    id: "tekken-3",
    slug: "tekken-3",
    title: "Tekken 3",
    creator: "Namco",
    type: "game",
    date: "1997-03-20",
    year: 1997,
    rating: 5.0,
    curated: 8,
    image:
      "https://cdn.mobygames.com/covers/5483110-tekken-3-playstation-front-cover.jpg",
    bestTracks: [],
    tags: ["fighting", "arcade", "ps1"],
    body: `A genre-defining 3D fighter: huge roster, slick movement, and combos that felt incredible to execute.
Style, music, and character identity all landed perfectly. A high-water mark for the series and the era.`,
  },
  {
    id: "super-mario-odyssey",
    slug: "super-mario-odyssey",
    title: "Super Mario Odyssey",
    creator: "Nintendo",
    type: "game",
    date: "2017-10-27",
    year: 2017,
    rating: 5.0,
    curated: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
    bestTracks: [],
    tags: ["platformer", "sandbox", "nintendo"],
    body: `Relentless creativity. Cappy’s capture mechanic explodes the design space, making each kingdom its own toy box.
Movement is joyful, secrets are everywhere, and the whole game radiates charm.`,
  },
  {
    id: "guitar-hero-3",
    slug: "guitar-hero-3-legends-of-rock",
    title: "Guitar Hero III: Legends of Rock",
    creator: "Neversoft",
    type: "game",
    date: "2007-10-28",
    year: 2007,
    rating: 5.0,
    curated: 10,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F7%2F71%2FGuitarhero3-cover.jpg",
    bestTracks: [],
    tags: ["rhythm", "music", "party"],
    body: `Arcade-hard note charts, an all-time setlist, and that one song everyone tried to conquer.
Pick-up-and-play fun that still demanded mastery. Peak living-room hype.`,
  },
  {
    id: "portal",
    slug: "portal",
    title: "Portal",
    creator: "Valve",
    type: "game",
    date: "2007-10-10",
    year: 2007,
    rating: 5.0,
    curated: 11,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Ff%2F9%2FPortal_standalonebox.jpg",
    bestTracks: [],
    tags: ["puzzle", "first-person", "valve"],
    body: `A perfect design lesson: one mechanic, explored to brilliance.
Clever puzzles, immaculate pacing, and writing that turned GLaDOS into an instant legend.
Short, sharp, unforgettable.`,
  },
  {
    id: "starcraft-2",
    slug: "starcraft-2",
    title: "StarCraft II",
    creator: "Blizzard Entertainment",
    type: "game",
    date: "2010-07-27",
    year: 2010,
    rating: 5.0,
    curated: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg",
    bestTracks: [],
    tags: ["rts", "esports", "competitive"],
    body: `A worthy sequel with incredible polish. Cinematic campaigns, refined macro/micro, and a competitive ladder
that became a global spectacle. Deep mechanics, crisp feel—brutal and beautiful.`,
  },

  // --- 4.9 / 4.8s ---
  {
    id: "warcraft-3",
    slug: "warcraft-3-reign-of-chaos",
    title: "Warcraft III: Reign of Chaos",
    creator: "Blizzard Entertainment",
    type: "game",
    date: "2002-07-03",
    year: 2002,
    rating: 4.9,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F0d%2FWarcraftIIIcover.jpg",
    bestTracks: [],
    tags: ["rts", "heroes", "custom-maps"],
    body: `RTS with RPG DNA—hero units, creeping, itemization—expanded the genre’s vocabulary.
Its world-building was top-tier, and the custom map scene (hello, Defense of the Ancients)
changed multiplayer gaming forever.`,
  },
  {
    id: "warcraft-2",
    slug: "warcraft-2-tides-of-darkness",
    title: "Warcraft II: Tides of Darkness",
    creator: "Blizzard Entertainment",
    type: "game",
    date: "1995-12-09",
    year: 1995,
    rating: 4.8,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F03%2FWarcraft_II_Tides_of_Darkness_boxart.jpg",
    bestTracks: [],
    tags: ["rts", "classic"],
    body: `Streamlined, addictive RTS fundamentals—build, expand, smash—delivered with personality.
Set the stage for Blizzard’s future strategy dominance and countless LAN memories.`,
  },
  {
    id: "crash-bandicoot-2",
    slug: "crash-bandicoot-2-cortex-strikes-back",
    title: "Crash Bandicoot 2: Cortex Strikes Back",
    creator: "Naughty Dog",
    type: "game",
    date: "1997-10-31",
    year: 1997,
    rating: 4.8,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fb%2Fb0%2FCrash_Bandicoot_2_Cover.png",
    bestTracks: [],
    tags: ["platformer", "ps1", "classic"],
    body: `A focused, polished sequel with tight controls and varied stage gimmicks.
Playful tone, great feedback, and just the right bite of challenge.
One of PS1’s definitive platformers.`,
  },
];

export default gameReviews;
