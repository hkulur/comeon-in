# comeon-in

`comeon-in` repo to manage login flows

## Pre-requisites

1. Install `nvm` to manage Node.js versions
   Follow instructions at: https://github.com/nvm-sh/nvm

2. Install `Node.js`
   ```bash
   nvm install
   ```

   This command will pick the required node version from `.nvmrc`.

3. Install `yarn`

   ```bash
   brew install yarn
   ```

4. To run lint

  ```bash
  yarn lint
  ```

## To run in dev mode

1. Install all the package using `yarn` or `yarn install`

2. `cd packages/design-system` and run `yarn build` to build es5 modules which are later used

3. Open new terminal and `cd packages/server` and run `yarn start` which will start JSON server in 3001 port.

4. Open new terminal instance and `cd packages/login` and run `yarn start`  which will bring up development server.


## To Do

1. Jest unit test cases for all modules
2. Adopting `Typescript` in the project

