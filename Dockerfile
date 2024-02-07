FROM node:20.10.0-alpine AS base

ENV NODE_ENV=production

# INSTALL ALL DEPS INCLUDING DEV DEPEDENCIES
FROM base as deps
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev

# SETUP PRODUCTION NODE_MODULES
FROM base as prod-deps
RUN mkdir /app
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD package*json ./
RUN npm prune --production --omit=dev

# BUILD APP
FROM base as build
RUN mkdir /app
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD ./ ./
RUN npm run build

# PRODUCTION RUNNER
FROM base
RUN mkdir /app
WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/.next /app/.next
EXPOSE 3000/tcp
CMD [ "npm", "start" ]