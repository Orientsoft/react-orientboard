#Conventions

board的核心和相关组件都使用[editorconfig][3]和[eslint][4]来保证编程风格和语法的规范。

[Editorconfig][3]在大部分编辑器和IDE上都可以使用，请在[这里][3]查找如何在你的开发环境中启用。

[eslint][4]提供较完整的语法检查功能，在本项目下，可以使用`gulp lint`检查语法；在组件项目下，请使用`npm run lint`。在提交代码前，请尽量修正所有的错误和尽可能多的警告。语法检查的规则由[eslint-config-orientsoft][1]确定，这些配置在[eslint-config-airbnb][2]的基础上进行了一些小的改动。如果对相关的规则有改进的意见，请在[这里][5]提交issue。

开发进度请使用`// TODO:`的形式在代码中写明。大部分编辑器有相关工具可以管理TODO。

[1]: https://github.com/Orientsoft/eslint-config-orientsoft
[2]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[3]: http://editorconfig.org/
[4]: http://editorconfig.org/
[5]: https://github.com/Orientsoft/eslint-config-orientsoft/issues
