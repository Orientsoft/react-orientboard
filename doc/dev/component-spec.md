# Component Specs

> See source code in component-example for a working example.

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

## Component Props

The props passed to the component is in the following format:

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

The following APIs are optional:

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

  If you don't implement this, new component will be created with an empty object as `data` field. In this case, make sure you handle initial values correctly.

## CSS

CSS in components is made modular by [css-modulesify](https://github.com/css-modules/css-modulesify), and will not have conflict with global css and css in other components. The usage is quite simple, as shown in the following example:

Your css file:
```css
.ex-class {

}

#ex-id {

}
```

Your js file:
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

The outer div has a className supplied by the parent box component, which applies the following css style:

```css
{
  height: 100%;
  width: 100%;
}
```

This makes sure the component fills the parent box, normally you don't need to change it. Make sure your component never overflow the outer box. If your component is outside the box, there may be problems in dragging, resizing and rotating.

The page your component is rendered has bootstrap loaded in a global scope. Though it's recommended to use [react-bootstrap](react-bootstrap.github.io), in case you have to use bootstrap-specific class names manually, use them as string e.g. `btn-primary`.

The global theme will be provided in `props.theme`. Please change the look of your component accordingly.
