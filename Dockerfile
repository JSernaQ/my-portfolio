# Etapa 1: construir
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: ejecutar el preview
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app ./

# Exponemos el puerto que usa Astro
EXPOSE 4321

# Agregamos el flag para escuchar en todas las interfaces
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
