# Component development

## Initiate Development Environment

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

## Create Component

To create a new component project, run:

```
gulp new -n component-name
```

This will generate a boilerplate component project at `../orientboard-component-component-name`. The `npm install` process might take a while. If you'd like to use `cnpm` to install dependencies, add `-c` option.

To remove a component:

```
gulp rm -n component-name
```

This only removes the component's symlink, if you'd like to delete the source folder as well, add `-d` to the command.

To link all component to `node_modules`:

```
gulp link
```

To see the list of installed components:

```
gulp ls
```

## Building Component

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

## Debug

Open `localhost:3000/dev/your-component-name`, you'll see your development page, the layout is defined in `test-layout.js`.

**For details on components, see Component Specs**
