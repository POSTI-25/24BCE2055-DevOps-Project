FROM node:20-alpine AS build

WORKDIR /app/intranet-portal

COPY intranet-portal/package*.json ./
# RUN npm ci
RUN npm install

COPY intranet-portal/ ./
RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build /app/intranet-portal/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]