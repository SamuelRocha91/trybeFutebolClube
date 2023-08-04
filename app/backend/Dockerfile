# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine
# Mudar para o diretório de trabalho /app-backend
WORKDIR /app-backend
# Copiar os package.json, package-lock.json e packages.npm para o container
COPY package* ./

# Instalar as dependências Node

RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações