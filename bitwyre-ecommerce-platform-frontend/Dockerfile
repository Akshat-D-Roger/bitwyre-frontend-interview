FROM node:23-alpine
ENV VITE_JWT_SECRET_KEY='akshat_key_2312'
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
EXPOSE 3000
# all the above things run when you create image
CMD [ "serve", "-s", "dist" ]
# this run when you start image for container