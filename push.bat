@echo off
rem Ĭ����Ϣ��������Ŷ
rem --------------------
set mz=����
set mail=admin@feiyu.me
set gh=qjgkwqgf
set ge=feiyume
rem ---------------------

title �����ϴ� by ����
echo -----------------------------------
echo ��ע�⣡
echo ������ʼ�����ϴ�����
echo -----------------------------------
echo ��ǰ�ļ�·���ǣ�
echo.
cd
echo.
set /p proj=�����뱾�β�������Ŀ���ƣ�
set /p bra=��������Ŀ��֧��
set /p cm=�����뱾�θ������ݣ�
cls
echo ��ѡ���ϴ�ģʽ
echo -----------------------------------
echo ��׼ģʽ---������ 0
echo �����ϴ�---������ 1
echo ǿ���ϴ�---������ 1024
set /p md=�����룺
if %md% equ 1 (
	set ms=�����ϴ�
) else if %md% equ 1024 (
	set ms=ǿ��ģʽ�������������
	goto qz
) else (
	set ms=��׼ģʽ
	set md=0
)

:chkit
cls
echo ��˶������ϴ���Ϣ
echo -----------------------------------
echo ��Ŀ���ƣ�%proj%
echo ��Ŀ��֧��%bra%
echo �ϴ�ģʽ��%ms%
echo commit��%cm%
echo -----------------------------------
echo ������%mz%
echo ���䣺%mail%
echo -----------------------------------
echo github ��ַ��git@github.com:%gh%/%proj%.git
echo gitee ��ַ��git@gitee.com:%ge%/%proj%.git
echo -----------------------------------
set chk=
set /p chk=ȷ��������Ϣ����������1024��
if %chk% neq 1024 (
	cls
	goto chkit
)

cls
echo ��ʼ�ϴ�...
echo.
echo ���� git ������Ϣ
git config --global user.email "%mail%"
git config --global user.name "%mz%"
git config --global credential.helper store
echo ִ�� git ��ʼ��
git init
git add .
git commit -m "%cm%"
git branch -M %bra%
echo �Ƴ��Ѱ󶨵Ŀ��ַ
git remote remove origin

rem -----  github  -----
echo �� github ��ַ ������
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
echo �ϴ���ɣ�
echo.
echo.
pause
exit

:qz
cls
echo -----------------------------------
echo ��ע�⣡����ǰѡ���ˡ�ǿ��ģʽ��
echo �������п��ܶ�ʧ����Эͬ���ύ�ļ�¼��
echo �Ƿ�˳����ձ��ز֡�����������
echo -----------------------------------
echo ȷ����գ������룺1024
echo ����գ������룺0
set /p df=��ѡ��
if %df% equ 1024 (
	rd /s /q .git
)

goto chkit