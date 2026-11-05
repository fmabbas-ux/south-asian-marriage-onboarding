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
