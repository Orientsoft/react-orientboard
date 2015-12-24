# Component Specification

## Project Layout

```
orientboard-component-your-component-name
  ├─┬ src
  │ └── component.js
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

The component project use [babel](https://babeljs.io) to transpile source code in order to use es6, es7 and other new features. `.js` files under `src` will be transpiled to `lib`, you shouldn't put your source code in `lib`, nor check `lib` into your git repository.

Other assets, like images and fonts, should be placed under `assets` folder. All these assets will be moved to `react-orientboard/public/components/your-component-name` when you run `gulp assets` under `react-orientboard` directory..

`test-layout.js` exports an array which defines the board layout for your component's development page.

You can change the layout as you like, just make sure your project exports a compiled React component as default.

## Component API

You have to implement the following APIs in your component:

1. `toJson()`

  This method should return an object that contains the data you want to save. This is equal to the `data` field in `props`.

2. `openConfig()`

  This method should open a config modal that handles all your component's configurations. The modal should be implemented with `react-bootstrap`, and use the global bootstrap theme provided by `react-orientboard`. This method will be called when the Setting button on box toolbar is clicked.

The following APIs are optional:

1. `newComponent()` - static

  This method will open a modal to gather necessary information for a new instance, then create it by calling `boardActions.newComponent(componentInfo)`. `componentInfo` contains:

  ```js
  {
    // position info of the outer box
    x: 0
  , y: 0
  , h: 0
  , w: 0
  , rotate: 0
    // type of your component
  , type: 'example'
  , data: {
      // component-specific data
    }
  }
  ```

  If you don't implement this, new component will be created with an empty object as `data` field. In this case, make sure you handles initial values correctly.
