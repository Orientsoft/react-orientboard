# the base image covered most global dependencies we need
FROM inoc603/docker-node-dev
# create and work in the /app dir
RUN mkdir -p /app
WORKDIR /app
# copy package.json only and install node dependencies to speed up building
# not copying .npmrc for now
ADD package.json ./
# disable progress bar for faster npm install
RUN npm set progress=false
RUN npm i -d
# add application files and build
ADD . ./
RUN npm run postinstall

EXPOSE 3000
CMD ["npm", "start"]
