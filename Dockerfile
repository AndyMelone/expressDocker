FROM node:23.1.0-slim
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN  npm install -g pnpm
RUN pnpm install
COPY . .
ENV PORT=3000
CMD ["pnpm", "start"]