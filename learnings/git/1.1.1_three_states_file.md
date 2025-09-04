(init) ⇒ [Repository (.git)]

git init


ls -a

(status) @ [Working Dir] → {Perceived {}}
git status


[drawing.txt] --(add)--> [The Index]
git add drawing.txt


[The Index] --(commit)--> [New Commit Object in .git]
git commit -m "Add initial sketch of the landscape"


(status) @ [Working Dir] → {Perceived {durectory-clean, file - unmodified}}
git status

(log) @ [Repository] → {Perceived {hash, message, author}}
git log

(rm @ [file.txt]) ⇒ [Absence in Index]
git rm drawing.txt

git status


git commit -m "Remove landscape sketch; project direction changed"

git log