docker run -it \
  --name ob-dev \
  -v `pwd`/..:/ob \
  -p 3000:3000 \
  inoc603/docker-node-dev
