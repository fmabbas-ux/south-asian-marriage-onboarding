# 12. From player message to closed issue

1. **Land.** A player sends the in-game form. `/api/feedback` creates an issue in the private repo `fmabbas-ux/Dehleez-Feedback` with labels `cat:<category>`, `P1`-`P4`, `status:new`, and the due dates in the body.
2. **Acknowledge** within the first-response date (P1 1 day, bugs and complaints 2, content 3, privacy 3, suggestions and other 7, praise 14). If the player left a contact and ticked OK, reply on that channel with the reference number. Change the label to `status:acknowledged`.
3. **Triage.** Set the priority, assign an owner, add `area:` labels if useful, and merge duplicates (comment "Duplicate of #N" and close). Decide: do, later (add to roadmap), or won't do (explain why).
4. **Build on a branch.** Work on `feature/<name>` (never on `main`). Reference the issue in the commit message or branch description (`Refs #N`). Push the branch: Vercel builds a preview link `https://aaghaaz-tamasha-git-<branch>-rentker1.vercel.app` (live game untouched).
5. **Review the preview.** Play the preview, run the test script, get the reviewer's sign-off for anything legal, safety or faith related. Set `status:in-review`.
6. **Release.** Merge the branch into `main` (pull request or `git merge`, then `git push`). Vercel deploys to production automatically. Note the version number.
7. **Tell the player.** Reply on their contact channel (if allowed) with what changed and where to see it.
8. **Close the issue** with a comment: what was done, the version, the commit. Label `status:done`. For "won't do" use `status:wont-do` and give the reason.
9. **Weekly check.** Open issues sorted oldest first, compared with their due dates; breaches are looked at first.
