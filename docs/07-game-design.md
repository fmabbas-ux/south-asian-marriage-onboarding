# 07. Game Design

Working title: **"Do Log" (two people)**, placeholder.

## Concept
A narrative choice game where **each partner plays the same year from their own side**, then compares. It turns the course's scenarios into practice and makes the gap between partners visible and discussable.

## Modes
1. **Solo:** pick bride or groom, play 12 months, 3 to 4 scenarios each month.
2. **Duo (asynchronous):** each partner plays their side on their own phone; the game then shows where their choices and reads of the event differed.
3. **Duo (live):** both on one phone or a shared screen; they talk through each decision.
4. **Family cards:** a party-style deck for parents and siblings to understand the couple's view.

## Core loop
Scenario card > read from your perspective > choose one of 3 to 4 responses > immediate consequence + hidden long-term effect > short coaching note.

## Meters
| Meter | Meaning |
|---|---|
| Trust | Between spouses |
| Self | Your sense of identity and wellbeing |
| Parent harmony | Both sets of parents |
| Family standing | Extended family and community view |
| Money | Financial stability and transparency |
| Stress | Rises with unresolved events, falls with repair |

No meter goes to "game over" by itself: the aim is learning, not punishment. Ending cards describe a year-one outcome: "Team", "Parallel lives", "Pulled apart", "Strong but tired", etc.

## Choice design
Each decision offers four responses, tagged internally:
- **Reactive** (anger, ultimatum)
- **Avoidant** (silence, delay)
- **Pleaser** (sacrifice self to keep peace)
- **Skilled** (clear, warm, joint)

The best option is not always the quickest: skilled choices may cost short-term comfort and pay off later. Consequences are shown over time, so players learn long-term thinking.

## The "Two Views" mechanic
After a scenario in Duo mode, the game shows:
- What each partner chose
- How each partner rated the event (1 to 5 stress)
- A prompt: "You rated this 4, your partner rated it 1. Talk about why."
This gap, not the score, is the product's main value.

## Content pipeline
- Scenarios live in `data/scenarios.yaml` (one source for the course, game and blog).
- Each scenario has two perspective texts, options, effects and a coaching note.
- Reviewed by clinician (psychology) and, where relevant, a lawyer.
- Localised in Urdu (Nastaliq), Hindi, Bengali, and English.

## Tech plan (to be confirmed)
- **MVP:** static web app (HTML/JS), no login, data in JSON, runs on any phone; share a link to invite a partner. State stored locally and optionally via a lightweight backend for Duo mode.
- **Later:** React Native or Flutter app; account system; analytics (privacy-first, no personal story text stored without consent).
- Anonymity by default. No data about a couple's private answers is shared with families.

## Monetization hooks
Free demo month; full year paid; family card deck as a printed product; counsellor-led couple sessions as a partner service.

## Private ledger (grudge matrix), added in v0.4
Beneath the six shared meters the game keeps a hidden register of how each person feels about each player, and how each player feels about them. It is a small game-theory layer: every choice has an opportunity cost, and no single choice pleases everyone.

- **Lenses.** Each character weighs the six meters differently (Ammi-ji cares about Parents and Standing and is unhappy when the bride's Self goes up; Hamza cares about Money; Aunty enjoys drama). The same option therefore lands differently on each person present.
- **Register.** `R[person]` holds four numbers: toward the bride, toward the groom, and the bride's and groom's resentment toward them. Values run from -30 to +30 and fade 8% per situation.
- **Grudges are sticky.** If someone is already cold (-6 or lower), good news is discounted by half and bad news is amplified by 30%. A positive Parents score can therefore coexist with a personally hurt Ammi-ji.
- **Carry-over.** When a person with a grudge (or goodwill) is in the room, the shared meters take a penalty (or bonus). Parents and Standing follow the elders and relatives; Trust follows the child; Stress follows resentment held by the players.
- **Pleaser cost.** Pleasing someone raises their number but costs the pleaser resentment toward them, which later shows up as Stress.
- **Previews.** Options show likely reactions (arrows) for the people in the room, so the trade-off is visible before choosing.
- **Boil-over.** Two danger flags plus two cold people can also trigger Khichdi Ban Gayi Hai. A new ending, Cold Peace, covers good meters with many unresolved grudges.
- **Online.** Both phones compute the same ledger from the same two answers, so nothing extra is sent.

## Turning points (added in v0.5)
Extreme meters trigger a one-off story twist (`game/crises.js`), checked after each round, max 2 per game, at least 3 rounds apart, and never on the same round as Khichdi. Deterministic from meters, so both players see the same twist.

| ID | Trigger | Twist |
|---|---|---|
| C1 | Stress >= 85 | The breaking point (3 a.m.). Skilled path: 48-hour pause, sleep, counsellor or agreed elder |
| C7 | Stress >= 80 and Self <= 35 | The collapse (fainting, doctor). Rest, shared load, counsellor |
| C2 | Trust <= 20 | The word nobody wanted to hear (separation talk). Neutral: fixed pause, counselling, one agreed mediator, legal information for both (nikahnama, khula, mediation) |
| C2b | Trust <= 25, two or more rounds after C2 | Secret lawyer visit. Share what each learned, counselling first |
| C3 | Self <= 18 | The packed bag. Name whether it is space or leaving, give a return date, never block or follow |
| C4 | Parents <= 18 | The elders gather. Ground rules, couple speaks for themselves |
| C5 | Standing <= 18 | The biradari is talking. One shared line, said once |
| C6 | Money <= 18 | The empty account. Numbers on one page, three-month plan |
| C8 | Trust >= 88 and Self >= 60 | A place of your own (positive) |
| C9 | Parents >= 88 and Standing >= 70 | Everyone loves you: kind no with alternative (positive) |
| C10 | Money >= 88 | A windfall: pre-agree shares (positive) |
| C11 | Self >= 88 and Parents <= 45 | Too independent?: voice plus warmth (positive) |

Guardrails: divorce is neither pushed nor shamed; the skilled option is always a pause plus information plus an outside helper. C2 and C2b carry legal content and need lawyer review before launch; C7 is educational, not diagnostic. No twist frames control or abuse as something to adjust to (S40 remains the safety scenario).

## v0.6: gossip, wishlists, treasures, auto stress (added 2026-11-10)
- **Stress rating removed.** Tapping an option now commits it; the "stress felt" number is derived from the option's own stress effect, and the stress-gap warning still works from those.
- **Option cards** are lettered A-D with a bold lead phrase, and show chips: green/red for how each person in the room will likely react, gold for how the option moves you toward a treasure ("helps your chances", "hurts your chances", "counts as a favour toward it", "weakens your rival's pull").
- **Gossip chains (G1-G4, `story.js`).** Triggered by the private ledger: G1 Aunty tells the bride what Ammi-ji and Sana said (mil or sana cold toward the bride); G2 Hamza tells the groom what the bride's mother said (bride's side cold toward the groom); G3 the bride's confided vent travels (3+ bottled-up picks); G4 one sentence becomes two stories between the two mothers (Parents or Standing <= 50). Unless both players handle it skilfully, an **echo** scene follows two rounds later (G1e, G2e) and the couple get a **chill**: -3 trust and +3 stress for 2-3 rounds until a skilled repair option clears it.
- **Wishlist (W1-W8).** Each person asks for something small that costs the helper (time, money, self). Only warm relationships ask. Doing it credits the player who picked the helping option (favours: skilled = 2, pleasing = 1). Visible in the ledger panel.
- **Treasures (T1-T3).** Dadi's gold set (Ammi-ji: bride vs Sana), Abbu-ji's seed money (groom vs Hamza), Ammi's heirloom bangles (bride vs a cousin). Winner = regard + 5 x favours (+ half of the partner's favours) against the rival's pull, plus a handling modifier from the options. Needs favours >= 2. Outcomes: yours, someone else, or still undecided. The result card explains why.
- Specials (crises, gossip, echoes, wishes, treasures) are capped at 6 per 12-round game and 14 per 40-round game, with at least two normal rounds between them.
- All triggers use only shared state (meters, ledger, both players' picks), so two phones stay in sync.

## v0.8: story tree (from player suggestion FB-20261111-6XAI)
- The scenario library is no longer a set of isolated scenes. Each chapter has an outcome class from both players' picks: **g** (both chose the skilled option), **m** (mixed), **b** (neither did).
- `game/tree.js` holds the edges: 26 parent chapters, each with a child per class and a recap sentence. After a chapter resolves, the child is moved into the next slot (swapped in if it was later in the list, replacing the next slot in 12-round games). The final chapter (S40) is never replaced, and no chapter repeats.
- The next chapter opens with a **"Previously"** strip: the specific recap for the branch, or a general one-liner about the last chapter.
- **Your story so far** (a tree of chapters with 🌱 well, ⚖️ mixed, 🔥 badly) is in the 💞 panel mid-game and on the ending screen.
- Chapters moved by the tree show "Month N" so the labels stay in order.
- Deterministic from shared picks, so two phones stay in sync.
- Tested: 12- and 40-round games with skilled, reactive and avoidant play give different paths, no repeats, S40 last.

## v0.9 (player suggestions FB-20261111-9JIX and FB-20261111-YOYT)
- Layout: parents' house and Aunty's house moved well away from the main house (gap of about 3.5 tiles, stone paths), the grey street removed, half-wall dividers and small furniture removed, tile checker and outlines softened, soft shadows under figures, faint room names on the floor in the home view, room camera slightly roomier. Reference ideas: Sims-style cutaway walls (already used), fewer props per room, wayfinding labels instead of clutter.
- Treasure progress bar: per treasure, 0-99% from how close the three win conditions are (score gap, regard, favours), shown in the ledger and as a compact strip above the options. Win shows 100%.
- Confetti: full-screen canvas burst (about 4 seconds) when you win a treasure.
- Grudge: at the end, a role that was offered treasures and won none gets stress +8 and trust -3 (shared meters), and the end screen says so.
