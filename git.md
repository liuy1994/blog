fid = fopen(filename,'w','n','UTF-8');



操作|命令
----|------
gui打开当前路径|start .
进入目录|cd
显示当前目录|pwd
创建目录|mkdir 目录名demo
创建目录|mkdir -p 目录路径      //“demo 1/demo 11/demo 111”
--|--
查看路径|ls 路径
查看路径|ls -a 路径
查看路径|ls -l 路径
查看路径|ls -al 路径
--|--
创建文件|echo ‘1’ > 文件路径  //1.txt(没有就创建1.txt，如果有就覆盖了内容)
创建文件|echo ‘1’ >! 文件路径 //覆盖内容
创建文件|echo ‘1’ >> 文件路径 //1.txt(添加内容到1.txt）
创建文件|touch 1.txt            //（没有1.txt）
改变文件更新时间|touch 1.txt	//（已有1.txt）
查看文件内容|cat 1.txt
--|--
复制文件|cp 源路径 目标路径	//cp 1.txt ../2.txt
复制目录|cp -r 源路径 目标路径	//
移动节点|mv 源路径 目标路径	//（mv 1.txt 2.txt 重命名）
--|--
删除文件|rm 文件路径
强制删除文件|rm -f 文件路径
删除目录|rm -r 目录路径
强制删除目录|rm -rf 目录路径

# 技巧
操作|命令
--|--
回到刚才的目录|cd -
使用上一次的命令|方向键上
执行上一次的命令|！！	//（）
使用上一次的最后一个参数|alt .
一句话执行两个命令|XXX；YYY
一句话执行两个命令|xxx&&yyy
光标移到开头|ctrl A
到结尾|ctrl E
删除|ctrl D
前进|ctrl F
后退|ctrl B

# 如何在命令里面打回车（为了排版） 

  \后面打回车。并不会执行命令

# 查找
find . -name 1.txt	//查找1.txt
find . -name "demo*" -type d	//tpye表示找的是目录  demo*表示所有含demo的目录例如demo1 、demo2

# vim ~/.bashrc
## 1. 使用 ~/.bashrc 
alias XXX=“命令”	//例如f=“ls -a”
source ~/.bashrc	//bashrc改动生效

## 2. 使用 bash 函数

在 ~/.bashrc 里面添加一个函数

frank (){
echo 'frank is awesome'
}
是 bashrc 生效
source ~/.bashrc
运行 frank 函数
## 3. 不使用 bashrc
运行 alias frank="echo 'frank is awesome'"
运行 frank


























# git clone git@github.com:liuy1994/blog.git 
# git init //初始化
# git pull //合并远程库（其他人可能修改，执行操作前首先）
# git status 
# git add . //添加到暂存区
# git commit -am "add" //提交到本地库。‘m’为备注的意思，备注后面双引号里的内容
# git push origin master //推送到github远程库
# echo "XXX" > a.md
# echo "XXX" >> a.md
# rm -rf a.md//直接删除a.md
