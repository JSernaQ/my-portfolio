# syntax = docker/dockerfile:1

# Etapa base
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Astro"
WORKDIR /app
ENV NODE_ENV=production

# Etapa de build
FROM base AS build

# Instalar dependencias necesarias para compilar
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential python3 pkg-config && \
    rm -rf /var/lib/apt/lists/*

# Copiar dependencias y código
COPY package*.json ./
RUN npm ci --include=dev

COPY . .

# Compilar la aplicación (modo SSR)
RUN npm run build

# Limpiar dependencias dev
RUN npm prune --omit=dev

# Etapa final: ejecutar servidor Node
FROM base AS runner

# Copiar solo lo necesario para producción
COPY --from=build /app /app

EXPOSE 8080

# Fly.io usa PORT automáticamente, así que lo exponemos
ENV PORT=8080

# Ejecutar el servidor generado por Astro
CMD ["node", "./dist/server/entry.mjs"]
