// V3 - BRANCHING NARRATIVE with Multiple Paths and Endings
// 5 Major Choices → 3 Distinct Paths → 6 Unique Endings

const story = [
    // ACT 1 - TRIMMED & ENHANCED
    {
        text: "The city doesn't sleep. It just pretends to.",
        section: "act1",
        ambientLight: "neon-red"
    },
    {
        text: "You are Ash. Memory runner. You steal memories and sell them.",
        section: "act1"
    },
    {
        text: "It's not clean work. Nothing in this city is.",
        section: "act1"
    },
    {
        text: "Your neural port is glitching. Cheap cables. You need a mechanic.",
        section: "act1"
    },
    {
        text: "The industrial quarter. Where buildings lean against each other and people jump from roofs.",
        section: "act1"
    },
    {
        text: "They installed nets. Not to save people. To catch bodies before they damage the pavement.",
        section: "act1"
    },
    {
        text: "The shop is between a pawn broker and a corpse disposal unit. Red light above the door.",
        section: "act1",
        ambientLight: "neon-red"
    },
    {
        text: "Inside: circuit boards, synthetic organs, half-assembled limbs on hooks.",
        section: "act1"
    },
    {
        text: "A woman at the workbench. She doesn't look up.",
        section: "act1",
        ambientLight: "neon-cyan"
    },
    {
        text: "Ash: Port's glitching. Need it fixed.",
        section: "act1"
    },
    {
        text: "Mechanic: Payment upfront. No questions, no names.",
        section: "act1"
    },
    {
        text: "You transfer half your credits. Everything you have.",
        section: "act1"
    },
    {
        text: "She gestures to a chair. You sit. Tilt your head, exposing the port.",
        section: "act1"
    },
    {
        text: "Her hands are cold. Cybernetic. Military grade. Scars where metal meets flesh.",
        section: "act1"
    },
    {
        text: "Mechanic: Corroded cable. You're lucky you're not dead.",
        section: "act1"
    },
    {
        text: "She disconnects the old cable. Pain spikes through your skull. White hot. You taste copper.",
        section: "act1"
    },
    {
        text: "She slots in a new cable. Clean signal. The relief is immediate.",
        section: "act1"
    },
    {
        text: "You pay the rest. Now you're broke. She's already back at work.",
        section: "act1"
    },
    {
        text: "You leave. Three blocks away, you stop on a bridge.",
        section: "act1",
        ambientLight: "cold-purple"
    },
    {
        text: "Sixty feet down onto concrete. Quick. Clean.",
        section: "act1"
    },
    {
        text: "Scratches on the railing. Messages. Someone carved FINALLY into the metal.",
        section: "act1"
    },
    {
        text: "You're broke. The cable will last a few months. Then you'll need another repair you can't afford.",
        section: "act1"
    },
    {
        text: "The cycle never ends. Until you become product.",
        section: "act1"
    },

    // CHOICE #1: THE BRIDGE
    {
        text: "You could end it now. No more cycles. No more repairs. Just nothing.",
        section: "choice1",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Jump. End it.", path: "jumpPath" },
            { text: "Keep walking. Not tonight.", path: "continuePath" }
        ]
    }
];

// BRANCH: JUMP ENDING (Early exit)
const jumpPath = [
    {
        text: "You climb onto the railing. Your hands shake.",
        section: "jumpEnd"
    },
    {
        text: "For a second, you think about changing your mind.",
        section: "jumpEnd"
    },
    {
        text: "You don't.",
        section: "jumpEnd",
        glitch: true
    },
    {
        text: "The fall takes three seconds. Feels like longer.",
        section: "jumpEnd"
    },
    {
        text: "You don't feel the impact. Your port fries first. Neural overload from the fear.",
        section: "jumpEnd",
        ambientLight: "danger-red"
    },
    {
        text: "The nets catch your body. They always do.",
        section: "jumpEnd"
    },
    {
        text: "Cleanup crew arrives within twenty minutes. They don't check for ID.",
        section: "jumpEnd"
    },
    {
        text: "They never do. You're just another body. Another number.",
        section: "jumpEnd"
    },
    {
        text: "The city claims another one. It always does.",
        section: "jumpEnd",
        ambientLight: "death-fade"
    },
    {
        text: "ENDING 1: THE DROP",
        section: "end"
    }
];

// BRANCH: CONTINUE PATH
const continuePath = [
    {
        text: "You keep walking. Not tonight. Maybe tomorrow.",
        section: "act1continue",
        ambientLight: "neon-blue"
    },
    {
        text: "You always say tomorrow.",
        section: "act1continue"
    },
    {
        text: "Two weeks later, your port glitches again. You have no money.",
        section: "act1continue"
    },
    {
        text: "But you go anyway. The alternative is dying slowly.",
        section: "act1continue"
    },
    {
        text: "Ash: I don't have money.",
        section: "act1continue"
    },
    {
        text: "Mechanic: Then leave.",
        section: "act1continue"
    },
    {
        text: "Ash: I'll die if you don't fix it.",
        section: "act1continue"
    },
    {
        text: "Mechanic: Not my problem.",
        section: "act1continue"
    },
    {
        text: "You stand there. She finally looks at you. Gray eyes. Empty.",
        section: "act1continue"
    },
    {
        text: "Mechanic: Sit down.",
        section: "act1continue",
        ambientLight: "neon-cyan"
    },
    {
        text: "Ash: Why?",
        section: "act1continue"
    },
    {
        text: "Mechanic: Because I need you alive. For now.",
        section: "act1continue"
    },
    {
        text: "She fixes your port. Doesn't charge you. Doesn't explain.",
        section: "act1continue"
    },
    {
        text: "She hands you a data chip. Corporate encryption.",
        section: "act1continue"
    },
    {
        text: "Mechanic: Deliver this. You get half the payment.",
        section: "act1continue"
    },
    {
        text: "Ash: What's on it?",
        section: "act1continue"
    },
    {
        text: "Mechanic: Not your concern. Deliver it or starve.",
        section: "act1continue"
    },

    // CHOICE #2: TAKE THE JOB?
    {
        text: "It's illegal work. You know it is. But you're broke.",
        section: "choice2",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Take the job. You need to survive.", path: "acceptJobPath" },
            { text: "Refuse. You still have standards.", path: "refuseJobPath" }
        ]
    }
];

// BRANCH: REFUSE JOB (loops back with consequences)
const refuseJobPath = [
    {
        text: "Ash: I don't do illegal work.",
        section: "refuseJob"
    },
    {
        text: "She stares at you. No expression.",
        section: "refuseJob"
    },
    {
        text: "Mechanic: Then starve.",
        section: "refuseJob"
    },
    {
        text: "You leave. Try to find legal work. There isn't any.",
        section: "refuseJob"
    },
    {
        text: "One week later, you're eating from dumpsters. Your port is glitching again.",
        section: "refuseJob",
        ambientLight: "cold-purple"
    },
    {
        text: "Two weeks later, you're back at her door.",
        section: "refuseJob"
    },
    {
        text: "She opens it. Doesn't say anything.",
        section: "refuseJob",
        ambientLight: "neon-cyan"
    },
    {
        text: "Ash: I'll take the job.",
        section: "refuseJob"
    },
    {
        text: "Mechanic: I know. You always do.",
        section: "refuseJob"
    },
    {
        text: "She hands you the same chip. You take it.",
        section: "refuseJob"
    },
    {
        text: "Now she knows you're desperate. Knows you'll do anything.",
        section: "refuseJob"
    },
    // Rejoins main path
    {
        text: "You start running jobs for her. Data transfers. Hardware pickups. Illegal work.",
        section: "act1merge"
    },
    {
        text: "She pays enough to keep you alive. Barely.",
        section: "act1merge"
    },
    {
        text: "You never talk beyond transactions. Three months pass.",
        section: "act1merge"
    },
    {
        text: "Then the real message comes.",
        section: "act1merge",
        ambientLight: "danger-red"
    },
    // Jump to ACT 2
    {
        text: "CONTINUE_TO_ACT2",
        section: "transition"
    }
];

// BRANCH: ACCEPT JOB (main path)
const acceptJobPath = [
    {
        text: "You take the chip. Survival over morals.",
        section: "acceptJob"
    },
    {
        text: "You start running jobs for her. Data transfers. Hardware pickups. Illegal work.",
        section: "acceptJob"
    },
    {
        text: "She pays enough to keep you alive. Barely.",
        section: "acceptJob"
    },
    {
        text: "You never talk beyond transactions. Three months pass.",
        section: "acceptJob"
    },
    {
        text: "Then the real message comes.",
        section: "acceptJob",
        ambientLight: "danger-red"
    },
    // Jump to ACT 2
    {
        text: "CONTINUE_TO_ACT2",
        section: "transition"
    }
];

// ACT 2 - THE JOB
const act2 = [
    {
        text: "3 AM. Anonymous sender. Corporate encryption.",
        section: "act2",
        glitch: true
    },
    {
        text: "The payment amount stops you from deleting it. Enough money to leave the city.",
        section: "act2"
    },
    {
        text: "The job: extract a memory set from your own head.",
        section: "act2",
        ambientLight: "neon-cyan"
    },
    {
        text: "Two years ago, you sold someone to the corporation. The deal went bad.",
        section: "act2"
    },
    {
        text: "They used you as a test subject. Wiped your memories. Stored data in your brain.",
        section: "act2"
    },
    {
        text: "Gave you a new face. New name. Then lost track of you for two years.",
        section: "act2"
    },
    {
        text: "Now they found you. Now they want their data back.",
        section: "act2"
    },
    {
        text: "The extraction could kill you. 73% fatality rate.",
        section: "act2",
        ambientLight: "danger-red"
    },
    {
        text: "But if it works, you're free. You can disappear. Start over.",
        section: "act2"
    },

    // CHOICE #3: ACCEPT EXTRACTION?
    {
        text: "This is your chance to escape. But the odds are bad. And something feels wrong.",
        section: "choice3",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Accept the extraction job. Take the risk.", path: "extractionPath" },
            { text: "Refuse. This is a trap.", path: "refuseExtractionPath" }
        ]
    }
];

// BRANCH: REFUSE EXTRACTION - PATH A "THE RUNNER"
const refuseExtractionPath = [
    {
        text: "You delete the message. Whatever they want, it's not worth dying for.",
        section: "pathA",
        ambientLight: "neon-blue"
    },
    {
        text: "Two days later, corporate security kicks in your door.",
        section: "pathA",
        glitch: true
    },
    {
        text: "They don't ask questions. They just start tearing apart your apartment.",
        section: "pathA"
    },
    {
        text: "Looking for you. Looking for the data. Looking for anything.",
        section: "pathA"
    },
    {
        text: "You're not there. You ran the moment you deleted the message.",
        section: "pathA"
    },
    {
        text: "You're at the mechanic's shop. Banging on the door.",
        section: "pathA",
        ambientLight: "danger-red"
    },
    {
        text: "Ash: They're hunting me. I need help.",
        section: "pathA"
    },
    {
        text: "She opens the door. Pulls you inside. Locks it.",
        section: "pathA",
        ambientLight: "neon-cyan"
    },
    {
        text: "Mechanic: You refused them.",
        section: "pathA"
    },
    {
        text: "Ash: It was a trap. I know it was.",
        section: "pathA"
    },
    {
        text: "Mechanic: It was. They would've killed you after the extraction.",
        section: "pathA"
    },
    {
        text: "Ash: How do you know?",
        section: "pathA"
    },
    {
        text: "She doesn't answer. Just starts packing equipment.",
        section: "pathA"
    },
    {
        text: "Mechanic: I know someone. Data broker. He helps people disappear.",
        section: "pathA"
    },
    {
        text: "Mechanic: But it costs. Everything you have. Everything I have.",
        section: "pathA"
    },
    {
        text: "Ash: Why would you help me?",
        section: "pathA"
    },
    {
        text: "She finally looks at you. Those gray eyes. Empty. But something else there now.",
        section: "pathA"
    },
    {
        text: "Mechanic: Because I need you alive. For now.",
        section: "pathA"
    },
    {
        text: "The broker operates out of the edge district. Where the city ends and wasteland begins.",
        section: "pathA",
        ambientLight: "neon-red"
    },
    {
        text: "The building is half-collapsed. Squatters on every floor. Fires in barrels.",
        section: "pathA"
    },
    {
        text: "The broker is old. Actual flesh, barely any chrome. That's rare.",
        section: "pathA"
    },
    {
        text: "Broker: You want out. Corps want you dead. I can help.",
        section: "pathA"
    },
    {
        text: "Broker: New IDs. Scrambled neural signatures. Transport to the outer settlements.",
        section: "pathA"
    },
    {
        text: "Broker: But it costs. Both of you. Everything.",
        section: "pathA"
    },
    {
        text: "Ash: Outer settlements? I thought those were just rumors.",
        section: "pathA"
    },
    {
        text: "Broker: They're real. Beyond the wasteland. Beyond corp control. Barely.",
        section: "pathA"
    },
    {
        text: "Broker: Hard living. But it's living. Better than being corp product.",
        section: "pathA"
    },
    {
        text: "The mechanic transfers her credits. Everything. Years of work. Gone.",
        section: "pathA"
    },
    {
        text: "You do the same. The broker nods.",
        section: "pathA"
    },
    {
        text: "Broker: Three days. Come back at midnight. Bring nothing. Be ready to leave forever.",
        section: "pathA"
    },
    {
        text: "You wait in a safe house. An abandoned factory. Just you and her.",
        section: "pathA",
        ambientLight: "cold-purple"
    },
    {
        text: "Ash: Why are you really helping me?",
        section: "pathA"
    },
    {
        text: "Mechanic: You really don't remember, do you?",
        section: "pathA"
    },
    {
        text: "Ash: Remember what?",
        section: "pathA"
    },
    {
        text: "She holds up her metal hands. Shows you the scars.",
        section: "pathA",
        glitch: true
    },
    {
        text: "Mechanic: You did this. Two years ago. You sold me to the corps.",
        section: "pathA"
    },
    {
        text: "The memory hits like a knife. Fragmented. Corrupted. But there.",
        section: "pathA",
        ambientLight: "memory-flash"
    },
    {
        text: "A woman. Younger. Flesh hands. Screaming.",
        section: "pathA"
    },
    {
        text: "You. Watching. Taking payment.",
        section: "pathA"
    },
    {
        text: "The saw. Her hands. Gone.",
        section: "pathA"
    },
    {
        text: "Ash: I did that to you.",
        section: "pathA",
        ambientLight: "neon-red"
    },
    {
        text: "Mechanic: Yes.",
        section: "pathA"
    },
    {
        text: "Ash: Then why help me escape?",
        section: "pathA"
    },
    {
        text: "Mechanic: Because if you die here, you escape. But if you live out there, in the wasteland...",
        section: "pathA"
    },
    {
        text: "Mechanic: You'll suffer every day. And I'll be there to watch.",
        section: "pathA"
    },
    {
        text: "Three days pass. Midnight comes. The broker has transport. An old cargo hauler.",
        section: "pathA",
        ambientLight: "neon-blue"
    },
    {
        text: "Broker: Last chance. Once you leave, you can't come back. Ever.",
        section: "pathA"
    },

    // CHOICE: ESCAPE OR BETRAY
    {
        text: "The hauler is running. The wasteland waits. Or you could turn her in. Get your old life back.",
        section: "pathAchoice",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Get in the hauler. Escape together.", path: "escapeEnding" },
            { text: "Alert corporate security. Betray her.", path: "betrayEnding" }
        ]
    }
];

// ENDING #4: THE DISAPPEARED
const escapeEnding = [
    {
        text: "You get in the hauler. She follows.",
        section: "escapeEnd"
    },
    {
        text: "The city shrinks behind you. Neon fades. Gray concrete becomes gray wasteland.",
        section: "escapeEnd",
        ambientLight: "death-fade"
    },
    {
        text: "Three days of driving. Nothing but dust and ruins.",
        section: "escapeEnd"
    },
    {
        text: "The outer settlements are real. Barely. Prefab structures. Solar panels. Hydroponics.",
        section: "escapeEnd"
    },
    {
        text: "Five hundred people. Maybe. All running from something.",
        section: "escapeEnd",
        ambientLight: "neon-blue"
    },
    {
        text: "You work. Physical labor. Maintaining systems. Fixing things. It's hard.",
        section: "escapeEnd"
    },
    {
        text: "She works next to you. Her metal hands faster than anyone's flesh.",
        section: "escapeEnd"
    },
    {
        text: "You don't talk much. There's nothing to say.",
        section: "escapeEnd"
    },
    {
        text: "Every morning you wake up. Every night you sleep.",
        section: "escapeEnd"
    },
    {
        text: "No memories to run. No corps to fear. No cycle to escape.",
        section: "escapeEnd"
    },
    {
        text: "Just existence. Simple. Hard. Real.",
        section: "escapeEnd"
    },
    {
        text: "She watches you. Always. Waiting for you to slip. To show what you really are.",
        section: "escapeEnd",
        ambientLight: "cold-purple"
    },
    {
        text: "You never do. Because you're a coward. Because you'll never change.",
        section: "escapeEnd"
    },
    {
        text: "And she knows it. And she stays anyway.",
        section: "escapeEnd"
    },
    {
        text: "Not forgiveness. Just... presence. Watching. Waiting.",
        section: "escapeEnd"
    },
    {
        text: "You'll both die out here eventually. The wasteland takes everyone.",
        section: "escapeEnd"
    },
    {
        text: "But at least you'll die free. Whatever that means.",
        section: "escapeEnd",
        ambientLight: "death-fade"
    },
    {
        text: "ENDING 4: THE DISAPPEARED",
        section: "end"
    }
];

// ENDING #5: THE SELLOUT
const betrayEnding = [
    {
        text: "You trigger your emergency beacon. Corporate security will be here in minutes.",
        section: "betrayEnd",
        glitch: true
    },
    {
        text: "She sees what you're doing. Her face doesn't change.",
        section: "betrayEnd"
    },
    {
        text: "Mechanic: Of course. Of course you'd do this.",
        section: "betrayEnd"
    },
    {
        text: "Ash: They'll pay for you. Enough to clear my record. Enough to go back.",
        section: "betrayEnd"
    },
    {
        text: "Mechanic: Go back to what? Being a parasite?",
        section: "betrayEnd"
    },
    {
        text: "Ash: It's what I am.",
        section: "betrayEnd"
    },
    {
        text: "She could run. She doesn't. Just stands there.",
        section: "betrayEnd"
    },
    {
        text: "Mechanic: I knew you'd do this. I wanted to see if you'd prove me wrong.",
        section: "betrayEnd"
    },
    {
        text: "Mechanic: You didn't.",
        section: "betrayEnd"
    },
    {
        text: "Corporate security arrives. Black vans. Armed drones.",
        section: "betrayEnd",
        ambientLight: "danger-red"
    },
    {
        text: "They take her. She doesn't resist. Just looks at you.",
        section: "betrayEnd"
    },
    {
        text: "Empty eyes. Like she's already dead.",
        section: "betrayEnd"
    },
    {
        text: "They pay you. Clear your record. Give you a new apartment. New port. New life.",
        section: "betrayEnd",
        ambientLight: "neon-blue"
    },
    {
        text: "Six months later, you're running memories again. Same cycle. Same work.",
        section: "betrayEnd"
    },
    {
        text: "Nothing changed. Nothing ever changes.",
        section: "betrayEnd"
    },
    {
        text: "You check the records. She was processed three weeks after capture.",
        section: "betrayEnd"
    },
    {
        text: "Full neural wipe. Reprogrammed. Corporate asset now.",
        section: "betrayEnd"
    },
    {
        text: "She's still alive. Technically. Working in some factory. No memories. No self.",
        section: "betrayEnd"
    },
    {
        text: "You tell yourself it doesn't matter. She was going to suffer anyway.",
        section: "betrayEnd"
    },
    {
        text: "You tell yourself you made the right choice.",
        section: "betrayEnd",
        ambientLight: "cold-purple"
    },
    {
        text: "You're lying. You always lie.",
        section: "betrayEnd"
    },
    {
        text: "But you're alive. And that's what matters. Right?",
        section: "betrayEnd"
    },
    {
        text: "Right?",
        section: "betrayEnd",
        ambientLight: "death-fade"
    },
    {
        text: "ENDING 5: THE SELLOUT",
        section: "end"
    }
];

// BRANCH: ACCEPT EXTRACTION - MAIN PATH
const extractionPath = [
    {
        text: "You message the mechanic. Need extraction equipment.",
        section: "extraction",
        ambientLight: "neon-cyan"
    },
    {
        text: "She responds immediately.",
        section: "extraction"
    },
    {
        text: "Mechanic: Come to the shop. Midnight.",
        section: "extraction"
    },
    {
        text: "When you arrive, she's set up medical equipment. Neural interface. Stabilizers.",
        section: "extraction"
    },
    {
        text: "Ash: How much?",
        section: "extraction"
    },
    {
        text: "Mechanic: Nothing. I'll do it for free.",
        section: "extraction"
    },
    {
        text: "Ash: Why?",
        section: "extraction"
    },
    {
        text: "Mechanic: Because I need to see what's in your head.",
        section: "extraction"
    },
    {
        text: "Mechanic: If your heart stops, I can restart it. If your brain hemorrhages, you're dead. Understand?",
        section: "extraction"
    },
    {
        text: "Ash: Understood.",
        section: "extraction"
    },
    {
        text: "She connects the cables. Cold metal against your port. The interface goes live.",
        section: "extraction"
    },
    {
        text: "The first extraction pulls fragments. Pain like white fire in your skull.",
        section: "extraction",
        glitch: true,
        ambientLight: "memory-flash"
    },
    {
        text: "A woman's face. Young. Terrified. Screaming.",
        section: "extraction"
    },
    {
        text: "Woman's voice: Please don't do this. Please. We can figure something else out—",
        section: "extraction"
    },
    {
        text: "The memory cuts. You're back in the chair. Blood from your nose. Warm. Metallic taste.",
        section: "extraction"
    },
    {
        text: "Mechanic: You saw something.",
        section: "extraction"
    },

    // CHOICE #4: ASK OR STAY SILENT
    {
        text: "The woman's face is burned into your mind. You don't know her. But something about her...",
        section: "choice4",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Ask who she was.", path: "askPath" },
            { text: "Stay silent. Not your problem.", path: "silentPath" }
        ]
    }
];

// BRANCH: ASK ABOUT WOMAN
const askPath = [
    {
        text: "Ash: Who was she? The woman in the memory.",
        section: "ask"
    },
    {
        text: "The mechanic pauses. Her metal hands stop moving.",
        section: "ask"
    },
    {
        text: "Mechanic: You really don't remember.",
        section: "ask"
    },
    {
        text: "Ash: Should I?",
        section: "ask"
    },
    {
        text: "Mechanic: We'll go again.",
        section: "ask"
    },
    {
        text: "She doesn't answer your question. Just reconnects the cables.",
        section: "ask"
    },
    // Continue to more extractions
    {
        text: "CONTINUE_EXTRACTION",
        section: "transition"
    }
];

// BRANCH: STAY SILENT
const silentPath = [
    {
        text: "Ash: A woman. Don't know who.",
        section: "silent"
    },
    {
        text: "The mechanic stares at you. Something in her eyes. Anger. Disappointment.",
        section: "silent"
    },
    {
        text: "Mechanic: Of course you don't. We'll go again.",
        section: "silent"
    },
    {
        text: "Her movements are rougher now. The next connection hurts more.",
        section: "silent"
    },
    // Continue to more extractions
    {
        text: "CONTINUE_EXTRACTION",
        section: "transition"
    }
];

// EXTRACTION CONTINUES (merges both paths)
const extractionContinue = [
    {
        text: "More sessions. More fragments. Each one burns deeper.",
        section: "extractCont"
    },
    {
        text: "The woman crying. Bandages on her arms. Blood soaking through. Bright red. Fresh.",
        section: "extractCont",
        glitch: true
    },
    {
        text: "Woman's voice: They took my hands. They took everything—",
        section: "extractCont"
    },
    {
        text: "Static. Pain. You wake up on the floor. Cold concrete against your face.",
        section: "extractCont"
    },
    {
        text: "The mechanic stands over you. Her metal hands are fists.",
        section: "extractCont"
    },
    {
        text: "Mechanic: One more extraction. Final one.",
        section: "extractCont"
    },
    {
        text: "You don't argue. You never do.",
        section: "extractCont"
    },
    {
        text: "She maxes the stabilizers. This one will hurt more.",
        section: "extractCont"
    },
    {
        text: "Mechanic: If something goes wrong—",
        section: "extractCont"
    },
    {
        text: "Ash: Then I die. I know.",
        section: "extractCont"
    },
    {
        text: "She connects the cables. Everything goes wrong.",
        section: "extractCont",
        ambientLight: "danger-red"
    },

    // ACT 3 - THE TRUTH
    {
        text: "The final extraction tears something open. Not fragments. Complete memory.",
        section: "act3",
        glitch: true,
        ambientLight: "memory-flash"
    },
    {
        text: "You're in this shop. But different. Cleaner. The woman has flesh hands.",
        section: "act3"
    },
    {
        text: "Your old face in the metal. Before they changed you.",
        section: "act3"
    },
    {
        text: "Past Ash: I need you to store some data. Temporarily. Big payout.",
        section: "act3"
    },
    {
        text: "Woman: What kind of data?",
        section: "act3"
    },
    {
        text: "Past Ash: Corporate stuff. Nothing dangerous. Just needs to be off-grid.",
        section: "act3"
    },
    {
        text: "Memory jumps. Three weeks later.",
        section: "act3"
    },
    {
        text: "Woman: You said temporary. Get this out of my head. Now.",
        section: "act3"
    },
    {
        text: "Past Ash: Just a few more days. Trust me.",
        section: "act3"
    },
    {
        text: "Memory fragments. Corporate brokers. Credits transferring. Security.",
        section: "act3",
        glitch: true
    },
    {
        text: "Woman: You sold me! You knew they wanted me!",
        section: "act3"
    },
    {
        text: "Past Ash: I didn't— I thought—",
        section: "act3"
    },
    {
        text: "Woman: You're lying! You always lie!",
        section: "act3"
    },
    {
        text: "Surgical table. Her hands strapped down. Screaming.",
        section: "act3",
        ambientLight: "danger-red"
    },
    {
        text: "Woman: Please. I'm a mechanic. I need my hands. Please don't—",
        section: "act3"
    },
    {
        text: "The saw starts. High-pitched whine. Smell of burning bone.",
        section: "act3",
        glitch: true
    },
    {
        text: "Her screaming. You watching. Counting payment. The sound never stops.",
        section: "act3"
    },
    {
        text: "Corporate security turns on you. The deal was a trap. For both.",
        section: "act3"
    },
    {
        text: "They wipe your memories. Give you a new face. Make you forget.",
        section: "act3"
    },
    {
        text: "You wake up. Present day. Blood everywhere.",
        section: "act3",
        ambientLight: "neon-red"
    },
    {
        text: "The mechanic stands over you. Her metal hands clenched.",
        section: "act3"
    },
    {
        text: "You remember now. All of it.",
        section: "act3"
    },
    {
        text: "Ash: You're her. I did that to you.",
        section: "act3"
    },
    {
        text: "Mechanic: Yes.",
        section: "act3"
    },
    {
        text: "Ash: You've known this whole time.",
        section: "act3"
    },
    {
        text: "Mechanic: Yes. They changed your face. I recognized your neural signature. Your walking pattern.",
        section: "act3"
    },
    {
        text: "Mechanic: I've been tracking you for two years. Waiting for this.",
        section: "act3"
    },
    {
        text: "Ash: Why didn't you just kill me?",
        section: "act3"
    },
    {
        text: "Mechanic: Because death is too easy. You don't get to escape.",
        section: "act3",
        ambientLight: "cold-purple"
    },
    {
        text: "She pulls out a data chip.",
        section: "act3"
    },
    {
        text: "Mechanic: This is what's in your head. Not corporate secrets. A virus.",
        section: "act3"
    },
    {
        text: "Mechanic: I've been building it for two years. Every session. Every job.",
        section: "act3"
    },
    {
        text: "Mechanic: When you upload it, it'll destroy their memory trafficking network.",
        section: "act3"
    },
    {
        text: "Mechanic: Thousands freed. The whole system burned.",
        section: "act3"
    },
    {
        text: "Ash: What happens to me?",
        section: "act3"
    },
    {
        text: "Mechanic: The upload will erase you. Your mind. Your personality. Everything.",
        section: "act3",
        glitch: true
    },
    {
        text: "Mechanic: You'll still be breathing. But you won't be you anymore.",
        section: "act3"
    },
    {
        text: "Mechanic: You'll be nothing. Just like you made me nothing.",
        section: "act3"
    },

    // CHOICE #5: HOW DO YOU RESPOND?
    {
        text: "The truth sits between you. Heavy. Undeniable.",
        section: "choice5",
        isChoice: true,
        prompt: "How do you respond?",
        choices: [
            { text: "I'm sorry. I was desperate. I didn't know.", path: "apologizePath" },
            { text: "I'd do it again. Survival over everything.", path: "honestPath" },
            { text: "Attack her. End this.", path: "attackPath" }
        ]
    }
];

// BRANCH: APOLOGIZE
const apologizePath = [
    {
        text: "Ash: I'm sorry. I was desperate. I didn't know they'd—",
        section: "apologize"
    },
    {
        text: "Mechanic: Stop.",
        section: "apologize"
    },
    {
        text: "Ash: I never meant for—",
        section: "apologize"
    },
    {
        text: "Mechanic: Stop lying.",
        section: "apologize",
        ambientLight: "danger-red"
    },
    {
        text: "Mechanic: You knew. You always knew. You just didn't care.",
        section: "apologize"
    },
    {
        text: "Mechanic: And even now, you're trying to lie your way out.",
        section: "apologize"
    },
    {
        text: "She's right. You know she's right.",
        section: "apologize"
    },
    {
        text: "Mechanic: Apologies don't mean anything here. They never did.",
        section: "apologize"
    },
    // Continue to final choice
    {
        text: "CONTINUE_TO_FINAL_CHOICE",
        section: "transition"
    }
];

// BRANCH: BE HONEST
const honestPath = [
    {
        text: "Ash: I'd do it again. If it meant surviving.",
        section: "honest"
    },
    {
        text: "Mechanic: At least you're honest about being a monster.",
        section: "honest"
    },
    {
        text: "Ash: We're all monsters here. You know that.",
        section: "honest"
    },
    {
        text: "Mechanic: Maybe. But I was never a parasite.",
        section: "honest",
        ambientLight: "cold-purple"
    },
    {
        text: "Something changes in her eyes. Not respect. But... acknowledgment.",
        section: "honest"
    },
    {
        text: "Mechanic: You haven't changed. You won't change. But at least you admit it.",
        section: "honest"
    },
    // Continue to final choice
    {
        text: "CONTINUE_TO_FINAL_CHOICE",
        section: "transition"
    }
];

// BRANCH: ATTACK - PATH B "THE ANIMAL"
const attackPath = [
    {
        text: "You lunge at her. Desperate. Cornered.",
        section: "pathB",
        glitch: true,
        ambientLight: "danger-red"
    },
    {
        text: "She doesn't move. Doesn't flinch.",
        section: "pathB"
    },
    {
        text: "Your hands reach for her throat.",
        section: "pathB"
    },
    {
        text: "Her metal hand catches your wrist. Crushing pressure. You hear bones crack.",
        section: "pathB"
    },
    {
        text: "You scream. She doesn't let go.",
        section: "pathB"
    },
    {
        text: "Her other hand moves. Fast. Military training. You never had a chance.",
        section: "pathB"
    },
    {
        text: "Something sharp in your throat. Your port. She ripped it out.",
        section: "pathB",
        glitch: true
    },
    {
        text: "Neural shock. Your brain shutting down. Blood everywhere.",
        section: "pathB"
    },
    {
        text: "You're on the floor. Can't move. Can't breathe.",
        section: "pathB"
    },
    {
        text: "She stands over you. Holds your port in her metal hand. Blood dripping.",
        section: "pathB"
    },
    {
        text: "Mechanic: You never learn. Violence always has consequences.",
        section: "pathB"
    },
    {
        text: "Ash: ...please...",
        section: "pathB"
    },
    {
        text: "Mechanic: No.",
        section: "pathB"
    },
    {
        text: "Everything fades. Fast. Neural death takes seconds.",
        section: "pathB",
        ambientLight: "death-fade"
    },
    {
        text: "The last thing you see is her face. Empty. Like you never mattered.",
        section: "pathB"
    },
    {
        text: "You didn't.",
        section: "pathB"
    },
    {
        text: "ENDING 6: THE DESERVED",
        section: "end"
    }
];

// FINAL CHOICE (for main path only)
const finalChoice = [
        // CHOICE: Stay with Riven or leave and end it yourself
    {
        text: "The truth sits between you. Heavy. You could stay and face whatever she has planned. Or walk out and end it your own way.",
        section: "harvestChoice",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Stay. Face what Riven has planned.", path: "continueToFinalChoice" },
            { text: "Leave. You can't do this. End it yourself.", path: "harvestEnd" }
        ]
    },

{
        text: "She places the upload device in your hand.",
        section: "finalChoice"
    },
    {
        text: "Mechanic: Choose. Either way, you suffer.",
        section: "finalChoice",
        ambientLight: "danger-red"
    },
    {
        text: "Mechanic: Upload and erase yourself. Abort and live knowing what you are.",
        section: "finalChoice"
    },
    {
        text: "The device sits in your hand. Heavy. Final.",
        section: "finalChoice"
    },
    {
        text: "You don't deserve mercy. You never did.",
        section: "finalChoice"
    },

    // FINAL CHOICE
    {
        text: "This is it. The end. One way or another.",
        section: "finalChoicePoint",
        isChoice: true,
        prompt: "What do you do?",
        choices: [
            { text: "Complete the upload. Erase yourself.", path: "uploadEnd" },
            { text: "Abort the upload. Keep existing.", path: "abortEnd" }
        ]
    }
];

// ENDING #2: THE ERASING
const uploadEnd = [
    {
        text: "You plug in the device.",
        section: "uploadEnd"
    },
    {
        text: "She doesn't stop you. Just watches.",
        section: "uploadEnd"
    },
    {
        text: "Ash: Yeah. It's what I deserve.",
        section: "uploadEnd"
    },
    {
        text: "The upload begins.",
        section: "uploadEnd",
        glitch: true,
        ambientLight: "danger-red"
    },
    {
        text: "Code tears through your mind. Not like fire. Like broken glass in your brain.",
        section: "uploadEnd"
    },
    {
        text: "Every memory burning. Every thought dissolving.",
        section: "uploadEnd"
    },
    {
        text: "Your legs give out. You hit the floor hard.",
        section: "uploadEnd"
    },
    {
        text: "She doesn't catch you. Just watches you die.",
        section: "uploadEnd"
    },
    {
        text: "Through the connection, you feel the network burning.",
        section: "uploadEnd"
    },
    {
        text: "Thousands of stolen memories being freed. Returned. Deleted.",
        section: "uploadEnd"
    },
    {
        text: "People waking up. Remembering. Being human again.",
        section: "uploadEnd"
    },
    {
        text: "It's not redemption. Nothing can redeem what you did.",
        section: "uploadEnd",
        ambientLight: "neon-cyan"
    },
    {
        text: "But it's something.",
        section: "uploadEnd"
    },
    {
        text: "You try to speak. To apologize. Nothing comes out.",
        section: "uploadEnd"
    },
    {
        text: "She watches. Her face is stone.",
        section: "uploadEnd"
    },
    {
        text: "Everything is fading. Pain. Guilt. Memories.",
        section: "uploadEnd"
    },
    {
        text: "You're disappearing. Piece by piece.",
        section: "uploadEnd"
    },
    {
        text: "It doesn't feel like relief. It just feels like ending.",
        section: "uploadEnd",
        ambientLight: "death-fade"
    },
    {
        text: "—",
        section: "uploadEnd"
    },
    {
        text: "—",
        section: "uploadEnd"
    },
    {
        text: "—",
        section: "uploadEnd"
    },
    {
        text: "Three weeks later.",
        section: "uploadEnd",
        ambientLight: "neon-blue"
    },
    {
        text: "She returns to her shop. Someone sits in the corner. Staring at nothing.",
        section: "uploadEnd"
    },
    {
        text: "It's you. Your body. Empty eyes.",
        section: "uploadEnd"
    },
    {
        text: "She kept you alive. Illegal life support. Black market nutrients.",
        section: "uploadEnd"
    },
    {
        text: "You don't recognize her. Don't recognize anything.",
        section: "uploadEnd"
    },
    {
        text: "Sometimes you make sounds. Not words. Just sounds.",
        section: "uploadEnd"
    },
    {
        text: "She feeds you. Keeps you functional.",
        section: "uploadEnd"
    },
    {
        text: "You're a pet. A trophy. A reminder.",
        section: "uploadEnd"
    },
    {
        text: "A customer comes in.",
        section: "uploadEnd"
    },
    {
        text: "Customer: What's that?",
        section: "uploadEnd"
    },
    {
        text: "Riven: Nothing important.",
        section: "uploadEnd"
    },
    {
        text: "She goes back to work. Soldering. Building. Fixing.",
        section: "uploadEnd"
    },
    {
        text: "Her hands don't shake anymore.",
        section: "uploadEnd"
    },
    {
        text: "Revenge didn't fix her. Nothing will.",
        section: "uploadEnd",
        ambientLight: "cold-purple"
    },
    {
        text: "But at least you're suffering.",
        section: "uploadEnd"
    },
    {
        text: "ENDING 2: THE ERASING",
        section: "end"
    }
];

// ENDING #3: THE COWARD
const abortEnd = [
    {
        text: "You abort the upload.",
        section: "abortEnd"
    },
    {
        text: "The device goes dark. Connection severs.",
        section: "abortEnd"
    },
    {
        text: "She doesn't look surprised. She knew.",
        section: "abortEnd"
    },
    {
        text: "Mechanic: Of course. You always choose yourself.",
        section: "abortEnd"
    },
    {
        text: "Ash: I—",
        section: "abortEnd"
    },
    {
        text: "Mechanic: Get out.",
        section: "abortEnd"
    },
    {
        text: "Mechanic: You ruined me, and you'd do it again.",
        section: "abortEnd"
    },
    {
        text: "Mechanic: GET OUT.",
        section: "abortEnd",
        ambientLight: "danger-red"
    },
    {
        text: "Boots. Corporate security. The failed upload triggered an alert.",
        section: "abortEnd",
        glitch: true
    },
    {
        text: "She pulls a gun from under the workbench.",
        section: "abortEnd"
    },
    {
        text: "Mechanic: Go. Back door.",
        section: "abortEnd"
    },
    {
        text: "Ash: Why are you—",
        section: "abortEnd"
    },
    {
        text: "Mechanic: I'm not helping you. I'm making sure you live long enough to suffer.",
        section: "abortEnd"
    },
    {
        text: "The door bursts open. You run.",
        section: "abortEnd"
    },
    {
        text: "Gunfire. Shouting. Breaking glass.",
        section: "abortEnd"
    },
    {
        text: "You keep running. You don't look back.",
        section: "abortEnd"
    },
    {
        text: "—",
        section: "abortEnd"
    },
    {
        text: "—",
        section: "abortEnd"
    },
    {
        text: "—",
        section: "abortEnd"
    },
    {
        text: "Two months later.",
        section: "abortEnd",
        ambientLight: "neon-blue"
    },
    {
        text: "You're still in the city. Still running memories. Still alive.",
        section: "abortEnd"
    },
    {
        text: "The corporation found you. Made you an offer.",
        section: "abortEnd"
    },
    {
        text: "Work for them, or become product. You chose work.",
        section: "abortEnd"
    },
    {
        text: "They extracted their data remotely while you were running.",
        section: "abortEnd"
    },
    {
        text: "Then wiped everything about her. Standard procedure.",
        section: "abortEnd"
    },
    {
        text: "The jobs are worse now. Darker.",
        section: "abortEnd"
    },
    {
        text: "They know what you are. They use that.",
        section: "abortEnd"
    },
    {
        text: "You go to the bridge sometimes.",
        section: "abortEnd",
        ambientLight: "cold-purple"
    },
    {
        text: "Someone added a new scratch. COWARD.",
        section: "abortEnd"
    },
    {
        text: "You run your fingers over it. You know it's about you.",
        section: "abortEnd"
    },
    {
        text: "But you keep walking. You always do.",
        section: "abortEnd"
    },
    {
        text: "One night, you see a shop. Red light off. Door sealed. Condemned.",
        section: "abortEnd"
    },
    {
        text: "Records say the owner died two months ago. Shootout with corporate security.",
        section: "abortEnd"
    },
    {
        text: "She took four with her. Fought to the end.",
        section: "abortEnd"
    },
    {
        text: "You feel nothing. Or maybe everything. You can't tell anymore.",
        section: "abortEnd"
    },
    {
        text: "You don't remember her name. Don't remember her face.",
        section: "abortEnd"
    },
    {
        text: "The wipe was thorough.",
        section: "abortEnd"
    },
    {
        text: "But something in your chest aches when you look at that sealed door.",
        section: "abortEnd"
    },
    {
        text: "You're still broke. Still alone. Still waiting to die.",
        section: "abortEnd"
    },
    {
        text: "But you won't jump. You never will.",
        section: "abortEnd",
        ambientLight: "cold-purple"
    },
    {
        text: "That night, you stand on the bridge. Pull out a knife. Add your own message.",
        section: "abortEnd"
    },
    {
        text: "TOMORROW.",
        section: "abortEnd"
    },
    {
        text: "Then you keep walking.",
        section: "abortEnd"
    },
    {
        text: "Because tomorrow never comes.",
        section: "abortEnd"
    },
    {
        text: "This is what you deserve. To keep living. To keep existing.",
        section: "abortEnd"
    },
    {
        text: "To carry this ache you can't explain and can't remember.",
        section: "abortEnd",
        ambientLight: "death-fade"
    },
    {
        text: "ENDING 3: THE COWARD",
        section: "end"
    }
];

// Export all paths
const allPaths = {
    jumpPath,
    continuePath,
    refuseJobPath,
    acceptJobPath,
    act2,
    refuseExtractionPath,
    escapeEnding,
    betrayEnding,
    extractionPath,
    askPath,
    silentPath,
    extractionContinue,
    apologizePath,
    honestPath,
    attackPath,
    finalChoice,
    uploadEnd,
    abortEnd
};
