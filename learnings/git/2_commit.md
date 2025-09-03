git add plan.txt
git commit -m "Initial campaign plan"

(branch @ [Current Commit]) ⇒ [New Pointer]
git branch scout-mission

git log --oneline --decorate --graph

(checkout) ⇒ [HEAD] ↔ [scout-mission]
git checkout scout-mission

file
git add plan.txt
git commit -m "Scout team reports river crossing"
git log --oneline --decorate --graph --all

git checkout main

{[main], [scout-mission]} --(merge)--> [New Merge Commit]
git merge scout-mission

git checkout $FIRST_COMMIT_HASH
git status