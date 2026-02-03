import { useState } from "react";

const MARKERS = [
  {
    id: "F1",
    name: "Income Mystification",
    detects: "Lifestyle flex without verifiable proof",
    redFlag: "\"I made $47K this month from my laptop on the beach\"",
    color: "#FFB300",
    original: {
      sanskrit: "Santuṣṭi",
      devanagari: "सन्तुष्टि",
      meaning: "Contentment — the wealth of having enough",
      teaching: "Buddhist contentment isn't resignation — it's the radical recognition that sufficiency already exists. The Pali word 'mattaññutā' means 'knowing the measure' — understanding what enough looks like. Genuine prosperity teachings across traditions emphasize that wealth is a relationship with what you have, not a quantity you display.",
      corruption: "Contentment is replaced by spectacle. The grifter's rented Lamborghini, the screenshot of a Stripe dashboard, the Dubai hotel balcony — these manufacture a reality that doesn't exist to trigger craving in the viewer. The implicit message: 'Your life of enough is actually a life of not-enough. Let me show you what enough really looks like.' The display IS the product."
    },
    koans: [
      {
        text: "Ryokan lived a simple life in a small hut. One evening a thief visited only to discover there was nothing to steal. Ryokan returned and caught him. \"You have come a long way to visit me, and you should not return empty-handed. Please take my clothes as a gift.\" After the thief left, Ryokan sat naked, watching the moon. \"Poor fellow,\" he mused, \"I wish I could give him this beautiful moon.\"",
        source: "Ryokan, Zen Flesh Zen Bones",
        why: "Ryokan's actual wealth — the moon, the night, the freedom to give everything away — cannot be displayed in a screenshot. The thief came looking for material wealth and found nothing. The crypto guru displays material wealth because they have nothing else. Ryokan is richer than every lifestyle flex on Instagram."
      },
      {
        text: "Tosui was a well-known Zen teacher. His last temple accumulated so many adherents that Tosui told them he was going to quit the lecture business entirely. He advised them to disperse and go wherever they wished. After that no one could find him. Three years later one of his disciples discovered him living with some beggars under a bridge. He at once implored Tosui to teach him. \"If you can do as I do for even a few days, I might,\" Tosui agreed.",
        source: "Tosui, Zen Flesh Zen Bones",
        why: "The greatest teacher quit at the height of his fame and went to live under a bridge. He didn't monetize his following. He didn't launch a course. He dissolved the very audience that could have made him wealthy. Ask any crypto guru if they'd trade their Telegram channel for a bridge — their answer tells you everything."
      },
      {
        text: "A monk asked, \"What is the most valuable thing in the world?\" The master said, \"A dead cat's head.\" \"Why is a dead cat's head the most valuable thing?\" \"Because no one can name its price.\"",
        source: "Zhaozhou",
        why: "What is priceless? That which cannot be sold. The grifter can only show you things with prices — cars, watches, hotels. The things that actually constitute a good life have no price and therefore can never be displayed. The lifestyle flex is, by definition, limited to the least valuable things."
      }
    ]
  },
  {
    id: "F2",
    name: "Urgency Manufacturing",
    detects: "Artificial scarcity and FOMO pressure",
    redFlag: "\"Only 17 spots left — doors close at midnight\"",
    color: "#F4511E",
    original: {
      sanskrit: "Kṣaṇa-sampatti",
      devanagari: "क्षणसम्पत्ति",
      meaning: "The preciousness of the present moment",
      teaching: "Buddhism teaches that this moment is precious because life is impermanent and the opportunity to practice is rare. This is meant to inspire gratitude and presence — you are alive NOW, awake NOW. The urgency is directed inward: don't waste this life. It is never directed at purchasing a product before a countdown timer expires.",
      corruption: "The preciousness of now becomes a sales deadline. Genuine impermanence (all things change) is weaponized into artificial scarcity (this offer expires). FOMO exploits the same neural pathway that Buddhist teaching uses for liberation — the recognition that time is limited — and redirects it toward a credit card transaction."
    },
    koans: [
      {
        text: "A student asked the master, \"What is the most important moment?\" The master said, \"Now.\" \"What is the most important thing to do?\" \"To attend to the person in front of you.\" \"Who is the most important person?\" \"The one you are with.\"",
        source: "Adapted from Tolstoy / Zen oral tradition",
        why: "The most important moment is now — but not because a countdown timer is running. It's because presence itself is the entire practice. Urgency manufacturing hijacks this insight and replaces 'be here now' with 'buy here now.' The master never said 'the most important moment is before midnight tonight.'"
      },
      {
        text: "Sitting quietly, doing nothing, spring comes, and the grass grows by itself.",
        source: "Matsuo Bashō (often attributed to Zenrin Kushū)",
        why: "Real growth doesn't require urgency. It requires patience, the right conditions, and time. The grass doesn't respond to countdown timers. Neither does genuine transformation. Anyone who says you must decide NOW is telling you that their offer can't survive your reflection — and that itself is the answer."
      },
      {
        text: "The Buddha said: \"An idea that is developed and put into action is more important than an idea that exists only as an idea.\"",
        source: "Traditional attribution",
        why: "Action matters — but considered action, not panicked reaction. The grifter's urgency is designed to prevent the space between idea and action where discernment lives. That space is precisely where Buddhist practice operates. Close the gap and you close the mind."
      }
    ]
  },
  {
    id: "F3",
    name: "Authority Fabrication",
    detects: "Fake credentials, inflated expertise",
    redFlag: "\"Award-winning entrepreneur and bestselling author\"",
    color: "#8E24AA",
    original: {
      sanskrit: "Pramāṇa",
      devanagari: "प्रमाण",
      meaning: "Valid knowledge — verified means of knowing",
      teaching: "Buddhist epistemology takes valid knowledge seriously. Pramāṇa (means of valid cognition) includes direct perception, inference, and reliable testimony. The emphasis is on verifiability — you should be able to trace any claim back to its source and test it. Authority must be earned through demonstrated wisdom, not claimed through titles.",
      corruption: "The grifter fabricates the appearance of pramāṇa without the substance. 'Bestselling author' means they bought their own book in bulk. 'Award-winning' means a pay-to-play ceremony. 'As seen on Forbes' means a contributed blog post. The architecture of credibility is reproduced without any actual credibility underneath. It's a stage set with no building behind it."
    },
    koans: [
      {
        text: "Kasan was asked to officiate at the funeral of a provincial lord. He had never met lords and nobles before so he was nervous. When the ceremony started, Kasan sweat. Afterwards, he gathered his pupils together. Kasan confessed that he was not yet qualified to be a teacher for he lacked the sameness of bearing in the world of fame that he possessed in the secluded temple. Then Kasan resigned and became the pupil of another master.",
        source: "Kasan, Zen Flesh Zen Bones",
        why: "A genuine teacher noticed his own inadequacy in ONE situation — his composure faltered before a lord — and immediately resigned his teaching position. He didn't fake it. He didn't pad his credentials. He said 'I'm not ready' and went back to study. Compare this to any influencer whose response to being exposed is to fabricate more authority."
      },
      {
        text: "Gasan instructed his adherents: \"What of the one who preaches without enlightenment? He is killing Buddhism.\"",
        source: "Gasan, Zen Flesh Zen Bones",
        why: "Teaching without genuine understanding doesn't just fail — it actively kills the thing it claims to represent. Every fake credential, every fabricated testimonial, every inflated bio doesn't just deceive the buyer. It poisons the entire ecosystem of trust that legitimate expertise depends on."
      },
      {
        text: "A student told Yunmen, \"Brilliancy of Buddha illuminates the whole universe.\" Before he finished, Yunmen asked: \"You are reciting another's poem, are you not?\"",
        source: "Yunmen Wenyan",
        why: "Yunmen catches borrowed authority instantly. The student is performing wisdom he doesn't possess, using someone else's words as his own. This is the exact mechanism of authority fabrication — performing the signals of expertise without the substance. Yunmen's question is the only due diligence you need: 'Is this yours, or borrowed?'"
      }
    ]
  },
  {
    id: "F4",
    name: "Exit-Blame Setup",
    detects: "Pre-blaming failures on the buyer",
    redFlag: "\"Results depend on YOUR commitment — no refunds\"",
    color: "#D81B60",
    original: {
      sanskrit: "Virya",
      devanagari: "वीर्य",
      meaning: "Diligence / Effort — one of the Six Perfections",
      teaching: "Buddhism teaches that effort (virya) is essential to awakening. You can't outsource your practice. The teacher provides the map but you walk the path. This is genuine — transformation does require personal effort. But the teacher also takes responsibility for the quality of the map.",
      corruption: "\"You have to do the work\" becomes a pre-built excuse for a worthless product. The grifter front-loads the blame: if the course doesn't work, it's because you didn't implement. If the strategy fails, you didn't execute properly. Legitimate effort is real, but so is a bad map. The grifter makes the map unfalsifiable by ensuring every failure is attributed to the walker, never the cartographer."
    },
    koans: [
      {
        text: "A student said to Bankei, \"I was born with a terrible temper. How can I cure it?\" \"Show me this temper,\" said Bankei. \"I can't show it to you right now,\" the student said. \"Then it is not your true nature,\" Bankei replied. \"If it were, you could show it to me at any time.\"",
        source: "Bankei, Zen Flesh Zen Bones",
        why: "Bankei doesn't blame the student for his temper AND doesn't absolve him of responsibility. He reframes the problem entirely. This is what genuine teaching does — it changes the question, not the blame assignment. A grifter would have sold the student a temper management course and then blamed him when it didn't work."
      },
      {
        text: "Nan-in was visited by a university professor. Nan-in served tea, pouring until the cup overflowed. \"Like this cup, you are full of your own opinions. How can I show you Zen unless you first empty your cup?\"",
        source: "Nan-in, Zen Flesh Zen Bones",
        why: "Notice the critical difference: Nan-in names the obstacle AND takes responsibility for what he'll provide once it's removed. He doesn't say 'empty your cup and if you're still confused, that's your problem.' The teacher and student share the responsibility. Exit-blame setup is one-directional accountability disguised as empowerment."
      },
      {
        text: "A student asked the master, \"I have been with you for years and you have never given me a teaching.\" The master said, \"When you bring me tea, I accept it. When you bow, I acknowledge it. How have I not taught you?\"",
        source: "Traditional Zen",
        why: "The master takes responsibility for the teaching — it was there all along. He doesn't say 'you weren't committed enough to receive it.' When the product is real, both parties can see it. When the seller pre-blames you for not seeing results, consider that the product may simply not exist."
      }
    ]
  },
  {
    id: "F5",
    name: "Thought-Termination",
    detects: "\"FUD\" / \"haters\" as dismissal of criticism",
    redFlag: "\"Don't listen to the haters — they're just broke\"",
    color: "#5E35B1",
    original: {
      sanskrit: "Vīmaṃsā",
      devanagari: "वीमंसा",
      meaning: "Investigation — critical examination as spiritual practice",
      teaching: "The Buddha explicitly instructed followers to investigate all claims, including his own. The Kalama Sutta is Buddhism's founding document of critical thinking. Investigation (vīmaṃsā) is one of the Four Bases of Power — not an obstacle to practice but a prerequisite for it. Doubt is sacred; it's how you find the real thing.",
      corruption: "\"FUD\" (fear, uncertainty, doubt) reframes healthy skepticism as a character flaw. \"Haters\" reframes critics as emotionally damaged. \"DYOR\" (do your own research) sounds like the Kalama Sutta but functions as its opposite — it means 'don't question what I'm selling' wrapped in the language of investigation. The very faculty the Buddha called essential is labelled as the enemy."
    },
    koans: [
      {
        text: "\"O Kalamas, do not be satisfied with hearsay or tradition, or any teachings however they may come to you. Only when you know in yourself when things are wholesome, blameless, commended by the wise, and when adopted lead to welfare and happiness, should you practice them.\"",
        source: "Kalama Sutta",
        why: "The Buddha's explicit instruction: question everything, including me. Now compare to 'don't listen to the FUD.' The Kalama Sutta tells you to investigate every claim. The grifter tells you that investigation itself is the enemy. One of these is a teacher. The other is a salesman who can't survive scrutiny."
      },
      {
        text: "The master Linji said: \"Whatever confronts you, don't believe it. When something appears, shine your light on it. Have confidence in the light that is always working inside you.\"",
        source: "Linji Yixuan, Record of Linji",
        why: "Linji says: when something appears — ANY something, including his own teaching — shine your light on it. Don't believe it automatically. This is the opposite of 'trust the process.' Your inner light of discernment is the most valuable tool you have, and anyone who tells you to turn it off is selling something that can't survive illumination."
      },
      {
        text: "Doubt is not a pleasant condition, but certainty is absurd.",
        source: "Voltaire (via wisdom traditions broadly)",
        why: "The grifter's entire business model depends on manufacturing certainty — certain returns, certain transformation, certain results. Doubt is their enemy because doubt leads to investigation and investigation reveals the mechanism. Wisdom traditions universally teach that certainty is the real illusion."
      }
    ]
  },
  {
    id: "F6",
    name: "Complexity Shield",
    detects: "Jargon to obscure simple mechanics",
    redFlag: "\"Algorithmic yield optimization through tokenized liquidity pools\"",
    color: "#00897B",
    original: {
      sanskrit: "Upāya",
      devanagari: "उपाय",
      meaning: "Skillful means — making the complex accessible",
      teaching: "Upāya is the art of meeting people where they are. The Buddha was famous for adapting his teaching to each listener's capacity — speaking simply to the confused, technically to the advanced. The GOAL of skillful means is clarity, not mystification. The best teacher makes the hardest concept feel inevitable.",
      corruption: "The grifter inverts upāya: they make simple things sound complex to create the illusion of sophistication. A Ponzi scheme — money from new investors pays old investors — is a one-sentence concept. Wrapped in DeFi jargon, it becomes impenetrable. The complexity isn't protecting sophisticated ideas; it's concealing the absence of ideas."
    },
    koans: [
      {
        text: "A monk asked Yunmen, \"What is the Dharmakaya?\" Yunmen replied: \"The flowering hedge.\"",
        source: "Yunmen Wenyan",
        why: "Asked the most complex metaphysical question in Buddhism — what is ultimate reality? — Yunmen points at a hedge. Not jargon. Not a whitepaper. A hedge. The deepest truths require the simplest language. If someone needs fifty pages of jargon to explain how their token works, the complexity is the product, not the explanation."
      },
      {
        text: "A monk asked Dongshan, \"What is Buddha?\" Dongshan replied, \"Three pounds of flax.\"",
        source: "Dongshan, The Gateless Gate, Case 18",
        why: "Three pounds of flax. Not 'a multi-dimensional consciousness matrix operating through tokenized awareness protocols.' The Zen masters consistently answer the biggest questions with the simplest objects. If you can't explain your financial product in words a teenager would understand, you either don't understand it yourself or you don't want others to."
      },
      {
        text: "A monk asked Yunmen, \"What is the samadhi of each individual thing?\" Yunmen replied: \"Rice in bowl, water in pail.\"",
        source: "Yunmen Wenyan",
        why: "Yunmen was asked about the deepest nature of individual existence — a genuinely complex philosophical topic — and answered with kitchen items. The greatest teachers REDUCE complexity. Grifters MULTIPLY it. That asymmetry is the signal."
      }
    ]
  },
  {
    id: "F7",
    name: "Community Capture",
    detects: "\"We're family\" / identity merger with product",
    redFlag: "\"GM fam — we're all gonna make it\"",
    color: "#039BE5",
    original: {
      sanskrit: "Saṅgha",
      devanagari: "सङ्घ",
      meaning: "Spiritual community — mutual support without identity fusion",
      teaching: "Genuine saṅgha supports individual practice without consuming individual identity. You can belong to multiple communities. You can leave and return. The community serves the members; the members don't serve the community. Healthy belonging means you're more yourself inside the group, not less.",
      corruption: "\"We're family\" creates obligation without earning it. \"GM\" rituals and shared vocabulary build tribal identity that makes questioning feel like betrayal. The community becomes an identity trap: your Twitter bio, your PFP, your vocabulary all merge with the product. When the product fails, your identity fails — which is why you'll defend it past the point of reason."
    },
    koans: [
      {
        text: "Zhaozhou asked Nansen, \"What is the Way?\" Nansen replied, \"Your everyday mind is the Way.\"",
        source: "Nansen, The Gateless Gate, Case 19",
        why: "Your everyday mind — the one you had before you joined the Discord, before you changed your PFP, before you started saying 'GM' and 'WAGMI.' That mind is the Way. Not the community mind. Not the tribe mind. Your mind. If you can't think independently inside the community, the community has captured more than your attention."
      },
      {
        text: "Linji said, \"There is a true person with no rank, who is always coming and going through the portals of your face. Who is this?\"",
        source: "Linji Yixuan, Record of Linji",
        why: "The true person has no rank — no Discord role, no holder tier, no OG status. They don't need the group to know who they are. Community capture works by assigning you a rank (whale, diamond hands, founding member) that becomes inseparable from your identity. Linji asks: who are you without the rank?"
      },
      {
        text: "The great Way has no gate; there are a thousand different roads.",
        source: "Wumen Huikai, The Gateless Gate",
        why: "A thousand roads. A thousand communities. You are not betraying the Way by walking a different road. Any community that makes leaving feel like apostasy has built the gate that the Way says doesn't exist."
      }
    ]
  },
  {
    id: "F8",
    name: "Reflexive Economics",
    detects: "Ponzi structure — new money pays old money",
    redFlag: "\"The token goes up because more people are buying\"",
    color: "#43A047",
    original: {
      sanskrit: "Pratītyasamutpāda",
      devanagari: "प्रतीत्यसमुत्पाद",
      meaning: "Dependent origination — things arise from conditions, not from nothing",
      teaching: "The deepest Buddhist insight: nothing arises from nothing. Everything depends on conditions. Applied to economics, this means real value must come from real conditions — real production, real utility, real demand for something beyond the token itself. Dependent origination is the ultimate anti-magic-thinking framework.",
      corruption: "The grifter claims value arises from belief alone. 'We're early' implies that being early IS the value proposition. But a token that goes up only because later buyers buy it has no dependent origination outside its own feedback loop. It's a perpetual motion machine dressed in economic language. Pratītyasamutpāda says: what conditions support this? If the answer is 'more buyers,' that's not origination — that's a circle."
    },
    koans: [
      {
        text: "Zhaozhou asked, \"Does a dog have Buddha nature?\" and answered \"Mu.\" (No / Nothing.)",
        source: "Zhaozhou, The Gateless Gate, Case 1",
        why: "Mu — nothing. The most important word in Zen is also the correct valuation of a token with no utility. What is the fundamental value of a thing whose only value is that other people will buy it? Mu. Nothing. Not because value doesn't exist, but because value must come from somewhere real."
      },
      {
        text: "Huike said to Bodhidharma, \"My mind is anxious. Please pacify it.\" Bodhidharma replied, \"Bring me your mind and I will pacify it.\" Huike said, \"I've searched for my mind and cannot find it.\" Bodhidharma said, \"Then I have pacified it for you.\"",
        source: "Bodhidharma, The Gateless Gate",
        why: "Bring me the value and I will protect it. Where is the value? I've searched and cannot find it. Reflexive economics works because people search for the value and, finding nothing concrete, convince themselves the search itself is the value. Bodhidharma's response is liberating. The grifter's version is: 'you can't find the value because you're too early.'"
      },
      {
        text: "\"Everything that begins also ends. Make peace with that and all will be well.\"",
        source: "The Buddha (traditional attribution)",
        why: "Everything that begins also ends — including bull markets, including hype cycles, including 'number go up.' The grifter's fundamental lie is that this time the cycle won't end. Impermanence says it will. Making peace with that is wisdom. Denying it is how you become exit liquidity."
      }
    ]
  },
  {
    id: "F9",
    name: "Charity Hijacking",
    detects: "Cause used as marketing cover",
    redFlag: "\"10% of proceeds go to save the ocean\"",
    color: "#EF6C00",
    original: {
      sanskrit: "Dāna",
      devanagari: "दान",
      meaning: "Generosity — giving without agenda or display",
      teaching: "Dāna is the first of the Six Perfections, and its defining quality is that it's given freely, without expectation, and ideally without the giver even being known. The Zen tradition especially emphasizes anonymous giving — generosity that doesn't circle back to benefit the giver. The moment giving becomes transactional, it ceases to be dāna.",
      corruption: "\"10% to charity\" converts compassion into a conversion optimizer. The cause is real; the giving is real; the exploitation is in using it as a shield. The charity becomes both marketing and moral armor — criticize the project and you're criticizing the cause. This is weaponized dāna: generosity performed loudly to create an obligation in the observer."
    },
    koans: [
      {
        text: "\"Poor fellow,\" Ryokan mused after giving the thief his clothes. \"I wish I could give him this beautiful moon.\"",
        source: "Ryokan, Zen Flesh Zen Bones",
        why: "Ryokan gave silently, to a thief, and wished he could give more. He didn't announce the gift. He didn't use it to build his brand. The gift was the end of the transaction, not the beginning of a marketing funnel. If you need to tell people about your charity, the charity is serving you, not the cause."
      },
      {
        text: "Sengai was asked to write a scroll for a rich man's prosperity. He wrote: \"Father dies, son dies, grandson dies.\" The man was furious. Sengai explained: \"If your family passes in this order, it is the natural course of life. I wish you no greater happiness.\"",
        source: "Sengai, Zen Flesh Zen Bones",
        why: "The rich man wanted to buy spiritual cover for his prosperity. Sengai refused to provide it. He gave the man truth instead of comfort. Charity hijacking is the rich man's request at scale — using a spiritual or charitable veneer to sanctify a wealth-extraction operation."
      },
      {
        text: "When you do something, you should burn yourself up completely, like a good bonfire, leaving no trace of yourself.",
        source: "Shunryu Suzuki, Zen Mind Beginner's Mind",
        why: "Real giving leaves no trace — no logo, no press release, no tax receipt on the marketing page. The bonfire doesn't advertise its heat. If the charity has a logo bigger than the cause it serves, the bonfire has been replaced by a billboard."
      }
    ]
  },
  {
    id: "F10",
    name: "Celebrity Shield",
    detects: "Fame substitutes for fundamentals",
    redFlag: "\"If [celebrity] is backing it, it must be legit\"",
    color: "#6D4C41",
    original: {
      sanskrit: "Guru-vāda / Saddha",
      devanagari: "गुरुवाद / सद्धा",
      meaning: "Respect for teachers / Faith — trust based on demonstrated wisdom",
      teaching: "Buddhism acknowledges that we naturally trust those who seem wise. Saddhā (faith/confidence) is a legitimate starting point — you trust a teacher enough to try their method, then verify through your own experience. But faith must always be provisional and testable. The Kalama Sutta makes this explicit: don't accept teaching based on the teacher's reputation alone.",
      corruption: "The celebrity endorsement is saddha weaponized at scale. Millions of people extend provisional trust to a famous person — trust that was earned in entertainment, sports, or business — and that trust is transferred wholesale to a financial product the celebrity doesn't understand. The celebrity's fame becomes a blank check of credibility that can be cashed by anyone willing to pay for it."
    },
    koans: [
      {
        text: "If you meet the Buddha on the road, kill him.",
        source: "Linji Yixuan",
        why: "Kill the Buddha — and definitely kill the celebrity endorsement. If the Buddha himself appeared to promote a token, the correct Zen response would be to question why an enlightened being needs your money. Fame is just a bigger Buddha on a bigger road. The instruction remains: kill the idol, find the truth."
      },
      {
        text: "Kasan confessed that he was not yet qualified to be a teacher for he lacked the sameness of bearing in the world of fame that he possessed in the secluded temple. Then Kasan resigned and became the pupil of another master.",
        source: "Kasan, Zen Flesh Zen Bones",
        why: "Kasan's sameness faltered in the presence of fame — he couldn't maintain his composure before a lord. So he resigned his authority. The celebrity endorser has the opposite problem: their fame gives them composure in any room, which reads as competence in every domain. But being calm on camera doesn't mean you understand tokenomics."
      },
      {
        text: "A monk asked, \"Who is the Buddha?\" The master replied, \"Who are you?\"",
        source: "Traditional Zen",
        why: "When you ask 'is this legit because [celebrity] backs it?' the master's response is: who are you? What do YOU know about this product? What have YOU verified? The celebrity's identity is irrelevant to the question of whether the thing works. Redirect the question from WHO to WHAT — what are the fundamentals? — and the celebrity shield dissolves."
      }
    ]
  }
];

function App() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [expandedKoan, setExpandedKoan] = useState(null);

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
          color: "#D4C5A0";
        }

        .fin-badge {
          display: inline-block;
          padding: 2px 8px;
          border: 1px solid #FFB300;
          color: #FFB300;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          margin-left: 8px;
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 40px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 6, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: 28, fontWeight: 300, letterSpacing: 1 }}>
              सेवा-FIN × कोआन
            </h1>
            <span className="mono" style={{ fontSize: 11, color: "#555", letterSpacing: 2 }}>
              THE GRIFT CORRUPTION MAP
            </span>
          </div>
          <p style={{ color: "#888", fontSize: 15, fontStyle: "italic", lineHeight: 1.7, maxWidth: 700 }}>
            Financial grifters don't quote scripture — but they exploit the same human needs that
            wisdom traditions address. Every Seva-FIN marker corrupts a teaching about how to live well
            with money, community, and trust. The koans cut through the pitch deck.
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

            <div style={{ textAlign: "center", padding: "0 20px" }}>
              <p style={{ color: "#666", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
                "Calling the fake gurus on their bullshit with actual wisdom,<br />
                not the copy of a copy of a copy that they offer."
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

            <div style={{ marginTop: 28, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
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
                    <div style={{ fontSize: 18, fontStyle: "italic", lineHeight: 1.7, color: "#D4C5A0", marginBottom: 10 }}>
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
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
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
