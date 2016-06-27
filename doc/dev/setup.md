# 搭建开发环境

## 依赖项

> 如果使用windows系统，建议使用vagrant或docker搭建开发环境

- Node >= v4.0, 建议为v4.2.4
- git
- tmux
- gulp, npm, pm2

```bash
npm i -g -U npm gulp pm2
```

## 安装

```
git clone --recursive https://github.com/Orientsoft/react-orientboard
cd react-orientboard
npm i
```

也可以考虑使用vagrant或docker来搭建开发环境：

- [使用Docker搭建开发环境](docker.md)
- [使用Vagrant搭建开发环境](vagrant.md)
