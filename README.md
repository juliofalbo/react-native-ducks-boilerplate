Projeto inciado com [Create React Native App](https://github.com/react-community/create-react-native-app).

## Scripts Disponíveis

Sugiro a utilização do **yarn** no lugar no **npm**.

#### `yarn test`

Roda os testes via [jest](https://github.com/facebook/jest).

#### `yarn ios`

Inicia o app no iOs.

#### `yarn android`

Inicia o app no Android.

## Branches

### master
A branch master é a branch de produção.

### alpha
A branch alpha é a branch de homologação.

## feature branches
Todas as funcionalidades serão desenvolvidas utilizando a estratégia de feature branches.

Ex: Ao criar a feature de login, será criado uma nova branch utilizando o código abaixo:
`git checkout -b feat/login`

#### Regras
Onde o prefixo *feat/* é obrigatório e o sufixo será o nome do feature que será trabalhada.

## fix branches
Todos os fix's terão sua própria branch visando uma melhor organização dos problemas resolvidos.

Ex: Ao resolver um bug no login, será criado uma nova branch utilizando o código abaixo:
`git checkout -b fix/login`

#### Regras
Onde o prefixo *fix/* é obrigatório e o sufixo será o da feature que receberá o fix.

___

# Criação de Views

Todas as Views serão criadas na pasta **views**, que se encontra dentro da pasta **src**.
A pasta deverá conter o nome da sua View e dentro dela serão necessários 3 arquivos.

#### Exemplo


```
- src
---| views
-----| SuaView
-------| index.js
-------| SuaView.js
-------| SuaViewContainer.js
```

### index.js
É o arquivo que exportará sua view como default, com o objetivo de facilitar a importação da mesma.

### SuaView.js
É onde será codificado a aparência da View.

### SuaViewContainer.js
É o arquivo responsável por realizar a ponte entre os atributos e métodos que se encontram sob responsabilidade do **redux** para sua view.
