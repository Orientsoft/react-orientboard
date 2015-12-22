# react-orientboard

## Dependencies

If you want to use vagrant to set up development environment, you need to install [Vagrant](https://www.vagrantup.com/) and [Virtualbox](https://www.virtualbox.org/). If you're on windows, you also need a command line tool that have a ssh client, like **cygwin** or **Git bash**. Personally I'll recommend [Git bash](https://git-for-windows.github.io/) for its simple installation and usage.

If you choose not to use vagrant, make sure you have **Node >= v4.0** and a global `gulp` on your machine.

To install gulp:

```
sudo npm i -g gulp
```

Also, if you want simpler watching process, install `tmux` on your machine.

## Install

```
npm i
```

## Usage

For deployment:

```
npm start
```

For development, see Setup section in **Component Development**

Open localhost:3000

## Component development

### Setup Vagrant VM (OPTIONAL)

You can use vagrant to set up a development environment. You need to download the development box and add it.

If you have access to our internal server, use:

```
vagrant box add orientsoft-node-dev http://192.168.0.120/orientsoft-node-dev-0.1.box
```

If you have the box downloaded, use:

```
vagrant box add orientsoft-node-dev /path/to/box
```

On windows:

```
vagrant box add orientsotf-node-dev file:///path/to/box
```

After you add the box to vagrant, use `vagrant up` to start your virtual machine. On windows, make sure you're in Git bash with administrator permission.

Then run `vagrant ssh` to login the VM. The parent folder of this project is mounted on `/vagrant`.

**Symlink probably won't work on Windows for now, I'm looking for solution.**

### Initiate Development Environment

Starts the server, and watches `app/main.js` and `app/component-test.js` for changes with the following script. If you're running on your own machine, make sure you have `tmux` installed.

```
. init-tmux.sh
```

If you'd do it yourself, run following command in different session:

```
npm start
```

```
gulp watch
```

```
gulp watch -f app/component-test.js
```

### Create Component



To create a new component project, run:

```
gulp new -n your-component-name
```

This will generate a boilerplate component project at `../orientboard-component-your-component-name`. The `npm install` process might take a while. If you'd like to use `cnpm` to install dependencies, add `-c` option.

### Building Component

To build the component, run:

```
npm run build
```

If you use [Atom](https://atom.io/), install the [language-babel](https://github.com/gandm/language-babel) plugin, and source code will be transpiled on changes.

Or you can watch your source code and build on changes with:

```
npm run watch
```

Transpiling options are in `.babelrc`, you can add new options as you like.

### Debug

Open `localhost:3000/dev/your-component-name`, you'll see your development page, the layout is defined in `test-layout.js`.

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

When your component is installed in `react-orientboard`, pictures under `images`, will be copied to `react-orientboard/public/components/your-component-name/images`. To access them in your code, use `/components/your-component-name/images/example.png`

`test-layout.js` exports an array which defines the board layout for your component's development page.

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
