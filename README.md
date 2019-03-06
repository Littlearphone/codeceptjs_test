# Codeceptjs Test Project

##启动方式

####初始化
>**依赖NodeJS，没有的话需要先下载安装，这是[官网地址][2]**
```
首先，确认NodeJS正常安装：
终端里运行node -v，应该会显示版本号xxx.xxx.xxx
终端里运行npm -v，应该会显示版本号xxx.xxx.xxx
```

```
然后，运行_initial(或者_initial.cmd)进行项目初始化，等待依赖的组件下载完成
```
-----------------------------
####启动
```
新建一个node运行配置，node parameters按照下面的格式填写：
    ./node_modules/codeceptjs/bin/codecept.js run <test-script> --steps
    <test-script>  
        需要替换为指定测试用例的相对路径，如果没有会运行所有测试用例   
    --steps   
        参数会把运行中的每一个步骤输出，日志可以作为测试文档阅读。 
```
>测试用例的语法可以去[CodeceptJs-API][1]查询
-----------------------------

##问题列表
0. 初始化项目后把node_modules、output、package.json、package-lock.json这四个文件标记为忽略状态，避免VCS提交
1. 正常结束（不区分测试用例是否失败）测试的情况下，驱动进程会自动退出；如果没有退出的话，可以手动在任务管理器结束掉；
    手动或异常结束的时候驱动进程不会自动退出，必须手动结束进程。<br/>
    IE的驱动进程名是：**Command line server for the IE driver<br/>**
    Chrome的驱动进程名是：**XXX-x64-chromedriver**
2. 在codecept.conf.js里，WebDriver: Object.assign({...}, webDriver.ie)这项配置最后的参数改为webDriver.chrome可以切换为chrome测试
3. IE测试的时候有可能会出现如下错误：<br/>
    “Unexpected error launching Internet Explorer.<br/>
    Protected Mode settings are not the same for all zones.<br/>
    Enable Protected Mode must be set to the same value (enabled or disabled) for all zones.”<br/>
    这是因为IE的Internet设置——安全选项卡里面，没有全部启用保护模式。全部修改为启用后重新执行即可。
4. 如果出现输入框输入内容非常慢的情况，这是因为IE的Internet设置——高级选项卡里没有勾选“针对增强保护模式启用64位进程”。勾选后重新执行即可。
    选了64为增强模式也不行就把没有64位标识的那个选项也勾上再重试，都不行的话重置IE，注销系统再重新设置。
5. IE下出现“Currently focused window has been closed”，可以选择重置IE或者参考[这位老兄][3]的回复解决
6. 一般情况下，驱动路径为node_modules/selenium-standalone/.selenium(可能没有后缀)，如果node模组更新可能会导致自动下载的路径有变化，
    所以首先确认启动路径下是不是有对应的驱动，没有的话先执行初始化脚本下载，有的话看下文件名是不是对得上。
7.
-----------------------------

[1]: https://codecept.io/helpers/WebDriver
[2]: https://nodejs.org/
[3]: https://stackoverflow.com/questions/47388733/selenium-org-openqa-selenium-nosuchwindowexception-currently-focused-window-ha
