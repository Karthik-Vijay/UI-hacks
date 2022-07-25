# Git related questions and solutions


## Merging master into feature branch

git pull is the same as git fetch + git merge
The command git pull <remote> <branch> is really just the same as git fetch <remote> and git merge <remote>/<branch>
So there is no practical difference between
### git pull origin master and git push - will merge master into our feature branch
and
### git fetch origin git merge origin/master

In its default mode, git pull is shorthand for git fetch followed by git merge FETCH_HEAD.

More precisely, git pull runs git fetch with the given parameters and calls git merge to merge the retrieved branch heads into the current branch.


## Auto packing the repository in background for optimum performance on git pull

During most operations which can potentially increase the number of loose (unpacked) objects in the repository (including pushes), Git invokes 
### git gc --auto. 

If there are enough loose objects (by default, at least 6700), it will then invoke

### git repack -d -l to pack them. If there are too many separate packs, it will also repack them into one.

A pack is a delta-compressed single file, containing a large number of objects. It's more efficient to store objects in packs, but it takes time to pack (compress) objects, so Git initially creates loose objects, then packs them in batches now and then, via automatic invocation of git gc --auto.

If you let Git finish repacking, this won't happen again for a while. It can indeed take a while, especially if you have a lot of large binary objects, but if it's triggering, then it's a sign that it will probably drastically reduce the amount of disk space taken by the repo. If you really don't want it to happen, you can change the config parameter gc.auto. If you increase it to something much larger than 6700, it will happen less frequently, but take longer when it does. If you decrease it, it'll still have to do your current repack, but subsequently it will happen more often and finish more quickly. If you set it to 0, it will disable automatic repacking.

### git config gc.auto 0        : - You can either turn off auto gc using this command
### git fsck                    : - To see whether dangling objects are triggering ongoing messages about auto-packing.
###  git gc --prune=now         : - If you get a long list of dangling commits, you can clean them with

