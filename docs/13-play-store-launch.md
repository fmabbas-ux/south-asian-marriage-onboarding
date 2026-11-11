# Play Store launch: step by step

Status on 11 Nov 2026: the game is an installable web app (manifest, icons, offline worker, privacy page). The Android app is a Trusted Web Activity (TWA): a thin shell that opens the live site full screen, so every push to `main` updates the app with no new store release.

## What is already done (in the repo)
- `game/manifest.webmanifest`, `game/sw.js`, `game/icons/` (192, 512, maskable)
- `game/privacy.html` (linked from the home screen and the feedback box)
- `game/.well-known/assetlinks.json` (placeholder fingerprint, see step 5)
- `store/` folder: listing text, icon, feature graphic, 7 phone screenshots

## Your steps
1. **Developer account.** Finish creating the Play Console account (one-time 25 USD, identity verification). Choose Personal unless you have a registered company. Note: personal accounts created after 13 Nov 2023 must run a closed test with at least 12 testers for 14 days before applying for production.
2. **Create the app** in Play Console: name Aaghaaz Tamasha, Game, Free. Use `store/play-listing.md` for every text field.
3. **Build the Android package** with PWABuilder (free, no install):
   - Open https://www.pwabuilder.com and enter https://aaghaaz-tamasha.vercel.app
   - Package for stores > Android > Google Play.
   - Package ID: `com.dehleez.aaghaaztamasha`. App name: Aaghaaz Tamasha. Version 1.0.0, version code 1.
   - Signing key: "Create new". Download the zip. It contains the `.aab` file, a `signing.keystore`, and `signing-key-info.txt`. KEEP THE KEYSTORE AND PASSWORDS SAFE; they are needed for every future app update.
4. **Upload** the `.aab` to Play Console > Testing > Closed testing (or Internal testing first) > Create release. Accept Play App Signing.
5. **Link the site to the app (removes the browser address bar).** In Play Console > Setup > App signing, copy the "SHA-256 certificate fingerprint" of the App signing key. Give it to Claude; it goes into `game/.well-known/assetlinks.json`, then push to `main`. PWABuilder's zip also includes an `assetlinks.json`; the Play App Signing fingerprint is the one that matters.
6. **Fill App content** (privacy policy URL, ads, target audience 18+, data safety, content rating) using the answers in `store/play-listing.md`.
7. **Store listing**: upload `store/icon-512.png`, `store/feature-graphic-1024x500.png` and at least 4 screenshots.
8. **Closed test**: add 12 or more testers by Gmail address, share the opt-in link, keep them opted in for 14 days. Then "Apply for production access".
9. **Production**: after approval, promote the release to Production and choose countries.

## Before production (content gates, still open)
- Named reviewers for legal, safety and faith scenes; native Urdu review.
- Real two-phone test of online play; touch test of the camera.
- Decide the public support email shown on the store page.
