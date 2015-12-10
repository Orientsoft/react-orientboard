# react-orientboard

## USAGE

```
npm start
```

Open localhost:3000

## Component development

### Setup

To create a new component project, run:

```
gulp new-component -n your-component-name
```

This will generate a boilerplate component project at `../orientboard-component-your-component-name`. You can then `cd` to the directory and set it up with `npm i`.

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
