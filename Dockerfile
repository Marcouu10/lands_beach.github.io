# Etapa 1: Construcción
FROM node:18-alpine AS build
# Entramos a la carpeta de tu proyecto
WORKDIR /app
# Copiamos los archivos de configuración
COPY lands-react/package*.json ./
RUN npm install
# Copiamos el resto del código
COPY lands-react/ .
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine
# Copiamos el resultado del build a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]