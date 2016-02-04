# Deploy with Docker

This project is not publicly available on docker hub, if you want to deploy it with docker, for now you have to manually build it. In the future this image might be accessible from a private registry.

To build the image:

```bash
# you can change the image name rb as you like
docker build -t rb .
```

To run the image:

```bash
docker run -p 3000:3000 rb
```

You can supply custom config by adding:

```bash
-v my-config-dir:/var/react-orientboard
```

`my-config-dir` would be the dir you store the custom `config.json` file on your host system.
