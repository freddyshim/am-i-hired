FROM node:17-alpine
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json .
# install PM2 globally
RUN npm install --global pm2
# install typescript so we can build the project
RUN npm install --dev typescript
# install dependencies
RUN npm install --production
# copy all files
COPY . .
# build app
RUN npm run build
# expose listening port
EXPOSE 3000
# run container as non-root user
USER node
# run script when container starts
CMD ["pm2-runtime", "npm", "--", "start"]
