# STAGE 1: build nextjs app
FROM node:17-alpine
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json .
# install dependencies
RUN npm install
# copy all files
COPY . .
# build app
RUN npm run build

# STAGE 2: run nextjs app
FROM node:17-alpine
WORKDIR /app
# install PM2 globally
RUN npm install --global pm2
# copy package.json and package-lock.json
COPY package*.json .
# install production dependencies
RUN npm install --production
# copy all files
COPY --from=0 /app/.next .next
# expose listening port
EXPOSE 3000
# run container as non-root user
USER node
# run script when container starts
CMD ["pm2-runtime", "npm", "--", "start"]
