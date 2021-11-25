@echo off
rem 默认信息都在这里哦
rem --------------------
set mz=飞鱼
set mail=admin@feiyu.me
set gh=qjgkwqgf
set ge=feiyume
rem ---------------------

title 代码上传 by 飞鱼
echo -----------------------------------
echo 请注意！
echo 即将开始代码上传操作
echo -----------------------------------
echo 当前文件路径是：
echo.
cd
echo.
set /p proj=请输入本次操作的项目名称：
set /p bra=请输入项目分支：
set /p cm=请输入本次更新内容：
cls
echo 请选择上传模式
echo -----------------------------------
echo 标准模式---请输入 0
echo 初次上传---请输入 1
echo 强制上传---请输入 1024
set /p md=请输入：
if %md% equ 1 (
	set ms=初次上传
) else if %md% equ 1024 (
	set ms=强制模式！请谨慎操作！
	goto qz
) else (
	set ms=标准模式
	set md=0
)

:chkit
cls
echo 请核对您的上传信息
echo -----------------------------------
echo 项目名称：%proj%
echo 项目分支：%bra%
echo 上传模式：%ms%
echo commit：%cm%
echo -----------------------------------
echo 署名：%mz%
echo 邮箱：%mail%
echo -----------------------------------
echo github 地址：git@github.com:%gh%/%proj%.git
echo gitee 地址：git@gitee.com:%ge%/%proj%.git
echo -----------------------------------
set chk=
set /p chk=确认以上信息无误，请输入1024：
if %chk% neq 1024 (
	cls
	goto chkit
)

cls
echo 开始上传...
echo.
echo 设置 git 署名信息
git config --global user.email "%mail%"
git config --global user.name "%mz%"
git config --global credential.helper store
echo 执行 git 初始化
git init
git add .
git commit -m "%cm%"
git branch -M %bra%
echo 移除已绑定的库地址
git remote remove origin

rem -----  github  -----
echo 绑定 github 地址 并推送
git remote add origin git@github.com:%gh%/%proj%.git
if %md% equ 0 (
	git pull origin %bra%
	git push origin %bra%
)
if %md% equ 1 (
	git push -u origin %bra%
)
if %md% equ 1024 (
	git push -f origin %bra%
)

rem -----  gitee  -----
echo -----------------------------------
echo 上传完成！
echo.
echo.
pause
exit

:qz
cls
echo -----------------------------------
echo 请注意！您当前选择了【强制模式】
echo 这样极有可能丢失其它协同者提交的记录！
echo 是否顺便清空本地仓【重新来过】
echo -----------------------------------
echo 确认清空，请输入：1024
echo 不清空，请输入：0
set /p df=请选择：
if %df% equ 1024 (
	rd /s /q .git
)

goto chkit