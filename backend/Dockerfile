# Usando uma imagem Node.js oficial como base
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/app

# Copiando o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instalando as dependências
RUN npm install --production && npm cache clean --force

# Copiando o restante da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta 3000 para acessar a aplicação
EXPOSE 3000

# Definindo a variável de ambiente NODE_ENV como produção
ENV NODE_ENV=production

# Comando para rodar a aplicação
CMD ["npm", "start"]
