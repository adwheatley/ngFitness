FROM node:8.10.0-alpine as builder

COPY package.json ./

RUN yarn install && mkdir /ngfitness && mv ./node_modules ./ngfitness

WORKDIR /ngfitness

COPY . .

RUN yarn run build --prod --build-optimizer

FROM nginx:1.13.9-alpine

COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ngfitness/dist /usr/share/nginx/html

COPY --from=builder /ngfitness/.docker/entrypoint.sh /usr/share/nginx/

RUN chmod +x /usr/share/nginx/entrypoint.sh

CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
