FROM mcr.microsoft.com/playwright:v1.58.0-noble

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production=false

COPY . .

ENTRYPOINT ["npx", "playwright", "test", "--project=chromium"]
