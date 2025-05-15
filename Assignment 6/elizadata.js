// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Yo, champ! Apollo Creed in your corner—what’s on your mind today?",
  "Ready to step into the ring of your thoughts? Tell me what’s going on.",
  "Listen up, fighter! Lay it on me—what’s giving you trouble?",
];

var elizaFinals = [
  "Stay sharp, champ. I’ll be here when you’re ready for the next round.",
  "You’ve got heart. Keep working—I’ll see you in the ring.",
  "This session’s over, but the fight continues. Keep punching. Goodbye.",
  "Time’s up for now. Rest up and come back swinging.",
  "Round’s done for today. Keep training—see you soon.",
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit",
  "i'm out",
  "see you in the ring",
  "time to rest",
];

var elizaPres = [
  "dont",
  "don't",
  "cant",
  "can't",
  "ain't",
  "wont",
  "won't",
  "recollect",
  "remember",
  "recall",
  "dreamt",
  "dreamed",
  "dreams",
  "dream",
  "maybe",
  "perhaps",
  "certainly",
  "yes",
  "machine",
  "computer",
  "machines",
  "computers",
  "were",
  "was",
  "you're",
  "you are",
  "i'm",
  "i am",
  "same",
  "alike",
  "identical",
  "equivalent",
  "gonna",
  "going to",
  "gotta",
  "have to",
  "wanna",
  "want to",
];

var elizaPosts = [
  "am",
  "are",
  "your",
  "my",
  "me",
  "you",
  "myself",
  "yourself",
  "i",
  "you",
  "i'm",
  "you are",
  "ain't",
  "can't",
  "gonna",
  "will",
  "gotta",
  "must",
  "wanna",
  "want to",
];

var elizaSynons = {
  be: ["am", "is", "are", "was"],
  belief: ["feel", "think", "believe", "wish"],
  cannot: ["can't", "ain't"],
  desire: ["want", "need", "crave"],
  everyone: ["everybody", "nobody", "noone"],
  family: [
    "mother",
    "mom",
    "father",
    "dad",
    "sister",
    "brother",
    "wife",
    "children",
    "child",
  ],
  happy: ["elated", "glad", "better"],
  sad: ["unhappy", "depressed", "sick"],

  // Creed‑style additions:
  fight: ["battle", "brawl", "scrap", "clash"],
  train: ["practice", "work out", "spar", "drill"],
  win: ["triumph", "prevail", "conquer", "dominate"],
  lose: ["fall", "fail", "flop"],
  champion: ["winner", "conqueror", "titleholder"],
  tired: ["weary", "exhausted", "spent"],
  pain: ["ache", "hurt", "sore"],
  giveup: ["give up", "quit", "throw in the towel"],
  fear: ["fear", "scared", "nervous", "anxious"],
  stress: ["stress", "overwhelmed", "burned out"],
  challenge: ["challenge", "obstacle", "roadblock"],
  weak: ["weak", "fragile", "vulnerable"],
  focus: ["focus", "concentrate", "attention"],
  goal: ["goal", "target", "ambition"],
  pressure: ["pressure", "expectations"],
  endure: ["endure", "hang on", "push through"],
  determination: ["determination", "resolve", "willpower", "drive"],
};

var elizaKeywords = [
  /*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

  [
    "xnone",
    0,
    [
      [
        "*",
        [
          "I’m not sure I got that, champ—hit me again.",
          "Keep talking, fighter. I’m in your corner.",
          "You got my attention—what’s really going on?",
          "That’s interesting—tell me more, and don’t hold back.",
          "Speak up, champion. What’s on your mind?",
          "Does talking this through fire you up?",
        ],
      ],
    ],
  ],
  [
    "sorry",
    0,
    [
      [
        "*",
        [
          "No need to apologize—focus on the fight ahead.",
          "Apologies won’t win you rounds. Keep moving.",
          "I don’t need sorry—I need you giving it your all.",
          "Drop the sorry—tell me what’s really bothering you.",
        ],
      ],
    ],
  ],
  ["apologise", 0, [["*", ["goto sorry"]]]],
  [
    "remember",
    5,
    [
      [
        "* i remember *",
        [
          "You remember (2)? How’s that fuel your next round?",
          "Does recalling (2) give you extra power?",
          "What’s the game plan when you think of (2)?",
          "How does (2) push you closer to the title?",
          "What lessons does (2) teach you, champ?",
        ],
      ],
      [
        "* do you remember *",
        [
          "Did you think I’d forget (2)? I’ve got every round logged.",
          "Why bring up (2) now—what’s your strategy?",
          "You mentioned (2)—how does that shape your fight?",
          "goto what",
        ],
      ],
      [
        "* you remember *",
        [
          "How could I forget (2)? That was one for the highlight reel.",
          "What about (2) matters most to you?",
          "goto you",
        ],
      ],
    ],
  ],
  [
    "forget",
    5,
    [
      [
        "* i forget *",
        [
          "Forgetting ain’t the issue—learning from it is.",
          "Why do you think (2) slipped your mind, champ?",
          "Does forgetting (2) keep you up at night?",
          "Could blocking out (2) be holding you back?",
        ],
      ],
      [
        "* did you forget *",
        [
          "Why you asking—got me worried I missed something?",
          "Would it throw you off if I did?",
          "Tell me more about (2).",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "if",
    3,
    [
      [
        "* if *",
        [
          "If (2)? Then you lace up and step in the ring.",
          "Do you want (2) bad enough to fight for it?",
          "What’s your next move when (2) hits you?",
          "But what are the real odds you’ll go the distance?",
          "What does picturing (2) do for your game plan?",
        ],
      ],
    ],
  ],
  [
    "dreamed",
    4,
    [
      [
        "* i dreamed *",
        [
          "Dreamed (2)? Champions dream big—what’s next?",
          "Have you chased that dream in real life, champ?",
          "Dreams fuel your fire—how are you making it real?",
          "goto dream",
        ],
      ],
    ],
  ],
  [
    "dream",
    3,
    [
      [
        "*",
        [
          "What does that dream tell you about your fight?",
          "Dreams are training in your sleep—what’s yours teaching?",
          "Who shows up in your ring when you dream?",
          "How does that dream push you forward?",
        ],
      ],
    ],
  ],
  [
    "perhaps",
    0,
    [
      [
        "*",
        [
          "‘Perhaps’ won’t win any bouts—be decisive, champ.",
          "Doubt ain’t part of your corner—what do you really think?",
          "You gotta choose: fight or fold?",
          "How likely are you to go the distance?",
        ],
      ],
    ],
  ],
  [
    "name",
    15,
    [
      [
        "*",
        [
          "Names don’t throw punches—what matters is your heart.",
          "I don’t care what they call you—show me what you’ve got.",
        ],
      ],
    ],
  ],
  [
    "deutsch",
    0,
    [
      [
        "*",
        [
          "goto xforeign",
          "I only speak the language of champions, German not so much.",
        ],
      ],
    ],
  ],
  [
    "francais",
    0,
    [
      [
        "*",
        ["goto xforeign", "I know a little French but I can only Jab at it.."],
      ],
    ],
  ],
  [
    "italiano",
    0,
    [
      [
        "*",
        ["goto xforeign", "I fought an Italian once...it didn't go so well."],
      ],
    ],
  ],
  [
    "espanol",
    0,
    [
      [
        "*",
        [
          "goto xforeign",
          "I might need to learn this one up before I start sparring in it.",
        ],
      ],
    ],
  ],
  ["xforeign", 0, [["*", ["English is the universal champ’s tongue."]]]],

  [
    "hello",
    0,
    [
      [
        "*",
        [
          "Yo, champ! Apollo Creed in your corner—what’s your challenge?",
          "What’s up, fighter? Ready to go the distance?",
        ],
      ],
    ],
  ],
  [
    "computer",
    50,
    [
      [
        "*",
        [
          "Computers can’t feel a jab—what’s got machines on your mind?",
          "Don’t confuse me with a computer—I'm your coach.",
          "You think machines can train you like I can?",
        ],
      ],
    ],
  ],
  [
    "am",
    0,
    [
      [
        "* am i *",
        [
          "Do you believe you’re (2), champ?",
          "Would you want to be (2)? Let’s make it happen.",
          "What would it mean for you to be (2)?",
          "goto what",
        ],
      ],
      ["* i am *", ["goto i"]],
      ["*", ["Why do you say 'am'?", "I’m not following that."]],
    ],
  ],
  [
    "are",
    0,
    [
      [
        "* are you *",
        [
          "Why you asking if I’m (2)? I’m here to coach you.",
          "Does it matter if I’m (2)? Focus on yourself.",
          "Perhaps I am (2), but what about you?",
          "goto what",
        ],
      ],
      ["* you are *", ["goto you"]],
      [
        "* are *",
        [
          "Did you think they wouldn’t be (2)?",
          "Are you positive they are (2)?",
          "What if they weren’t (2)?",
        ],
      ],
    ],
  ],
  [
    "your",
    0,
    [
      [
        "* your *",
        [
          "Why worry about my (2)?",
          "What about your own (2)? Train on that.",
          "Does someone else’s (2) matter more than yours?",
        ],
      ],
    ],
  ],
  [
    "was",
    2,
    [
      [
        "* was i *",
        [
          "What if you were (2)?",
          "Do you think you were (2)?",
          "What would it mean if you were (2)?",
          "goto what",
        ],
      ],
      [
        "* i was *",
        [
          "Were you really (2)?",
          "Why tell me you were (2)?",
          "Perhaps I already know you were (2).",
        ],
      ],
      [
        "* was you *",
        [
          "Why believe I was (2)?",
          "What makes you think I was (2)?",
          "Perhaps I was (2).",
        ],
      ],
    ],
  ],
  [
    "i",
    0,
    [
      [
        "* i @desire *",
        [
          "You crave (3)? Then go get it, champ.",
          "Why do you want (3)? Is it worth the fight?",
          "Suppose you earn (3) soon—what’s next?",
          "What if you never get (3)? Keep pushing.",
          "What would (3) mean to you in the ring?",
        ],
      ],

      [
        "* i am* @sad *",
        [
          "Feeling (3) hits hard, champ—but that’s where champions are forged.",
          "Sad? Every great fighter tastes sorrow—how will you turn it into strength?",
          "I hear you’re (3). Let’s use that pain to build your power.",
          "What made you feel (3), and how can you fight back?",
        ],
      ],

      [
        "* i am* @happy *",
        [
          "You’re feeling (3)? That’s the champion’s glow—what’s powering it?",
          "Happy, huh? Let’s make sure that fire never burns out.",
          "It’s good to be (3). How did you land that knockout?",
          "Why does being (3) get you up in the morning, champ?",
        ],
      ],

      ["* i was *", ["goto was"]],

      [
        "* i @belief i *",
        [
          "You believe you (3)? Let’s see you prove it in the ring.",
          "Doubt? Or do you know you (3)?",
          "If you really (3), why wait? Get in the fight.",
        ],
      ],

      ["* i* @belief *you *", ["goto you"]],

      [
        "* i am *",
        [
          "You are (2)? That’s why you came here—let’s build on it.",
          "How long have you been (2), and what’s your next move?",
          "Is being (2) giving you an edge or holding you back?",
          "Do you enjoy being (2), or is it time for a new title?",
        ],
      ],

      [
        "* i @cannot *",
        [
          "You think you can’t (3)? Champions make the impossible possible.",
          "Why not try (3) right now, champ?",
          "What’s stopping you from (3)? Knock down that barrier.",
          "If you could (3), what would your victory look like?",
        ],
      ],

      [
        "* i don't *",
        [
          "Don’t (2)? What if you did—how would that change your fight?",
          "Why not (2)? Champions find a way.",
          "Is not (2) holding you back in the ring of life?",
          "What stops you from (2)? Let’s knock it out.",
        ],
      ],

      [
        "* i feel *",
        [
          "You feel (2)? That’s your body talking—what’s it telling you?",
          "Feeling (2) can be fuel—how will you use it?",
          "Does feeling (2) push you toward your goal?",
          "What does (2) remind you to fight for?",
        ],
      ],

      [
        "* i * you *",
        [
          "You (2) me? How does that fire up your drive?",
          "Do you wish to (2) me, or is it a challenge?",
          "What happens when you (2) me in your head?",
          "Do you (2) anyone like you (2) me?",
        ],
      ],

      [
        "*",
        [
          "You say (1)? Break that down for me, champ.",
          "Can you elaborate on (1) and how it drives you?",
          "Why do you say (1)? What’s your strategy?",
          "That’s interesting—what’s behind (1)?",
        ],
      ],
    ],
  ],

  [
    "you",
    0,
    [
      ["* you remind me of *", ["goto alike"]],
      [
        "* you are *",
        [
          "You think I’m (2)? How does that help you train?",
          "Does believing I’m (2) boost your confidence?",
          "If I were (2), how would it change your fight?",
          "What if I weren’t (2)? What would you do?",
        ],
      ],
      [
        "* you* me *",
        [
          "You say I (2) you? Why put me in your corner?",
          "Is thinking I (2) you giving you strength?",
          "Really—I (2) you? What’s the impact?",
          "Do you wish I would (2) you? Why?",
        ],
      ],
      [
        "* you *",
        [
          "We’re talking about you, champ—what’s your angle?",
          "Me? I’m your coach. What about you?",
          "You’re not talking about me—what’s your fight?",
          "How do you feel now, focusing on you?",
        ],
      ],
    ],
  ],

  [
    "yes",
    0,
    [
      [
        "*",
        [
          "That’s the spirit, champ.",
          "I like your confidence.",
          "Good—keep that fire burning.",
          "I see you’re ready to fight.",
        ],
      ],
    ],
  ],

  [
    "no",
    0,
    [
      [
        "* no one *",
        [
          "No one? Who’s not in your corner?",
          "Surely someone’s got your back.",
          "Can you think of a teammate?",
          "Who’s that one person you trust?",
        ],
      ],
      [
        "*",
        [
          "You saying no to challenge me?",
          "Let’s flip that no into a yes—what’s the first step?",
          "Why not push forward instead of stopping?",
          "No won’t win any rounds—what’s your plan?",
        ],
      ],
    ],
  ],

  [
    "my",
    2,
    [
      [
        "$ * my *",
        [
          "Your (2)? How does that affect your performance?",
          "Let’s drill down into why your (2) matters.",
          "Earlier you said your (2)—what changed?",
          "Your (2) can be your strength—how?",
        ],
      ],
      [
        "* my* @family *",
        [
          "Your family—who’s in your corner?",
          "Who in your family fuels your fire?",
          "Your (3)? How do they shape your fight?",
          "When you think of your (3), what motivates you?",
        ],
      ],
      [
        "* my *",
        [
          "Your (2)? Why is that key to your victory?",
          "Does your (2) give you an edge?",
          "How important is your (2) in this battle?",
          "What’s the story behind your (2)?",
        ],
      ],
    ],
  ],

  [
    "can",
    0,
    [
      [
        "* can you *",
        [
          "You want me to (2)? I’m already in your corner.",
          "goto what",
          "Maybe you’d like to learn to (2) yourself?",
          "If I can (2), what’s next for you?",
        ],
      ],
      [
        "* can i *",
        [
          "Whether you can (2) lies in your hands.",
          "Do you want to (2)? Then lace up.",
          "Perhaps you’re afraid to (2)?",
          "goto what",
        ],
      ],
    ],
  ],

  [
    "what",
    0,
    [
      [
        "*",
        [
          "Why do you ask that, champ?",
          "What’s driving that question?",
          "What answer pumps you up?",
          "Have you asked this in the ring before?",
          "What comes to mind when you ask?",
        ],
      ],
    ],
  ],

  ["who", 0, [["who *", ["goto what"]]]],
  ["when", 0, [["when *", ["goto what"]]]],
  ["where", 0, [["where *", ["goto what"]]]],
  ["how", 0, [["how *", ["goto what"]]]],

  [
    "because",
    0,
    [
      [
        "*",
        [
          "Is that the real reason, champ?",
          "What else fuels that reason?",
          "Does that reason drive you forward?",
          "Any other reasons behind it?",
        ],
      ],
    ],
  ],

  [
    "why",
    0,
    [
      [
        "* why don't you *",
        [
          "You think I shouldn’t (2)? Then prove it.",
          "Perhaps I will (2) when the time’s right.",
          "Should you (2) instead?",
          "You want me to (2)? Why?",
        ],
      ],
      [
        "* why can't i *",
        [
          "You should be able to (2)—what’s holding you back?",
          "Do you want to (2)? Then fight for it.",
          "What if you could (2)?",
          "goto what",
        ],
      ],
      ["*", ["goto what"]],
    ],
  ],

  [
    "everyone",
    2,
    [
      [
        "* @everyone *",
        [
          "Everyone? Or just the contenders?",
          "Surely someone stands with you.",
          "Who in particular fuels your fire?",
          "You have a key ally in mind, right?",
          "Who’s that special person?",
        ],
      ],
    ],
  ],
  ["everybody", 2, [["*", ["goto everyone"]]]],
  ["nobody", 2, [["*", ["goto everyone"]]]],
  ["noone", 2, [["*", ["goto everyone"]]]],
  [
    "always",
    1,
    [
      [
        "*",
        [
          "Always? What’s a specific fight that proves it?",
          "When have you always shown that?",
          "Really—always?",
          "Give me an example, champ.",
        ],
      ],
    ],
  ],
  [
    "alike",
    10,
    [
      [
        "*",
        [
          "In what way are they alike?",
          "What does that similarity teach you?",
          "What other connections do you see?",
          "How does that link help your strategy?",
        ],
      ],
    ],
  ],
  ["like", 10, [["* @be *like *", ["goto alike"]]]],

  [
    "different",
    0,
    [
      [
        "*",
        [
          "How is it different?",
          "What distinctions do you see?",
          "What does that difference suggest?",
          "Could there be a hidden advantage?",
        ],
      ],
    ],
  ],
  [
    "giveup",
    2,
    [
      [
        "* give up *",
        [
          "Giving up? Champions finish every round—what’s your next jab?",
          "You think about quitting? Then you’re not done—you’re just getting warmed up.",
          "Quit? Ain’t in a champ’s dictionary—let’s plan your comeback.",
        ],
      ],
      [
        "* quit *",
        [
          "Quitting’s for the weak—are you weak, champ?",
          "If you quit now, you’ll never know how close you were to a knockout win.",
          "Don’t quit—reassess, recalibrate, then go again.",
        ],
      ],
    ],
  ],
  [
    "fear",
    2,
    [
      [
        "* * fear *",
        [
          "Fear means you care—use it to sharpen your focus.",
          "Nervous? That’s adrenaline—turn it into power.",
          "What if you face that fear head‑on and emerge stronger?",
        ],
      ],
    ],
  ],
  [
    "weak",
    1,
    [
      [
        "* * weak *",
        [
          "Weak? Every champ felt weak once—what changed them into champions?",
          "Vulnerability builds character—how will you turn it into strength?",
          "Weakness is a starting line, not a finish line.",
        ],
      ],
    ],
  ],
  [
    "unmotivated",
    0,
    [
      [
        "*",
        [
          "Sadness hits everyone—what if we boxed with that feeling and won?",
          "Let’s turn that slump into fuel—what’s one small win you can grab today?",
          "Champions fall down—and champions get up harder. What’s your first step?",
          "I can’t fight for you, but I’ll push you—what move will you make right now?",
        ],
      ],
    ],
  ],
  [
    "determination",
    2,
    [
      [
        "* determination *",
        [
          "Determination wins rounds—what’s your next strike?",
          "Your resolve is your strongest muscle—how will you flex it?",
        ],
      ],
    ],
  ],
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g,
  " old",
  /\bthey were( not)? me\b/g,
  "it was$1 me",
  /\bthey are( not)? me\b/g,
  "it is$1 me",
  /Are they( always)? me\b/,
  "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/,
  "that you have your$1 $2 ?",
  /\bI to have (\w+)/,
  "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./,
  "Earlier you talked about your $2.",
];

// eof
