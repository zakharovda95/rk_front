ARG NODE_VERSION=node:16.15.1

FROM $NODE_VERSION AS dependency-base

RUN mkdir -p /app

WORKDIR /app

COPY .env .
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile


FROM dependency-base AS production-base

COPY . .
RUN npm run build

FROM $NODE_VERSION-slim AS production

COPY --from=production-base /app/.output /app/.output
COPY --from=production-base /app/.env ./

ENV NUXT_HOST=0.0.0.0

ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}


ENV NODE_ENV=production
EXPOSE 3000

CMD [ "node", "/app/.output/server/index.mjs" ]