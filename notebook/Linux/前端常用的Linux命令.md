- 登录服务器
```
# ssh 用户名@ip地址
ssh work@192.168.10.21
```
- 文件夹操作
```bash
# 查看文件
ls

# 查看所有文件（包括隐藏文件）
ls -a

# 查看文件列表
ll

# 创建文件夹
mkdir abc

# 删除文件夹 -r递归删除，-f强制删除（一旦删除，无法还原，准备删库跑路）
rm -rf abc

rm *.js

rm * 
# 修改文件夹名
mv abc cba

# 定位到abc目录中
cd adc

# 定位到根目录
cd /

# 当前目录
cd ./

# 上级目录
cd ../


# 修改文件名
mv index.html index1.html

# 移动文件
mv index.html ../index.html

# 拷贝
cp a.js a1.js

# 删除文件
rm a1.js

# 新建文件
touch b.js # 新建一个文件

# 进入vim编辑器模式，进入vim编辑器模式是不能输入的
# 输入键i（insert）才可以，要退出vim，需要按esc，
# 然后冒号:w（written）保存，然后冒号:q(quit)就推出了，也可以:qw直接退出,:q!强制退出
# 如果b.js本就存在，vim b.js或者vi b.js就进入到编辑模式
vi b.js 或 vim b.js

# echo：向指定的文件中输入内容（会覆盖原有内容，如果文件不存在会帮助创建）
echo 123 > test.js

# 查看文件内容
cat webpack.config.js

# 查看头部几行
head package.json

# 查看末尾几行
tail package.json

# 查找文件内容
grep "babel" package.json

# 退出
exit
```

