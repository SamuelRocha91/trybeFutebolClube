# Usar a imagem node:16.14-alpine como base
FROM node:14.5.0-alpine

# Mudar para o diretório de trabalho /app-frontend
WORKDIR /app-frontend

# Copiar os package.json e package-lock.json para o container
COPY package* ./

# Instalar as dependências Node
RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações