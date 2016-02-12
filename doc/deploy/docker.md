# 使用docker部署

本项目目前托管在docker hub上，由于是私有项目，需要先进行登陆：

```bash
docker login -e=orientboard -p=PASSWORD
```

然后将镜像拉取到本地：

```bash
docker pull orientboard/react-orientboard
```

再启动镜像：

```bash
docker run -d \
  # 端口设定
  -p 3000:3000 \
  # 配置文件
  -v path/to/config.json:/var/react-orientboard/config.json \
  # 环境变量，指定为生产模式
  -e MODE=PRODUCTION \
  orientboard/react-orientboard
```
