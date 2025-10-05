# Dockerfile

# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Create a lightweight production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]