# 组件spec

> 细节请参考orientboard-component-example的代码

## 组件目录结构

```
orientboard-component-your-component-name
  ├─┬ src
  │ ├── component.js
  │ └── new-component-config.js
  ├─┬ css
  │ └── component.css
  ├─┬ lib
  │ └── ...
  ├─┬ assets
  │ └── ...
  ├── .babelrc
  ├── test-layout.js
  └── package.json
```

组件源代码在`src`目录下，引用的CSS文件在`css`目录下（CSS的使用参考下文 **CSS** 部分）。源代码使用[babel](https://babeljs.io)进行编译，可以使用es6、es7等新的语法。`lib`目录下存放的是`src`目录下所有`.js`文件的编译结果，不应该将该文件夹加入git仓库。

组件所用到的其他资源，如图片和字体等，应该放在`assets`文件夹下。该文件夹下的所有内容在 **安装时** 会被移动到`react-orientboard/public/components/your-component-name`目录，前端可以使用类似`/components/your-component-name/example.jpg`这样的URL来访问相应资源。开发时可以手动在`react-orientboard`目录下执行`gulp assets`进行资源的移动。

## 组件属性

组件的最顶层在初始化时会接收这样的一些属性：

```js
{
  data: {
    // your data
  },
  // whether component should be editable
  edit: true,
  // the global theme
  theme: 'default'
}
```

## 组件接口

所有组件必须实现以下接口：

1. `toJson()`

  返回一个json对象，包含了组件当前的数据状态，相当于属性中的`data`一项。

2. `openConfig()`

  打开一个bootstrap modal提供组件相关的配置。该方法会在组件工具栏中的 **配置** 按钮被按下的时候被调用。modal的具体使用请参见`example`组件的例子，modal本身应该使用全局的bootstrap主题。

以下的接口的实现是可选的：

1. `NewComponentConfig` - 静态成员，一个react组件

  这个子模块
  This sub component is a modal to gather necessary information for a new instance. This will appear when creating a new component. In this modal,  create a new component by calling `boardActions.newComponent(componentInfo)`. `componentInfo` contains:

  ```js
  {
    // position info of the outer box
    x: 0,
    y: 0,
    h: 0,
    w: 0,
    rotate: 0,
    // type of your component
    type: 'example',
    data: {
      // component-specific data
    }
  }
  ```

  如果选择不实现该成员，在新组建被创建时，`data`属性会是一个空的对象，请根据情况处理。

## CSS

前端的CSS使用[css-modulesify](https://github.com/css-modules/css-modulesify)进行模块化，以避免组件间CSS命名冲突。下面是一个简单的使用例子：

css文件:
```css
.ex-class {

}

#ex-id {

}
```

js文件：
```js
import styles from '../css/component.css'

...

  render() {
    return (
      <div {...this.props}>
        <div id={styles['ex-id']}
             className={styles['ex-class']}>
        </div>
      </div>
    )
  }
```

在编译时，会将所有js中引用的css文件中的class和id名称根据目录结构加上前缀，再合并成成一个css文件，同时，js文件中对css文件会以一下的方式进行编译：

```js
import styles from '../css/component.css'
```

会被编译成类似以下的内容：
```js
var styles = {
  'ex-class': 'some_prefix_ex-class',
  'ex-id': 'some_prefix_ex-id',
}
```

另外，页面已经加载了基础的bootstrap CSS和相关bootstrap主题，不需要再进行引用，相关的类名可直接使用字符串引用。在组件中请尽量使用[react-bootstrap](react-bootstrap.github.io)实现相关的效果。全局的主题会以`props.theme`提供给组件，对于需要手动控制的风格的部分请根据主题进行处理。
