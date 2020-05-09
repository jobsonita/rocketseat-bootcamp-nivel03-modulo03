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

Para uso em smartphones com o sistema iOS, siga o [guia de configuração da Rocketseat](https://react-native.rocketseat.dev). É necessário ter o pacote [cocoapods](https://cocoapods.org) instalado no seu Mac.

## Bibliotecas e ferramentas utilizadas

- react-native
- typescript
- eslint + prettier (padronização de código)
- styled-components (estilização de componentes)
- react-native-vector-icons (biblioteca de ícones)
- unform (controle otimizado de forms)
- yup (validação de dados)
- react-navigation (roteamento de páginas)
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

#### Aula 02

```
yarn add eslint -D
yarn eslint --init
```

Configurações do eslint:

```
? How would you like to use ESLint?
> To check syntax, find problems, and enforce code style
? What type of modules does your project use?
> JavaScript modules (import/export)
? Which framework does your project use?
> React
? Does your project use TypeScript?
> y
? Where does your code run?
None (uncheck all)
? How would you like to define a style for your project?
> Use a popular style guide
? Which style guide do you want to follow?
> Standard: https://github.com/standard/standard
? What format do you want your config file to be in?
> JSON
? Would you like to install them now with npm?
> n
```

```
yarn add -D eslint-config-standard eslint-config-standard-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard eslint-plugin-promise eslint-plugin-import

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

yarn add eslint-import-resolver-typescript -D
```

#### Aula 04

```
yarn add styled-components
yarn add @types/styled-components -D
```

Instalar o react-navigation segundo os passos indicados na [documentação](https://reactnavigation.org/docs/getting-started/):

```
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Se estiver desenvolvendo para iOS no Mac, executar:

```
npx pod-install ios
```

Finalmente, independente do dispositivo alvo, importar `react-native-gesture-handler` como primeira importação no ponto de entrada da aplicação (src/App.tsx).

Em seguida, proceder com os passos de [hello-react-navigation](https://reactnavigation.org/docs/hello-react-navigation):

```
yarn add @react-navigation/stack
```

#### Aula 06

Após criar a pasta assets/fonts com as fontes a serem usadas, e criar um arquivo react-native.config-js apontando para essa pasta, executar:

```
yarn react-native link
```

### Sessão 02

#### Aula 01

```
yarn add react-native-vector-icons
```

No iOS, executar `npx pod-install ios`. Em seguida, adicionar a fonte Feather.ttf ao arquivo Info.plist na pasta ios.

```
<key>UIAppFonts</key>
<array>
  <string>RobotoSlab-Medium.ttf</string>
  <string>RobotoSlab-Regular.ttf</string>
  <string>Feather.ttf</string>
</array>
```

No Android, alterar o arquivo android/app/build.gradle, adicionando as linhas:

```
project.ext.vectoricons = [
  iconFontNames: ['Feather.ttf']
];

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Finalmente, independente do dispositivo alvo:

```
yarn add -D @types/react-native-vector-icons
```

#### Aula 02

```
yarn add react-native-iphone-x-helper
```

#### Aula 04

```
yarn add @unform/core @unform/mobile
```

#### Aula 07

```
yarn add yup
yarn add @types/yup -D
```
