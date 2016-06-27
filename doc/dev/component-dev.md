# 组件开发

## 开发环境初始化

在开发组件前使用以下脚本启动服务器，并watch源码。

```
. init-tmux.sh
```

## 创建新组件

**新建一个组件项目：**

```
gulp new -n component-name
```

该命令会在`../orientboard-component-component-name`生成一个组件项目，默认情况下，推荐手动到该目录下执行`npm install`命令，但也可以在命令中加入`-i`选项，在创建时就自动执行。自动执行的`npm install`在安装过程中没有输出，可能会执行很长时间。

**删除一个组件：**

```
gulp rm -n component-name
```

该命令仅仅删除了组件在`node_modules`目录下的链接，要删除组件的所在目录，加入`-d`选项。

把`node_modules`:

```
gulp link
```

To see the list of installed components:

```
gulp ls
```

## 编译组件

在组件目录下使用一下命令编译组件源码：

```
npm run build
```

如果你使用[Atom](https://atom.io/)编辑器，可以安装[language-babel](https://github.com/gandm/language-babel)插件，源码会在保存时自动进行编译。你也可以选择用以下命令watch源码并在有改动时编译：

```
npm run watch
```

编译时的选项使用`.babelrc`进行配置，如果有需要可以进行改动。

## 调试组件

在`localhost:3000/dev/your-component-name`可以打开一个调试组件用的界面，调试用board的数据在`test-layout.js`中指定。该测试页面在`MODE=PRODUCTION`的情况下无法访问。

**组件开发的细节请参见组件规范**
