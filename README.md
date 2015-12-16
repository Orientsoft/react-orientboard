# react-orientboard

## USAGE

> Node 4.0 or later is needed

```
npm start
```

Open localhost:3000

## Component development

### Setup

To create a new component project, run:

```
gulp new -n your-component-name
```

This will generate a boilerplate component project at `../orientboard-component-your-component-name`. The `npm install` process might take a while.

### Project Layout (PROPOSAL ONLY)

```
orientboard-component-your-component-name
  ├─┬ src
  │ └── component.js
  ├─┬ css
  │ └── component.css
  ├─┬ lib
  │ └── component.js
  ├── .babelrc
  ├── test-layout.js
  └── package.json
```

Your source code should be in the `src` directory, and the `css` directory will contain your css files. For details in using css in your component, see *Using Css* section.

The component project use [babel](https://babeljs.io) to transpile source code in order to use es6, es7 and other new features. `.js` files under `src` will be transpiled to `lib`, you shouldn't put your source code in `lib`, nor check `lib` into your git repository.

Other assets, like images and fonts, should be declared in your `package.json`. For example, if you have some pictures in `images` that you want to use, then in your `package.json`, it should be declared using glob pattern, in following format:

```js
{
  "orientboard": {
    "assets": [
      "images/*"
    ]
  }
}
```

When your component is installed in `react-orientboard`, pictures under `images`, will be copied to `react-orientboard/public/components/your-component-name/images`. To access them in your code, use `components/your-component-name/images/example.png`

`test-layout.js` exports an array which defines the board layout for your component's development page.

### Building Component

To build the component, run:

```
npm run build
```

To watch your source code and build on changes, run:

```
npm run watch
```

Transpiling options are in `.babelrc`, you can add new options as you like.

### Using CSS

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

Under the hood, css classes and ids are prefixed in order to avoid naming conflicts. The outer div has a className supplied by the parent box component, which applies the following css style:

```css
{
  height: 100%;
  width: 100%;
}
```

This makes sure the component fills the parent box, normally you don't need to change it.

### Debug

Start the server with `npm start`, then use `gulp watch -f app/component-test.js` to watch changes in components, which includes new components, changes to components, and changes to layout files. All changes will be applied without restarting server.

Open `localhost:3000/dev/your-component-name`, you'll see your development page, the layout is defined in `test-layout.js`.
