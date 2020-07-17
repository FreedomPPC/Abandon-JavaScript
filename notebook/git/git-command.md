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

## 查看文件diff（更推荐使用VS Code的比对）
## 查看提交记录
## 取得Git仓库
## 提交你的修改
## 查看、切换、创建和删除分支
## 分支合并和rebase
## Git补丁管理（方便在多台机器上开发同步时用）
## Git暂存管理
## Git远程分支管理
## 基本的分支管理
## Git远程仓库管理
## 创建远程仓库