---
title: Branching in Git
date: 2021-07-05
summary: How to work with branches in Git
---

### What are Branches ?
Branches help us to to work with code in isolation from our main codebase. When we want to test/add some feature to your codebase, we can create a new branch and work on that branch keeping main branch stable. When we are done with devloping and testing feature, we can merge this branch back into our main branch. Branches in git is just a pointer to a commit, very different from other VCS like subversion. Therefore creating them is very cheap and fast. To track the current working branch git uses a sepcial pointer called HEAD. When we switch branch git reset our working directory as per the snapshot of that branch.

### Working with Branches
1. Creating a new branch: `git branch <branch-name>`
2. To see all the branches and current selected branch: `git branch`
3. Changing branch: `git switch <branch-name>` / `git checkout <branch-name>`. Changing branch is not allowed if changes are not commited, beause otherwise changes would be lost as git resets the working directory. You can stash the changes if you don't want  to commit. Use shortcut `git switch -C <branch-name>` to create and switch branch.
4. Renaming a branch `git branch -m <branch-name> <new-name>`
5. Deleting a branch: `git branch -d <branch-name>` . You should not be on same branch you want to delete. Also, Git prevents deletion if branch is not merged but it can forced to  delete by passing -D instead of -d.
6. See all commit made between two branches: `git log <branch-1>..<branch-2>`. If Starting branch-1 is not given it will it will have the same effect as using HEAD instead. 
7. Similarly diff command can be used to see changes insted of commit: `git diff <branch-1>..<branch-2>`. If you only want to see names of files changed pass --name-only.
Note: Commit of branches ahead are not listed. Use --all in git log to see commits across all branches.


### Stashing changes
1. Stash the current changes: `git stash push -m <message>`. Pass --all options to save untracked files also or use short form `git stash push -am <message>`
2. See all the stashes: `git stash list`.
3. See changes in present in a stash: `git stash show <index>`
4. Apply changes of stash to current working directory: `git stash apply <index>`
5. Deletes the stash at passed index : `git stash drop 1`
6. Deletes all the stashes: `git stash clear`

### Merging Changes
Merging in git are mainly of two type: fast-forward merges and 3-way merges. Fast-forward merge is used when there is a direct linear path between two branches. In this case git simply moves the pointer to the other branch. 3-way merge is used when branches are diverged. It is called 3-way merge because it combines changes from 3 branches (common-ansector and 2 tips of branches).
1. To merge changes: `git merge <branch-name>`. Pass --no-ff to disable fast forward merge.
2, To diable fast-forward merge: `git config --add merge.ff false`
3. To see all merged branches: `git branch --merged` . Pass --no-merged insted to see list of unmerged branches.
