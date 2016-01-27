# Component Specs

> See source code in component-example for a working example.

## Project Layout

```
orientboard-component-your-component-name
  ├─┬ src
  │ ├── component.js
  │ └── new-component-config.js
  ├─┬ css
  │ └── component.css
  ├─┬ lib
  │ └── component.js
  ├─┬ assets
  │ └── ...
  ├── .babelrc
  ├── test-layout.js
  └── package.json
```

Your source code should be in the `src` directory, and the `css` directory will contain your css files. For details in using css in your component, see *Using Css* section.

The component project use [babel](https://babeljs.io) to transpile source code in order to use es6, es7 and other new features. `.js` files under `src` will be transpiled to `lib`. You shouldn't put your source code in `lib`, nor check it into your git repository.

Other assets, like images and fonts, should be placed under `assets` folder. All these assets will be moved to `react-orientboard/public/components/your-component-name` when you run `gulp assets` under `react-orientboard` directory.

`test-layout.js` exports an array which defines the board layout for your component's development page.

Apart from `assets` and `test-layout.js`, you can change the component project layout as you like, just make sure your project exports a React component.

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

## Component API

You have to implement the following APIs in your component:

1. `toJson()`

  This method should return an object that contains the data you want to save. This is equal to the `data` field in `props`.

2. `openConfig()`

  This method should open a config modal that handles all your component's configurations. The modal should be implemented with `react-bootstrap`, and use the global bootstrap theme provided by `react-orientboard`. This method will be called when the Setting button on box toolbar is clicked.

The following APIs are optional:

1. `NewComponentConfig` - static member, a react component

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
