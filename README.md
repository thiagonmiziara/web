<h1 align="center">Projeto Web SpaceTime</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="Version 0.1.0">
  <img src="https://img.shields.io/badge/private-yes-green.svg" alt="Private">
</p>

<p align="center">
  Descrição curta do projeto.
</p>

## 📖 Índice

- [Visão Geral](#-visão-geral)
- [Requisitos](#-requisitos)
- [Instalação](#-instalação)
- [Comandos](#-comandos)
- [Dependências](#-dependências)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 📋 Visão Geral

O projeto "web" é uma aplicação web desenvolvida com Next.js, React e Tailwind CSS. Ele também utiliza várias dependências adicionais listadas no arquivo `package.json`. Este projeto é uma versão 0.1.0 e é privado.

## ⚙️ Requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:

- Node.js versão 20.1.6 ou superior
- NPM (Node Package Manager) ou Yarn instalado
- Conexão com a internet para baixar as dependências

## 🚀 Instalação

Siga estas etapas para instalar e executar o projeto em sua máquina local:

1. Clone o repositório:
    ```shell
   git clone <url-do-repositorio>
   ```
2. Acesse o diretório do projeto:

    ```shell
    cd nome-do-projeto
   ```

3. Instale as dependências:
      ```shell
    npm install || yarn add
   ```

## 💻 Comandos

1. `npm run dev:` Inicia o servidor de desenvolvimento.
2. `npm run build:` Compila o projeto para produção.
3. `npm start:` Inicia o servidor em modo de produção.
4. `npm run lint:` Executa a verificação de linting.

## 📚 Dependências
Este projeto depende das seguintes bibliotecas e versões:

```json
{
  "dependencies": {
    "@types/node": "20.1.6",
    "@types/react": "18.2.6",
    "@types/react-dom": "18.2.4",
    "autoprefixer": "10.4.14",
    "axios": "^1.4.0",
    "dayjs": "^1.11.7",
    "eslint": "8.40.0",
    "eslint-config-next": "13.4.2",
    "js-cookie": "^3.0.5",
    "jwt-decode": "^3.1.2",
    "lucide-react": "^0.217.0",
    "next": "13.4.2",
    "postcss": "8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.2",
    "typescript": "5.0.4"
  },
  "devDependencies": {
    "@rocketseat/eslint-config": "^1.2.0",
    "@tailwindcss/forms": "^0.5.3",
    "@types/js-cookie": "^3.0.3",
    "prettier-plugin-tailwindcss": "^0.3.0"
  }
}
```
Certifique-se de ter as versões corretas dessas dependências instaladas em seu ambiente de desenvolvimento.

## 💻 Contribuição
Se você quiser contribuir com este projeto, siga estas etapas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona minha feature'`)
4. Faça push para a branch (`git push origin feature/Minha`)

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações