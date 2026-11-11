# 11. Feedback inbox and SLA

How player suggestions, complaints and bug reports reach the team, and how fast we answer. Live from game v0.7.

## What the player sees
A "Suggestions, complaints, bugs" button on the home screen and the ending screen opens a form:
- Category: suggestion, bug, scenario feels wrong or offensive, complaint, safety concern, privacy or data request, praise, other.
- Message (5 to 2000 characters).
- Optional contact: none, email, WhatsApp number, SMS / call number, Instagram, X, Facebook, other. A "OK to contact me" tick appears once a contact is entered.
- Optional tick (default on) to attach anonymous game details: game version, language, screen, mode, role, round, ending. No names, no IP stored by us.
- On success they get a reference number (FB-YYYYMMDD-XXXX) and the response target for their category.
- Safety category shows: this form is not watched in real time, call local emergency number or a helpline.

## How it flows
Form > `POST /api/feedback` (Vercel function, `game/api/feedback.js`) > Google Apps Script web app (`tracker/apps-script/Code.gs`) > the "Dehleez Feedback Tracker" Google Sheet.
- The function checks length, category and contact type, ignores bot submissions (hidden field), and allows 6 per IP per hour (best effort). The browser also waits a minute between sends.
- If the sheet link is not set (`FEEDBACK_WEBHOOK` env var), the function refuses with `not_configured` so nothing is silently lost; the player sees "Couldn't send".
- P1 items (safety, privacy) also email the sheet owner.

## One-time setup (3 minutes)
1. New Google Sheet "Dehleez Feedback Tracker". Extensions > Apps Script, paste `tracker/apps-script/Code.gs`.
2. Run `setup()` once and authorise. It creates the Tracker, SLA and Dashboard tabs, dropdowns for Status and Priority, and the SLA state column.
3. Deploy > New deployment > Web app > Execute as Me > Who has access Anyone. Copy the /exec URL.
4. Set it as env var `FEEDBACK_WEBHOOK` on the Vercel project `aaghaaz-tamasha` (Production) and redeploy.
5. Test: submit from the game, then check the sheet row appears.

## Tracker columns
Ref, Received (UTC), Category, Message, Contact type, Contact, OK to contact, Game version, Language, Screen, Mode, Role, Round, Ending, Status, Priority, Owner, Ack due, Target due, Acknowledged on, Resolved on, SLA state (auto), Resolution / notes, Released in version.
Status values: New, Acknowledged, In progress, Waiting on reviewer, Done, Won't do, Duplicate.

## SLA by category
| Category | Priority | First response | Target resolution |
|---|---|---|---|
| Safety concern | P1 | 1 day | 3 days (not real-time; see form note) |
| Privacy or data request (including delete my data) | P1 | 3 days | 30 days |
| Bug / something broken | P2 | 2 days | 14 days |
| Scenario wrong or offensive | P2 | 3 days | 14 days. Pause the scenario if plainly harmful, then send to a named reviewer (lawyer, counsellor or scholar) |
| Complaint | P2 | 2 days | 14 days |
| Suggestion | P3 | 7 days | 60 days (triage into the roadmap) |
| Other | P3 | 7 days | 30 days |
| Praise | P4 | 14 days | none |

Days are calendar days. The SLA tab in the sheet holds these numbers; change them there and in `game/api/feedback.js` together.

## Weekly routine
1. Filter Status = New. Acknowledge anything with a contact marked OK (use the contact type they chose; do not use another channel).
2. Triage: set Priority, Owner, Status. Merge duplicates.
3. Check the Dashboard for SLA breaches. Breaches are reviewed first on Monday.
4. When shipped, fill Resolved on and Released in version, and reply if contact is allowed.

## Privacy
Stored: message, optional contact, optional game details, reference, time. Used only to improve the game and to reply. Delete on request (privacy category). Do not copy contact details into other tools. Keep the sheet private to named team members. Add a short privacy notice page before the paid launch.
