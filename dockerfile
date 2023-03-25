# Escolha uma imagem de node.js como base
FROM node:alpine

USER root
# Defina o diretório de trabalho
WORKDIR /app

# Atualize os pacotes e instale o Node.js e o NPM
RUN apk update && apk add --no-cache nodejs npm

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Crie o build da aplicação
RUN npm run build

# Escolha uma imagem nginx como base
FROM nginx:alpine

USER root
# Copie o build da aplicação para a pasta de publicação do Nginx
COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=build /usr/local/bin/node /usr/local/bin/
COPY --from=build /usr/local/lib/node_modules /usr/local/lib/node_modules

# Exponha a porta 80 para acesso externo
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
