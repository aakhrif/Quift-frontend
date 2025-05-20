# --- Build Stage ---
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# --- Runtime Stage ---
FROM node:20-alpine
WORKDIR /app

# Nur nötige Dateien für SSR kopieren
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]