FROM node:14-alpine AS builder
ENV NODE_ENV=production
WORKDIR /usr/local/app
COPY ./package.json ./package-lock.json ./webpack.config.js ./
COPY ./src ./src
RUN npm ci
RUN npm run build

FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/local/app
COPY ./src /usr/local/app
COPY --from=builder /usr/local/app/node_modules ./node_modules
COPY --from=builder /usr/local/app/dist ./dist

# Not ideal, should utilize CopyWebpackPlugin
COPY ./src/html/index.html ./src/html/index.html
COPY ./src/CSS/main.css ./src/CSS/main.css
COPY ./src/image/pilogo-small.png ./src/image/pilogo-small.png

EXPOSE 8000
CMD [ "node", "dist/server.js" ]
