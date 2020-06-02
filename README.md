<h3 align="center">Ecoleta</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤓 Este repositório contém o conteúdo desenvolvido durante a NLW #1 da Rocketseat. Foram utilizadas ferramentas baseadas em Javascript com Docker para provisionamento.
    <br>
</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Inicializando a aplicação](#getting_started)
- [Uso](#usage)
- [Ferramentas](#built_using)
- [Autora](#authors)
- [Considerações finais](#acknowledgement)

---

## 🏁 Inicializando a aplicação <a name = "getting_started"></a>

A inicialização da aplicação pode ser feita via Docker ou baixando as bibliotecas localmente.
O projeto pode ter integração com banco de dados local ou remoto.

### Pré-requisitos

```
Docker configurado
NodeJS ou imagem da versão LTS
Banco de dados remoto ou imagem docker
```

### Instalação

Baixe o repositório com o comando

```
git clone https://github.com/bih-goncalves/ecoleta_nwl1.git
```

Antes de criar os containeres, é necessário configurar a rede docker que manterá os containeres conectados.

```
docker network create bubble
```

Coloque as variáveis no arquivo .env e então rode o composer para baixar as imagens base, criar a imagem da aplicação e inicializar.

```
docker-compose -f docker-compose.yml up -d --build
```

Verifique que a aplicação backend está espelhada na porta 3333.

## 🎈 Uso <a name="usage"></a>

O uso do docker local limita o funcionamento para a rede localhost. Ao fazer o deploy, é necessário se atentar a variáveis de ambiente com credenciais.

### Rotas Backend

```

```

### Páginas Frontend

### Páginas Mobile

## ⛏️ Ferramentas utilizadas <a name = "built_using"></a>

- [Typescript](https://www.typescriptlang.org/) - Strongly typed, object oriented, compiled language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Eslint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Nodemon](https://nodemon.io/) - Changes Monitor

## ✍️ Autor <a name = "authors"></a>

- [@bih-goncalves](https://github.com/bih-goncalves)

## 🎉 Considerações finais <a name = "acknowledgement"></a>

- Esse projeto faz parte da primeira Next Level Week produzida pela [@Rocketseat](https://rocketseat.com.br/)
