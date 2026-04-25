## Create Branch and Sync Remote

```shell
git checkout -b readme
# git branch readme # create branch
# git checkout readme # switch branch

git add .
git commit -m "readme init"
git push -u origin readme
```

## Delete Branch and Sync Remote

```shell
# git checkout main
git branch -d readme
git push origin --delete readme
```

## Change Current Branch / Commmit

```shell
# git log
git checkout zustand
git checkout 3d21  # just view

git stash
git reset --hard 3d21  # change history
# git push -f origin main
```
