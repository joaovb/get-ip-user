# Aplicação Node.js para buscar o IP do usuário

Esta é uma aplicação simples em Node.js que permite buscar o IP do usuário que está acessando o serviço. Ela utiliza tecnologias como Node.js, Express e uma biblioteca de terceiros para obter o IP do usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (https://nodejs.org) - Verifique a instalação com o comando `node -v`.
- npm (gerenciador de pacotes Node.js) - Verifique a instalação com o comando `npm -v`.

## Instalação

Siga os passos abaixo para configurar e executar a aplicação:

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/joaovb/get-ip-user
```

2. Acesse o diretório do projeto:

```bash
cd get-ip-user
```

3. Instale as dependências do projeto usando o npm:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

Após a execução bem-sucedida, o servidor estará em execução na porta 3000. Você pode acessar o serviço em `http://localhost:3000`.

## Como usar

A aplicação tem apenas um endpoint, que retorna o IP do usuário. Para obter o IP, faça uma requisição HTTP GET para o seguinte endpoint:

```
GET http://localhost:3000/ip
```

O servidor irá retornar o IP do usuário em formato JSON. Por exemplo:

```json
{
  "ip": "127.0.0.1"
}
```

## Contribuindo

Se você quiser contribuir para este projeto e melhorar a funcionalidade, sinta-se à vontade para fazer um fork deste repositório, criar um branch com suas alterações e enviar um pull request.

Certifique-se de seguir as diretrizes de contribuição do projeto e adicionar testes relevantes se necessário.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Aviso Legal

Esta aplicação é apenas para fins educacionais e de demonstração. Não nos responsabilizamos pelo uso indevido ou ilegal deste código. Certifique-se de seguir todas as leis e regulamentos locais ao utilizar este código.
