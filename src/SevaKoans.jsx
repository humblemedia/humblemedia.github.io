import { useState } from "react";

const MARKERS = [
  {
    id: "M1",
    name: "Authority Elevation",
    detects: "Leader positioned as unquestionable",
    redFlag: "\"He's one of the smartest men in the world\"",
    color: "#C2185B",
    original: {
      sanskrit: "Kalyāṇa-mittata",
      devanagari: "कल्याणमित्तता",
      meaning: "Spiritual friendship — the teacher as guide",
      teaching: "In authentic Buddhist practice, the teacher is a finger pointing at the moon. The student's job is to see the moon, not worship the finger. The teacher-student relationship is collaborative, temporary, and ultimately dissolves — the teacher's success is measured by the student's independence, not their devotion.",
      corruption: "The finger becomes the moon. The teacher becomes irreplaceable, unquestionable, uniquely enlightened. Questioning the teacher is reframed as a personal deficiency — your ego, your disease, your lack of surrender. The relationship that was designed to liberate becomes the mechanism of control."
    },
    koans: [
      {
        text: "If you meet the Buddha on the road, kill him.",
        source: "Linji Yixuan",
        why: "The most direct anti-guru instruction in all of Zen. Any teacher who positions themselves as the destination rather than a road sign has disqualified themselves by that very act. The reverence itself is the obstacle."
      },
      {
        text: "A student asked Yunmen, \"What is Buddha?\" Yunmen replied: \"A dried shitstick.\"",
        source: "Yunmen Wenyan, Blue Cliff Record",
        why: "Yunmen demolishes spiritual elevation with deliberate vulgarity. When someone asks you to worship the teacher, remember: the teacher's job is to point you toward your own nature, not to be placed on an altar. The greatest masters consistently deflated their own authority."
      },
      {
        text: "A monk asked Zhaozhou, \"What is the meaning of the patriarch's coming from the west?\" Zhaozhou said, \"The cypress tree in the garden.\"",
        source: "Zhaozhou, The Gateless Gate",
        why: "When asked to elevate Bodhidharma's authority and explain why the great patriarch came to China, Zhaozhou redirects attention to what's right in front of you. The tree in the garden. Not the lineage, not the authority, not the great man. What's here, now."
      },
      {
        text: "Gutei raised his finger whenever he was asked a question about Zen. A boy attendant began to imitate him. Gutei seized the boy and cut off his finger. As the boy screamed and ran away, Gutei called to him. When the boy turned his head, Gutei raised his own finger. At that instant the boy was enlightened.",
        source: "Gutei, The Gateless Gate, Case 3",
        why: "Imitation of the master is not understanding. The boy mimicked Gutei's gesture without grasping what it pointed to. When the imitation was removed, he had to find the real thing. Cult members perform the gestures of their leaders without ever finding their own truth."
      }
    ]
  },
  {
    id: "M2",
    name: "Self-Distrust Normalization",
    detects: "\"Your thinking is the problem\"",
    redFlag: "\"Your best thinking got you here\"",
    color: "#7B1FA2",
    original: {
      sanskrit: "Śūnyatā / Shoshin",
      devanagari: "शून्यता / 初心",
      meaning: "Emptiness / Beginner's mind — releasing fixed views",
      teaching: "Buddhism genuinely teaches that our habitual thinking patterns can trap us. \"Beginner's mind\" (shoshin) means approaching experience with openness rather than fixed assumptions. Emptiness (śūnyatā) means our concepts aren't ultimate reality. These are invitations to see more clearly, not to stop thinking altogether.",
      corruption: "\"Empty your cup\" becomes \"your cup is broken.\" The subtle invitation to question your assumptions becomes a command to abandon your judgment entirely. Self-reflection is weaponized into self-distrust. The teaching that was meant to liberate your perception is used to imprison it under someone else's authority."
    },
    koans: [
      {
        text: "Nan-in served tea to a visiting professor. He poured his visitor's cup full, and then kept on pouring. The professor watched the overflow until he could no longer restrain himself. \"It is overfull. No more will go in!\" \"Like this cup,\" Nan-in said, \"you are full of your own opinions and speculations. How can I show you Zen unless you first empty your cup?\"",
        source: "Nan-in, Zen Flesh Zen Bones",
        why: "Notice: Nan-in invites the professor to empty his cup so he can receive something new — not so he can be filled with Nan-in's opinions instead. The emptying is for freedom, not for replacement. When a group tells you to empty your cup, ask: what are they pouring in?"
      },
      {
        text: "What is your original face before your parents were born?",
        source: "Huineng, The Gateless Gate",
        why: "This koan asks you to find what you already are underneath conditioning. It doesn't say \"your face is wrong\" or \"only I can show you your face.\" It says: you have an original face. You already have it. The koan trusts you to find it. Cult logic says you can't."
      },
      {
        text: "In the beginner's mind there are many possibilities. In the expert's mind there are few.",
        source: "Shunryu Suzuki, Zen Mind Beginner's Mind",
        why: "Beginner's mind opens possibilities — it doesn't close them. The guru who says \"your thinking got you here\" is narrowing your mind to one possibility: their way. Authentic beginner's mind does the opposite: it makes everything possible again."
      }
    ]
  },
  {
    id: "M3",
    name: "Outside Help Discouragement",
    detects: "Therapy/medication stigmatized",
    redFlag: "\"We're the only thing that works\"",
    color: "#1565C0",
    original: {
      sanskrit: "Attadīpā viharatha",
      devanagari: "अत्तदीपा विहरथ",
      meaning: "\"Be a lamp unto yourself\" — self-reliance through direct experience",
      teaching: "The Buddha's final instruction was radical self-reliance: test all teachings through your own experience. The Kalama Sutta explicitly says: don't accept teachings based on tradition, lineage, the teacher's charisma, or reasoning alone. Does it lead to benefit? Test it yourself. This is an instruction to seek wisdom everywhere and trust your own discernment.",
      corruption: "\"Be a lamp unto yourself\" becomes \"we are your only lamp.\" The teaching of radical self-reliance is inverted into radical group-dependence. Seeking outside perspectives — therapy, medication, other traditions — is reframed as weakness or betrayal. The sutta that tells you to question everything is used to prevent you from questioning anything."
    },
    koans: [
      {
        text: "A monk asked Zhaozhou, \"I have just entered the monastery. Please teach me.\" Zhaozhou asked, \"Have you eaten your rice porridge?\" The monk replied, \"I have eaten.\" Zhaozhou said, \"Then wash your bowl.\"",
        source: "Zhaozhou, The Gateless Gate, Case 7",
        why: "The most practical koan in Zen. Zhaozhou doesn't say \"only my monastery can teach you.\" He says: the teaching is already in what you're doing. Eat. Wash. The wisdom isn't locked behind one door — it's in the rice, the bowl, the water. Wherever you are."
      },
      {
        text: "The Buddha said: \"O Kalamas, do not be satisfied with hearsay or tradition, or any teachings however they may come to you. Only when you know in yourself when things are wholesome, blameless, commended by the wise, and when adopted and practiced lead to welfare and happiness, should you practice them.\"",
        source: "Kalama Sutta",
        why: "The Buddha's explicit anti-cult instruction. Don't accept teaching because of tradition, lineage, or the teacher's authority. Test everything through your own experience. Any group that discourages you from seeking outside help is violating the most foundational Buddhist teaching on discernment."
      },
      {
        text: "Suppose a man is struck by a poisoned arrow and the doctor wishes to take out the arrow. If the man says, \"I will not allow the arrow to be removed until I know who shot me, what caste he belongs to, what his name and family may be\" — that man would die.",
        source: "The Parable of the Poisoned Arrow, Majjhima Nikaya",
        why: "The Buddha used this parable to cut through philosophical obstruction. But notice: the teaching says go to the doctor. Get the arrow removed. Use whatever help is available. It does not say \"only our method can remove arrows\" or \"real warriors don't need doctors.\""
      }
    ]
  },
  {
    id: "M4",
    name: "In-Group Superiority",
    detects: "\"We're the only real/true method\"",
    redFlag: "\"Outsiders don't understand\"",
    color: "#00838F",
    original: {
      sanskrit: "Saṅgha",
      devanagari: "सङ्घ",
      meaning: "Community — one of the Three Jewels of refuge",
      teaching: "Taking refuge in the saṅgha means community supports practice. It's one of the Three Jewels alongside the Buddha (awakening) and Dharma (truth). But the saṅgha is not exclusive — it's any community of practitioners. Buddhism has always been radically pluralistic: multiple schools, multiple paths, mutual respect between traditions.",
      corruption: "The saṅgha becomes a fortress. \"Taking refuge\" becomes \"we're the only real refuge.\" The community that was meant to support your journey becomes the only permitted destination. Outsiders are pitied, feared, or dismissed. The Three Jewels become a three-walled prison."
    },
    koans: [
      {
        text: "A monk asked Zhaozhou, \"Does a dog have Buddha nature?\" Zhaozhou replied, \"Mu.\" (No.)",
        source: "Zhaozhou, The Gateless Gate, Case 1",
        why: "The most famous koan in Zen — and a direct challenge to in-group superiority. Buddhist doctrine says all beings have Buddha nature. ALL beings. Not \"our members\" or \"people who practice our method\" — all beings. Even the dog. Even the outsider. Even the person who left."
      },
      {
        text: "The great Way has no gate; there are a thousand different roads. If you pass through this barrier once, you will walk independently in the universe.",
        source: "Wumen Huikai, preface to The Gateless Gate",
        why: "A thousand different roads. Not one road. Not our road. The gateless gate means there's no single entry point that someone controls. Any group that says \"we're the only way through\" has built a gate where none exists."
      },
      {
        text: "Do not seek to follow in the footsteps of the wise. Seek what they sought.",
        source: "Matsuo Bashō",
        why: "The destination matters, not the particular path. Anyone who tells you their footsteps are the only ones worth following has confused the method with the goal. The wise sought truth — you can seek it by any road."
      }
    ]
  },
  {
    id: "M5",
    name: "Exit Terror",
    detects: "Leaving = catastrophe/death",
    redFlag: "\"People who leave die/fail/lose everything\"",
    color: "#E65100",
    original: {
      sanskrit: "Karma / Anicca",
      devanagari: "कर्म / अनिच्च",
      meaning: "Actions have consequences / All things are impermanent",
      teaching: "Buddhism teaches that actions have consequences (karma) and that everything changes (anicca/impermanence). These are observations about reality, not threats. Impermanence means nothing lasts — including your current situation. Karma means your choices matter — including the choice to leave something harmful.",
      corruption: "Karma becomes a threat: \"If you leave, terrible things will happen to you.\" Impermanence is suppressed: the group is presented as the one permanent thing. Stories of people who left and suffered replace stories of people who left and thrived. The teaching of natural consequences becomes a weapon of supernatural punishment."
    },
    koans: [
      {
        text: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.",
        source: "Traditional Zen saying",
        why: "Life continues. There is no catastrophic break. The person who leaves doesn't fall off a cliff — they chop wood and carry water, same as before. This koan deflates the apocalyptic narrative that departure equals destruction."
      },
      {
        text: "A man traveling across a field encountered a tiger. He fled, the tiger after him. Coming to a precipice, he caught hold of the root of a wild vine and swung himself down over the edge. Above, the tiger sniffed at him. Below, another tiger waited. Two mice, one white and one black, began to gnaw at the vine. The man saw a luscious strawberry near him. Grasping the vine with one hand, he plucked the strawberry with the other. How sweet it tasted!",
        source: "Traditional, Zen Flesh Zen Bones",
        why: "The man is going to die. The vine is being gnawed. And still — the strawberry is sweet. This parable teaches engagement with reality as it is, not terror about what might happen. Exit terror depends on you refusing to taste the strawberry because you're too afraid of the tigers."
      },
      {
        text: "The Buddha taught the raft metaphor: \"Monks, I have taught the Dhamma compared to a raft, for the purpose of crossing over, not for the purpose of holding onto.\"",
        source: "Alagaddūpama Sutta, Majjhima Nikaya",
        why: "The teaching itself is a raft — you use it to cross, then you leave it on the shore. You don't strap the raft to your back for the rest of your life. Any teaching, any group, any method that says \"you can never put this down\" has violated its own purpose."
      },
      {
        text: "Letting go is the lesson. Letting go is always the lesson. Have you not yet learned the lesson? It is the lesson. Always and forever the lesson.",
        source: "Susan Gordon Lydon (Zen practitioner)",
        why: "The entire arc of Buddhist practice is learning to let go — of attachments, of fixed views, of identity. A group that terrorizes you about letting go of the group has become the very attachment that practice was designed to dissolve."
      }
    ]
  },
  {
    id: "M6",
    name: "Thought-Terminating Clichés",
    detects: "Phrases that shut down questioning",
    redFlag: "\"That's your ego/disease talking\"",
    color: "#4E342E",
    original: {
      sanskrit: "Kōan",
      devanagari: "公案",
      meaning: "Public case — paradoxical phrases that break through conceptual thinking",
      teaching: "Authentic koans don't shut thinking down — they break it open. A koan creates productive confusion that forces you past your habitual mental grooves into direct seeing. The master's strange response doesn't end the conversation; it deepens it infinitely. You sit with a koan for months, years. It works on you.",
      corruption: "The koan becomes a shutdown. \"That's your ego talking\" is a pseudo-koan — it has the form of a surprising redirect but the function of a gag. Real koans open doors; thought-terminating clichés close them. The difference: can you sit with it productively, or does it just make you stop asking?"
    },
    koans: [
      {
        text: "Men of immeasurable greatness are tossed about in the ebb and flow of words.",
        source: "Yunmen Wenyan",
        why: "Yunmen warns that even the wisest can be controlled by language. Thought-terminating clichés are precisely this: words that toss people around, that replace thinking with reflexive verbal patterns. The antidote isn't fewer words but better ones."
      },
      {
        text: "A student said to Zen Master Seung Sahn, \"I feel so confused.\" The master replied, \"Good! Confusion is the beginning of understanding. Don't try to understand — just keep the confusion.\"",
        source: "Seung Sahn",
        why: "A genuine teacher welcomes confusion. It means the student is thinking, struggling, alive. Thought-terminating clichés exist to eliminate confusion — and with it, the possibility of genuine understanding. If your group's response to confusion is a slogan instead of an invitation, that's your signal."
      },
      {
        text: "A Zen student told Yunmen, \"Brilliancy of Buddha illuminates the whole universe.\" Before he finished, Yunmen asked: \"You are reciting another's poem, are you not?\"",
        source: "Yunmen Wenyan",
        why: "Yunmen catches the student borrowing someone else's words instead of expressing his own understanding. This is exactly what thought-terminating clichés do: they give you someone else's pre-packaged response so you never have to generate your own. \"That's your disease talking\" is always someone else's poem."
      }
    ]
  },
  {
    id: "M7",
    name: "Relationship Control",
    detects: "Authority manages social connections",
    redFlag: "\"Your family is toxic\"",
    color: "#37474F",
    original: {
      sanskrit: "Virāga / Upekkha",
      devanagari: "विराग / उपेक्खा",
      meaning: "Non-attachment / Equanimity — relating without clinging",
      teaching: "Buddhism teaches non-attachment: relating to people with love and presence rather than possessiveness or dependency. Equanimity (upekkha) means caring for all beings equally, without favoritism or aversion. This is freedom in relationship — more love, not less.",
      corruption: "\"Non-attachment\" becomes a weapon to sever relationships the group doesn't control. \"Your family represents attachment\" — so cut them off. \"Those friends are keeping you stuck\" — so isolate yourself. The teaching that frees you to love everyone is used to ensure you love only the group."
    },
    koans: [
      {
        text: "Tanzan and Ekido were traveling down a muddy road. They met a woman unable to cross. Tanzan carried her across. That evening, Ekido said: \"We monks don't go near females.\" Tanzan replied: \"I left the girl there. Are you still carrying her?\"",
        source: "Traditional, Zen Flesh Zen Bones",
        why: "Tanzan relates freely, helps compassionately, then moves on. Ekido clings to rules about who you're allowed to touch, to help, to be near. Relationship control is Ekido's error: it uses rules about contact to prevent genuine human connection."
      },
      {
        text: "The Buddha said: \"In whom there is no sympathy for living beings: know him as an outcast.\"",
        source: "Vasala Sutta",
        why: "The Buddha defines the outcast not as the person who leaves or questions but as the person who lacks compassion. Any authority that commands you to cut off sympathy for people outside the group is, by this definition, the outcast."
      },
      {
        text: "A student asked the master, \"What is the Way?\" The master said, \"Your everyday mind is the Way.\"",
        source: "Nansen, The Gateless Gate, Case 19",
        why: "Your everyday mind — which includes your relationships, your family, your pre-existing connections — IS the path. There is no special, purified social reality you need to enter. Anyone who tells you your everyday life and the people in it are obstacles to the path has inverted the teaching entirely."
      }
    ]
  },
  {
    id: "M8",
    name: "Financial/Labor Exploitation",
    detects: "Money/time extraction through shame",
    redFlag: "\"Service is the path to growth\"",
    color: "#558B2F",
    original: {
      sanskrit: "Dāna / Sevā",
      devanagari: "दान / सेवा",
      meaning: "Generosity / Selfless service — giving freely without compulsion",
      teaching: "Dāna (generosity) is the first of the Buddhist perfections (pāramitā). It must be freely given, without coercion, expectation, or guilt. Seva (selfless service) means giving without agenda. The emphasis is always on the quality of the giving — it must arise from genuine generosity, not obligation or fear.",
      corruption: "\"Selfless service\" becomes unpaid labor with spiritual window dressing. \"Generosity\" becomes mandatory tithing wrapped in guilt. The person cleaning the guru's house at 2 AM isn't practicing dāna — they're being exploited. The extraction is hidden behind vocabulary that makes refusal feel like spiritual failure."
    },
    koans: [
      {
        text: "A rich man asked Sengai to write something for the prosperity of his family. Sengai wrote: \"Father dies, son dies, grandson dies.\" The rich man became angry. Sengai explained: \"If your son should die before you, this would grieve you greatly. If your grandson should die before your son, both of you would be broken-hearted. If your family, generation after generation, passes away in the order I have named, it will be the natural course of life.\"",
        source: "Sengai, Zen Flesh Zen Bones",
        why: "The rich man wanted Sengai's calligraphy to serve as a prosperity charm — to extract spiritual value for material benefit. Sengai refuses the transaction and offers truth instead. Any system that converts spiritual practice into material extraction has confused the calligraphy for the charm."
      },
      {
        text: "A monk told Joshu: \"I have just entered the monastery. Please teach me.\" Joshu asked: \"Have you eaten your rice porridge?\" \"I have,\" replied the monk. \"Then wash your bowl,\" said Joshu.",
        source: "Zhaozhou, The Gateless Gate, Case 7",
        why: "Wash your own bowl. Not: wash the master's bowl. Not: wash bowls for twelve hours as a test of devotion. The labor in Zen is personal practice, not extracted service. The difference between \"wash your bowl\" and \"clean the meeting hall instead of sleeping\" is the difference between teaching and exploitation."
      },
      {
        text: "Ryokan, the Zen master, lived a simple life in a small hut. One evening a thief visited the hut only to discover there was nothing to steal. Ryokan returned and caught him. \"You have come a long way to visit me,\" he told the prowler, \"and you should not return empty-handed. Please take my clothes as a gift.\" After the thief left, Ryokan sat naked, watching the moon. \"Poor fellow,\" he mused, \"I wish I could give him this beautiful moon.\"",
        source: "Ryokan, Zen Flesh Zen Bones",
        why: "Real generosity gives freely and wishes it could give more. It doesn't keep accounts, demand reciprocity, or shame the recipient. Ryokan gave everything he had and still wished he could give the moon. That's dāna. If your group's version of generosity comes with obligation, it's not dāna — it's a transaction."
      }
    ]
  },
  {
    id: "M9",
    name: "Medical Interference",
    detects: "Non-medical authority overrides doctors",
    redFlag: "\"Stop the meds and start the steps\"",
    color: "#AD1457",
    original: {
      sanskrit: "Duḥkha / Bhaiṣajyaguru",
      devanagari: "दुःख / भैषज्यगुरु",
      meaning: "Understanding suffering / The Medicine Buddha",
      teaching: "The First Noble Truth is that suffering (duḥkha) exists. Buddhism offers a framework for understanding suffering, not for ignoring or overriding it. The Medicine Buddha (Bhaiṣajyaguru) is literally a Buddha of healing — Buddhism has always honored medicine and the relief of physical and mental suffering as sacred work.",
      corruption: "\"Suffering is a teacher\" becomes \"your suffering is your fault.\" Depression becomes a \"character defect.\" Anxiety becomes \"lack of surrender.\" Medication becomes a failure of spiritual practice. The tradition that created the Medicine Buddha is used to deny people medicine. This is the most dangerous corruption because it causes direct, measurable harm."
    },
    koans: [
      {
        text: "Yunmen said: \"Medicine and sickness mutually correspond. The whole earth is medicine. Where do you find yourself?\"",
        source: "Yunmen Wenyan, Blue Cliff Record, Case 87",
        why: "The whole earth is medicine. Not \"our method is the only medicine\" or \"real practitioners don't need medicine.\" Everything is potentially healing — including actual medicine prescribed by an actual doctor. Yunmen's koan dissolves the false boundary between spiritual and medical healing."
      },
      {
        text: "The Buddha said: \"I am not a god or a supernatural being. I am a teacher. I am awake.\"",
        source: "Traditional attribution",
        why: "The Buddha explicitly positioned himself as a teacher, not a healer. He did not claim medical authority. He did not override physicians. Any follower who claims spiritual authority over medical decisions is asserting a power the Buddha himself refused."
      },
      {
        text: "A monk asked, \"What is Buddha?\" Dongshan replied, \"Three pounds of flax.\"",
        source: "Dongshan, The Gateless Gate, Case 18",
        why: "Awakening is in the material, the embodied, the physical. Three pounds of flax. Your body matters. Your brain chemistry matters. Your medication matters. Spiritualizing away a physical condition isn't transcendence — it's abandonment of the body that practice asks you to inhabit fully."
      },
      {
        text: "Suppose a man is struck by a poisoned arrow and says, \"I will not let the arrow be removed until I know who shot me\" — that man would die before ever knowing.",
        source: "The Parable of the Poisoned Arrow, Majjhima Nikaya",
        why: "This parable appears again here because it's the Buddha's most direct medical statement: when someone is hurt, remove the arrow first. Philosophy can wait. A sponsor who says \"stop your meds and start the steps\" is the man insisting on knowing who shot the arrow while the patient bleeds out."
      }
    ]
  }
];

function App() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [expandedKoan, setExpandedKoan] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or detail

  const marker = activeMarker ? MARKERS.find(m => m.id === activeMarker) : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      color: "#E0D8CC",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=JetBrains+Mono:wght@300;400&family=Noto+Sans+Devanagari:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .marker-card {
          border: 1px solid #1a1a1a;
          padding: 20px;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
        }
        .marker-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }
        .marker-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .marker-card:hover::after { opacity: 1; }

        .back-btn {
          background: transparent;
          border: 1px solid #333;
          color: #888;
          padding: 8px 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .back-btn:hover { border-color: #666; color: #ccc; }

        .koan-card {
          border: 1px solid #1a1a1a;
          padding: 24px;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .koan-card:hover { border-color: #333; }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 8px;
        }

        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mono { font-family: 'JetBrains Mono', monospace; }
        .devanagari { font-family: 'Noto Sans Devanagari', sans-serif; }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
          margin: 32px 0;
        }

        .corruption-box {
          border-left: 3px solid;
          padding: 16px 20px;
          background: rgba(255,255,255,0.015);
          margin: 16px 0;
        }

        .koan-text {
          font-size: 18px;
          font-style: italic;
          line-height: 1.7;
          color: #D4C5A0;
        }

        .pill {
          display: inline-block;
          padding: 3px 10px;
          border: 1px solid;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 40px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 6 }}>
            <h1 style={{ fontSize: 28, fontWeight: 300, letterSpacing: 1 }}>
              सेवा × कोआन
            </h1>
            <span className="mono" style={{ fontSize: 11, color: "#555", letterSpacing: 2 }}>
              THE CORRUPTION MAP
            </span>
          </div>
          <p style={{ color: "#888", fontSize: 15, fontStyle: "italic", lineHeight: 1.7, maxWidth: 680 }}>
            Every Seva marker corresponds to a Buddhist teaching that has been taken and twisted.
            The koans are the antidote — actual wisdom that exposes the copy of a copy of a copy.
          </p>
        </div>

        {/* Grid View */}
        {!activeMarker && (
          <div className="fade-in">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 12,
            }}>
              {MARKERS.map(m => (
                <div
                  key={m.id}
                  className="marker-card"
                  onClick={() => setActiveMarker(m.id)}
                  style={{ borderLeftColor: m.color, borderLeftWidth: 3 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span className="mono" style={{ fontSize: 12, color: m.color, fontWeight: 700 }}>{m.id}</span>
                    <span style={{ fontSize: 16, fontWeight: 500 }}>{m.name}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, marginBottom: 10 }}>
                    {m.detects}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span className="devanagari" style={{ fontSize: 14, color: m.color }}>
                      {m.original.devanagari}
                    </span>
                    <span style={{ fontSize: 12, color: "#666" }}>
                      corrupts → {m.original.sanskrit}
                    </span>
                  </div>
                  <div className="mono" style={{ fontSize: 9, color: "#444", marginTop: 10 }}>
                    {m.koans.length} KOANS
                  </div>
                </div>
              ))}
            </div>

            <div className="divider" />

            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#666", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
                "The fog is made of words. The way through is also made of words.<br />
                We just need better ones."
              </p>
            </div>
          </div>
        )}

        {/* Detail View */}
        {activeMarker && marker && (
          <div className="fade-in">
            <button className="back-btn" onClick={() => { setActiveMarker(null); setExpandedKoan(null); }}>
              ← All markers
            </button>

            {/* Marker Header */}
            <div style={{ marginTop: 28, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span className="mono" style={{ fontSize: 16, color: marker.color, fontWeight: 700 }}>
                  {marker.id}
                </span>
                <span style={{ fontSize: 28, fontWeight: 400 }}>{marker.name}</span>
              </div>
              <div style={{
                padding: "10px 16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid #1a1a1a",
                marginBottom: 8,
              }}>
                <span className="mono" style={{ fontSize: 10, color: "#666" }}>DETECTS: </span>
                <span style={{ fontSize: 14, color: "#ccc" }}>{marker.detects}</span>
              </div>
              <div style={{
                padding: "10px 16px",
                background: "rgba(139,58,58,0.05)",
                border: "1px solid rgba(139,58,58,0.2)",
              }}>
                <span className="mono" style={{ fontSize: 10, color: "#8B3A3A" }}>RED FLAG: </span>
                <span style={{ fontSize: 14, color: "#D4807A", fontStyle: "italic" }}>{marker.redFlag}</span>
              </div>
            </div>

            {/* The Original Teaching */}
            <div style={{ marginBottom: 32 }}>
              <div className="section-label">THE ORIGINAL TEACHING</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                <span className="devanagari" style={{ fontSize: 24, color: marker.color }}>
                  {marker.original.devanagari}
                </span>
                <span style={{ fontSize: 20, fontWeight: 500 }}>{marker.original.sanskrit}</span>
              </div>
              <p style={{ fontSize: 14, color: "#B8A88A", fontStyle: "italic", marginBottom: 12 }}>
                {marker.original.meaning}
              </p>
              <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.75 }}>
                {marker.original.teaching}
              </p>
            </div>

            {/* The Corruption */}
            <div style={{ marginBottom: 36 }}>
              <div className="section-label">THE CORRUPTION</div>
              <div className="corruption-box" style={{ borderColor: marker.color }}>
                <p style={{ fontSize: 15, color: "#D4807A", lineHeight: 1.75 }}>
                  {marker.original.corruption}
                </p>
              </div>
            </div>

            <div className="divider" />

            {/* Koans */}
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>
                KOANS THAT CUT THROUGH — {marker.koans.length} ANTIDOTES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {marker.koans.map((koan, i) => (
                  <div
                    key={i}
                    className="koan-card"
                    onClick={() => setExpandedKoan(expandedKoan === `${marker.id}-${i}` ? null : `${marker.id}-${i}`)}
                  >
                    <div className="koan-text" style={{ marginBottom: 10 }}>
                      "{koan.text}"
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span className="mono" style={{ fontSize: 11, color: "#666" }}>
                        — {koan.source}
                      </span>
                      <span style={{ color: "#555", fontSize: 12 }}>
                        {expandedKoan === `${marker.id}-${i}` ? "− why this cuts" : "+ why this cuts"}
                      </span>
                    </div>
                    {expandedKoan === `${marker.id}-${i}` && (
                      <div className="fade-in" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #1a1a1a" }}>
                        <div className="section-label">WHY THIS KOAN EXPOSES {marker.id}</div>
                        <p style={{ fontSize: 14, color: "#B8A88A", lineHeight: 1.75 }}>
                          {koan.why}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="divider" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {(() => {
                const idx = MARKERS.findIndex(m => m.id === activeMarker);
                const prev = idx > 0 ? MARKERS[idx - 1] : null;
                const next = idx < MARKERS.length - 1 ? MARKERS[idx + 1] : null;
                return (
                  <>
                    {prev ? (
                      <button className="back-btn" onClick={() => { setActiveMarker(prev.id); setExpandedKoan(null); }}>
                        ← {prev.id}: {prev.name}
                      </button>
                    ) : <div />}
                    {next ? (
                      <button className="back-btn" onClick={() => { setActiveMarker(next.id); setExpandedKoan(null); }}>
                        {next.id}: {next.name} →
                      </button>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
