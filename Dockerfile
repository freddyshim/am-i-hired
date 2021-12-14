FROM node:17-alpine
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json ./
# AWS Elastic Beanstalk doesn't support stage naming
# so we have to install dev dependencies to properly build and run the app
RUN npm install
ENV NODE_ENV=production
# copy all files
COPY ./ ./
# build app
RUN npm run build
# expose listening port
EXPOSE 3000
# run container as non-root user
USER node
# run script when container starts
CMD ["npm", "start"]
