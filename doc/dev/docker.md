# 使用docker搭建开发环境

## 依赖

You need [docker](https://www.docker.com/) installed on your machine. Please follow the official installation guide.

## Project path

Since docker only have limited access to your computer by default, it's best you first create a directory somewhere under your home directory, e.g. `~/ob`. Then clone this project in the folder created, thus all board components will be inside `~/ob`.

## Setup

Make sure your docker installation works, and a docker machine is started. If you're on windows, please use Git bash or the docker quick start terminal **AS ADMINISTRAOR**

Run `docker-dev.sh` to start the docker container. This will start a container named `ob-dev`, and mount the parent directory of this project under `/ob` in the container.

Under windows, parameters to the `-v` flag might encounter some problems. In such case, open `docker-dev.sh` and change **\`pwd\`/..** to the actual path, e.g. `//c/Users/you/ob`(**DOUBLE SLASHES!**).

Once you're in, install the project dependencies:

```
cd /ob/react-orientboard
npm i
```

## Hostname

Since the project is running in a docker vm, for now you have to access the application from:

```
http://`docker-machine ip $DOCKER_MACHINE_NAME`:3000
```
