## `branch` - Create Branch and Sync Remote

```shell
git checkout -b readme
# git branch readme # create branch
# git checkout readme # switch branch

git add .
git commit -m "readme init"
git push -u origin readme
```

## `branch` - Delete Branch and Sync Remote

```shell
# git checkout main
git branch -d readme
git push origin --delete readme
```

## `branch` - Rename Branch and Sync Remote

```shell
# git checkout readme
git branch -m docs/readme  # rename
git push origin docs/readme
git push origin -u docs/readme  # link remote
git push origin --delete readme
```

## `checkout` - View repositories that have been committed in the past

```shell
# git log
git checkout zustand
git checkout 3d21  # detached HEAD - just view
```

## `stash` - 📦

```shell
# Check what's in the storage
git stash list

# Bring last one back the work
git stash pop
git stash apply
# Clear All / specific
git stash clear
git stash drop stash@{0}
# Check
git stash list
git stash show
git stash show -p
```

## `worktree` - 📦

```shell

```

## `reset` - Undo Commmit ⛑️

```shell
# Save current unfinished work
# git stash

# Option 1: soft
# Undo commit and code still exists Staging Area (after git add)
git reset --soft HEAD~1
# Option 2: mixed - default
# Uodo commit and code still exists Working Directory (before git add)
git reset HEAD~1
# Option 3: hard
# Undo commit and remove code from computer
git reset --hard HEAD~1  # change history

# Sync remote
git push -f origin main
```

## `rebase` - Modify the previous commit code and overwrite ⛑️

```shell
# If necessary, create a temporary branch backup
# git branch backup_stable

# Relative path / absolute path
# git rebase -i HEAD~2
git rebase -i e421
# q!  # if you need to exit (vim)
# pick -> edit  # if you need to modify (vim)
# git rebase --abort  # if you need to exit (terminal)

# After modify code ...
git add .
git commit --amend --no-edit  # overwrite
git rebase --continue

# If there is a conflict, it needs to be resolved manually
git add .
git rebase --continue

# Sync remote
git push origin zustand --force
```
