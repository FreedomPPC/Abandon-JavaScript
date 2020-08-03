## 初始化配置

```bash
# 配置使用 git 仓库的人员姓名和邮箱
git config --global user.name "Your Name"
git config --global user.email "you@yourdomin.example.com"

# 配置到缓存，默认15分钟
git config --global credential.helper cache

# 修改缓存时间
git config --global credential.helper 'cache --timeout=3600'

# 长期存储
git config --global credential.helper store

# 清除缓存
# 1. 运行命令缓存输入的用户名和密码：
git config --global credential.helper wincred
# 2. 清除掉缓存在git中的用户名和密码：
git credential-manager uninstall

# 设置别名
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.st status

# 列举所有配置
git config -l

# 用户的 git 配置文件的目录
~/.gitignore
```

## 查看、添加、提交、删除、找回，重置修改文件

```bash
git help <command>  # 显示comand的help
git show            # 显示某次提交的内容
git show $id
git co -- <file>    # 抛弃工作区修改
git co .            # 抛弃工作区修改
git add <file>      # 将工作文件修改提交到本地暂存区
git add .           # 将所有修改过的工作文件提交到暂存区
git rm <file>       # 从版本库中删除文件
git rm <file> --cached # 从版本库中删除文件，但不删除文件
git reset <file>    # 从暂存区恢复到工作文件
git reset -- .      # 从暂存区恢复到工作文件
git reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改
git ci -a           # 将git add，git rm和git ci等操作都合并在一起做
git ci -a "some comments"
git ci --amend      # 修改最后一次提交记录，进入到vim模式修改提交注释
git revert <$id>    # 修复某次提交的状态，恢复动作本身也创建了一次提交对象
git revert HEAD     # 恢复最后一次提交的状态
```

## 查看文件 diff

```bash
git diff  <file>    # 比较当前文件和暂存区文件的差异
git diff            # 比较全部
git diff <$id1> <$id2> # 比较两次提交之前的差异
git diff <branch1>..<branch2> # 在两个分支之间比较
git diff --staged   # 比较暂存区和版本库差异
git diff --cashed   # 比较暂存区和版本库差异
git diff --stat     # 仅仅比较统计信息
```

## 查看提交记录

```bash
git log
git log <file>      # 查看该文件每次提交记录
git log -p <file>   # 查看每次详细修改内容的diff
git log -p -2       # 查看最近两次详细修改内容的diff
git log --stat      # 查看提交统计信息
```

## 取得 Git 仓库

```bash
git init            # 初始化一个版本仓库
git clone git@abc.**.git # clone远程版本库
git remote add origin git@abc.***.git # 添加远程版本库，语法为git remote add [shortname] [url]
git remote -v       # 查看远程仓库
```

## Git Tag的使用

- git tag <name>用于新建一个标签，默认为HEAD，也可以指定一个commit id；
- git tag -a <tagname> -m "blablabla..."可以指定标签信息；
- git tag -s <tagname> -m "blablabla..."可以用PGP签名标签；
- 查看所有标签：git tag。
- 推送本地分支：git push origin <tagname>可以推送一个本地标签；
- 推送全部未推送过的本地标签：git push origin --tags；
- 删除本地分支：git tag -d <tagname>可以删除一个本地标签；
- 删除远程分支：git push origin :refs/tags/<tagname>  
```bash
#如果要切换到某个版本改东西，因为tag只是一个快照；不具备修改代码的功能；那么就需要我们在tag上创建一个分支去修改；然后提交并重新tag提交到远端，然后再合并主分支；
1. git checkout v3.1
2. git branch -d 3.1-fix v3.1
# 修改完代码以后，commit 并打一个tag；然后提交到远端
3. git checkout master
4. git merge --no-ff 3.1-fix

```

## 版本回退

```bash
git reset --hard <commit_id>
# 回到上个版本
git reset --hard ^HEAD
```



## 提交你的修改

```bash
git add .          # 添加当前修改的文件到暂存区
git add readme.txt # 跟踪新文件
git rm readme.txt  # 从当前跟踪列表移除文件，并完全删除
git rm --cached readme.txt # 仅在暂存区删除，保留文件在当前目录，不再跟踪
git add -u         # 如果你自动追踪文件，包括你已经手动删除的，状态为delete的文件
git commit -u "注释" # 提交你的修改
git push origin master # 推送你的更新到远程服务器，语法为git push [远程名] [本地分支]:[远程分支]
git status         # 查看文件状态
git mv readme.txt readme # 重命名文件
git log            # 查看历史提交记录
git log --pretty=oneline # 查看简单提交日志
git commit --amend # 修改最后一次提交注释的，利用--amend参数

# 假如你已经使用git add .，将修改过的文件a、b加到暂存区
# 现在只想提交a文件，不想提交b文件，应该这样
git reset HEAD b

# 取消对文件的修改
git checkout -- readme.txt
```



## 查看、切换、创建和删除分支

```bash
git br -r           # 查看远程分支
git br <new_branch> # 创建新的分支
git br -v           # 查看各个分支最后提交信息
git br --merged     # 查看已经被合并到当前分支的分支
git br --no-merged  # 查看尚未被合并到当前分支的分支
git co <branch>     # 切换到某个分支
git co -b <new branch> # 创建新的分支，并且切换过去
git co -b <new branch> <branch> # 基于branch创建新的new_branch
git co $id          # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除
git co $id -b <new_branch> # 把某次历史提交几率checkout出来，创建成一个分支
git br -d <branch>  # 删除某个分支
git br -D <branch>  # 强制删除某个分支（未被合并的分支被删除的时候需要强制）
```



## 分支合并和 rebase

```bash
git merge <branch>   # 将branch分支合并到当前分支
git merge origin/master --no-ff # 不要Fast-Forword合并，这样可以生成merge提交
git rebase master <branch> # 将master rebase到branch，相当于：
git co <branch> && git rebase master && git co master && git merge <branch>
```

[git merge与git rabase的区别](https://www.cnblogs.com/zheroXH/p/11578728.html)



## Git 暂存管理

```bash
git stash           # 暂存
git stash list      # 列所有stash
git stash apply     # 恢复暂存的内容
git stash drop      # 删除暂存区

# 当你正在改一个分支的时候,又要切换分支去改其他东西,这个时候就需要用到git stash等命令
# 1. git stash 保存当前操作；
# 2. 查看git stash list；
# 3. 恢复git stash pop stash@{num}；
# num是要恢复的序号，所以恢复前要用git stash list 查看序号
# 4. 删除。stash不要存的过多,不然不知道哪个是哪个,最好清一清,把所有记录都要清一清
git stash clear
```



## Git 远程分支管理

```bash
git pull            # 抓取远程仓库所有分支更新并合并到本地
git pull --no-ff    # 抓取远程仓库所有分支更新并合并到本地，不要快进合并
git fetch origin    # 抓取远程仓库更新
git merge origin/master # 将远程主分支合并到本地当前分支
git co --track origin/branch # 跟踪某个远程分支创建相应的本地分支
git co -b <local_branch> origin/<remote_branch> # 基于远程分支创建本地分支，功能同上
git push            # push所有分支
git push origin master # 将本地主分支推送到远程主分支
git push -u origin master # 将本地主分支推到远程（如无远程主分支则创建，用于初始化远程仓库）
git push origin <local_branch>:<remote_branch> # 创建远程分支
git push origin :<remote_branch> # 先删除本地分支（git br -d <branch>），然后在push删除远程分支
git push origin --delete <branchname> # 删除远程分支
```



## 基本的分支管理

```bash
# 创建一个分支
git branch dev
# 切换到工作目录dev
git checkout dev
# 将上面的命令何在一起，创建dev分支并切换到dev
git checkout -b dev
# 合并dev分支，当前工作目录为master
git merge dev
# 合并完成以后，没有出现冲突，删除dev分支
git branch -d dev
# 拉取远程仓库的数据
git fetch
# fetch会拉取最新的远程仓库数据，但不会自动到当前目录下，要自动合并
git pull
# 查看远程仓库的信息
git remote show origin
# 建立本地的dev分支追踪远程仓库的develop分支
git checkout -b dev origin/develop
```



## Git 远程仓库管理

```bash
# 查看远程服务器地址和仓库名称
git remote -v
# 查看远程服务器仓库状态
git remote show origin
# 添加远程仓库地址
git remote add origin git@github:robbin/robbin_site.git
# 设置远程仓库地址（用于修改远程仓库地址）
git remote set-url origin git@github:robbin/robbin_site.git
# 删除远程仓库
git remote rm <	repository> 

# 更改git认证方式
git remote -v  # 查看远程
git remote rm origin
git remote add origin git@github.com:username/repository.git
git push -u origin master
```



## 创建远程仓库

```bash
# 用带版本的项目创建纯版本仓库
git clone --bare robbin_site robbin_sit.git
# 将纯仓库上传到服务器上
scp -r my_project.git git@git.csdn.net:~
# 在服务器上创建纯仓库
mkdir robbin_site.git && cd robbin_site.git && git --bare init
# 设置远程仓库地址
git remote add origin git@github.com:robbin/robbin_sit.git
# 客户端首次提交
git push -u origin master
# 首次将本地develop分支提交到远程develop分支，并且track
git push -u origin develop
# 设置远程仓库的HEAD指向master分支
git remote set-head origin master

# 也可以命令设置跟踪远程仓库和本地库
git branch -set-upstream master origin/master
git branch -set-upstream develop origin/develop
```



## 查看Git安装目录

```bash
where git
```



## 公钥私钥生成

```bash
ssh-keygen -t rsa -C "youemail"
```

