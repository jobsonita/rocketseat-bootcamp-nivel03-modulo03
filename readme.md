<p align="center"><img alt="Logotipo do Projeto" title="GoBarber" src=".github/logo.svg" width="400px" /></p>

# GoBarber Front-end Mobile

<p align="center">Autor: Jobson Gilberto Barros Amorim &lt;jobsonita@gmail.com&gt;</p>

Baseado nas aulas do curso [GoStack](https://rocketseat.com.br/gostack) (turma 11) da Rocketseat.

## Sobre este projeto

Este projeto é um front-end mobile em React-Native usando as bibliotecas react-native e typescript.

Para maiores detalhes sobre o passo-a-passo da configuração do projeto, utilize a seção "Comandos utilizados na construção do projeto" deste readme em conjunto com o detalhamento dos [commits](https://github.com/jobsonita/rocketseat-bootcamp-nivel03-modulo03/commits/master) deste repositório.

Este projeto deve ser utilizado em conjunto com o back-end desenvolvido ao longo do GoStack. Atualmente, a versão mais recente compatível com este projeto pode ser encontrada em [jobsonita/rocketseat-bootcamp-nivel02-modulo02](https://github.com/jobsonita/rocketseat-bootcamp-nivel02-modulo02/tree/699df6e5a57c7e9d9013318d06fb108ec91a83d1).

## Dependências Globais

É necessário ter [Node](https://github.com/nvm-sh/nvm), [Yarn](https://yarnpkg.com) e [React-Native](https://reactnative.dev) instalados.

Para uso em smartphones com o sistema Android, recomendo usar Python2, JDK8 e [Android Studio](https://developer.android.com/studio), conforme o [guia de configuração da Rocketseat](https://react-native.rocketseat.dev).

Para uso em smartphones com o sistema iOS, siga o [guia de configuração da Rocketseat](https://react-native.rocketseat.dev).

## Bibliotecas e ferramentas utilizadas

- react-native
- typescript
- eslint + prettier (padronização de código)
- [VS Code](https://code.visualstudio.com) (editor de código preferido)

## Instalação e execução

Certifique-se de que o back-end da aplicação esteja rodando (siga os passos do [readme do back-end](https://github.com/jobsonita/rocketseat-bootcamp-nivel02-modulo02/blob/nivel03modulo02/readme.md)).

Com um terminal aberto na raiz do projeto, execute:

```
yarn
```

Após a instalação, e com um dispositivo ou emulador do android configurado, execute:

```
yarn android
```

ou, se você possuir um dispositivo ou emulador do ios:

```
yarn ios
```

Após a primeira execução, nas próximas vezes, basta executar:

```
yarn start
```

## Comandos utilizados na construção do projeto

Caso deseje criar um projeto do zero seguindo os passos dos commits, listo abaixo os comandos executados neste projeto.

### Sessão 01

#### Aula 01

Escolha um nome sem espaços ou caracteres especiais para usar na criação do projeto.
Não há problema em renomear a pasta após a criação.

```
npx react-native init temporaryprojectname --template=react-native-template-typescript
mv temporaryprojectname project_name
cd project_name
```

Execute `yarn android` ou `yarn ios`, de acordo com seu dispositivo ou emulador.
