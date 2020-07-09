# React Template

## Table of Contents

[Introduction](#introduction)

[Set Up](#setup)

[Application Structure](#structure)

[Deploying With Docker](#deployment)

<a name="introduction"></a>

## Introduction

This template is based off of an ejected Create React App, it features some additional customizations and allows for control over the build step which are otherwise restricted within Creat React App.

You can use any styling option you prefer. The Webpack configuration does support CSS, Sass, and CSS Modules; however the Styled Components library is included as a production dependency, if you do not plan to use Styled Components, run `yarn remove {,@types/}styled-components` to remove both the library as well as its type definitions.

If you are not using a GraphQL API run `yarn remove @apollo/react-{common,hooks} apollo-{cache-inmemory,client,link{,-error,-http,-token-refresh}} graphql{,-tag} @graphql-codegen/{cli,typescript{,-operations,-react-apollo}} @types/graphql`. This will remove all packages related to GraphQL, GraphQL-Codegen, and Apollo Client. Then run `rm -rf src/lib/apollo`, which will remove the included Apollo provider and client setups. Then remove all references to Apollo from `src/lib/index.ts` and `src/app/Root.tsx`. Finally, run `rm -rf src/graphql src/generated config/codegen.yml` which will remove all GraphQL files and files associated with GraphQL-Codegen.

<a name="Set Up"></a>

## Set Up

Some initial configuration is required to make use of this template, the majority of which is simply inserting your project's name in the correct places. Please use the included checklist to ensure you set up your project correctly.

### `package.json`

- [ ] Update the `"name"` field with the name of your project.
- [ ] Update the `"description"` field with a brief description of your project.
- [ ] Update the `"author"` field with your name(s).

### `.npmrc`

- [ ] If you are using Font Awesome Pro, Add your auth token after the `=` on line 8. If you are not using Font Awesome Pro, remove the `.npmrc` file. Then if you are using the free tier of Font Awesome run `yarn remove @fortawesome/{fontawesome-pro,pro-solid-svg-icons} && yarn add @fortawesome/free-solid-svg-icons`. If you are not using Font Awesome at all, run `yarn remove @fortawesome/{fontawesome-{pro,svg-core},pro-solid-svg-icons,react-fontawesome}`.

### `cypress.json`

- [ ] Add your project ID, which you can get from https://cypress.io.

### `config/docker/nginx/default.conf`

- [ ] Update each "REPLACE.WITH.APP.URL" placeholder (on lines 2, 26, and 27) with the non "www" url for your app's domain. Example: `example.com`, NOT `www.example.com`.

### `config/docker/nginx/staging.conf`

- [ ] Update each "REPLACE.WITH.APP.URL" placeholder (on lines 2, 26, and 27) with the non "www" url for your app's domain. Example: `staging.example.com`, NOT `www.staging.example.com`.

### `config/docker/docker-compose.yml` & `config/docker/docker-compose.staging.yml`

- [ ] Update the "YOUR_IMAGE_NAME" placeholder with your username on DockerHub followed by your project name. Example: `myusername/myprojectname`. (Note the deliniating `/` between the username and project name).

### `config/docker/Dockerfile.staging`

- [ ] If your application does _NOT_ require a different set of environment variables for a staging environment (for example, a different API URL), replace the build command (on line 33) from `RUN yarn build:staging` with `RUN yarn build` which will build the staging version of your application with the regular production build.

### `public/index.html`

- [ ] Edit the `<title>` attribute with the title of your project.

### `scripts/deployment/compose_up.sh`

- [ ] Replace the YOUR_GITHUB_API_TOKEN_HERE placeholder with your GitHub API token. If your project is not a private repository, remove `-H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE'` from the script.
- [ ] Replace the YOUR_GITHUB_USERNAME_HERE placeholder with the GitHub username of the repository owner.
- [ ] Replace the YOUR_REPOSITORY_NAME_HERE placeholder with the name of your repository as it reads on GitHub.

### `scripts/deployment/init-letsencrypt.sh`

- [ ] Replace the REPLACE.WITH.APP.URL placeholders (on line 8) with your production domain. Example: `domains=(example.com www.example.com)`.
- [ ] Replace the `"you@domain.com"` placeholder (on line 11) with your email.

### `scripts/deployment/init-letsencrypt.staging.sh`

- [ ] Replace the REPLACE.WITH.APP.URL placeholders (on line 8) with your production domain. Example: `domains=(staging.example.com www.staging.example.com)`.
- [ ] Replace the `"you@domain.com"` placeholder (on line 11) with your email.

<a name="structure"></a>

## Application Structure

The folder structure of this template is intended to promote organization and separation of concerns wherever possible.

### .circleci

Contains a `config.yml` file which controls the CircleCI CI/CD platform.

### .vscode

This folder includes some useful snippets and recommended extensions to improve your development experience. It also includes some settings to support the Eslint extension by pointing to the development configuration file.

### config

This folder includes configuration files that support the tooling included with the structure.

**Note:** The `husky.config.js` and `importsort.config.js` files are saved at the root level of the project. This is necessary as those tools do not support a `--config` flag allowing for the configuration file to be stored elsewhere.

### cypress

Cypress is an End to End (e2e) test runner that is used to verify that full user stories of the application work as intended.

### dist

This folder is ignored in git, however it is generated at build time and is the target for build output.

### docker

This folder includes files used in creating a Docker image for the application, which is the desired deployment method.

- `/nginx`: Contains `default.conf`, which is copied into the Docker container to serve the application.
- `docker-compose.yml`: Coposes the Docker image containing your application with a Certbot image which will enable automated SSL certificate generation.
- `Dockerfile`: Utilizes a multistep setup which results in a small image of your application with an Nginx web server.

### public

This folder contains an `index.html` file for the application to mount to, icons, and a robots.txt file and manifest.json.

### scripts

This folder contains scripts that are used to build and deploy the application.

### src

The source code of the application.

- #### app

  The root of the app is contained within the `App.tsx` file, which is then wrapped with all necessary wrapping components such as the `<BrowserRouter>` and `<React.StrictMode>` components in `Root.tsx`.

- #### assets

  Static assets such as images.

- #### components

  "Dumb" or presentational components are organized here by their complexity according to the Atomic Design philosophy. See [here](https://bradfrost.com/blog/post/atomic-web-design/) for a detailed description on the philosophy.

  - ##### atoms

    The most basic components of the application. Examples: Buttons, Cards, and Form Inputs.

  - ##### molecules

    Molecules are slightly more complex elements than Atoms. They will almost always be combinations of multiple Atoms to create larger components. Examples: Form Groups, Dropdown Menus, and Button Groups.

  - ##### organisms

    Organisms are complete UI components, combining multiple Atoms and Molecules to create full pieces of an application. Examples: Cards with several related pieces of information, and Form Builders.

  - ##### templates
    Templates are layouts for providing consistant structure to a page. Examples: Page Layouts, Three Column Layouts, Flexbox, Container

- #### constants

  Constant variables that are referenced in multiple places throughout the app, Environment Variables are destructured from `process.env` and stored here.

- #### containers

  Containers are implementations of components. Where components are agnostic, or display only, containers use those components in specific use-cases. Examples: Login Form, Profile Preview Card.

- #### generated

  Files generated by a service will be stored in this folder. Example: Hooks generated by graphql-codegen.

- #### graphql

  GraphQL queries and mutations are defined here. Then run the `graphql-codegen` script to generate typesafe hooks to interact with the GraphQL API. Examples: Login.graphql, GetCurrentUser.graphql.

- #### hooks

  Hooks are abstractions of component logic, data loading, or behavior that can be reused across many components. They can return anything from pieces of state, to functions, to nothing at all (ie: they perform side effects), to even UI elements.

- #### lib

  Third party libraries should be configured in this folder and then called where needed in the application. For example, The `<ApolloProvider>` and `apolloClient` are configured here and then used in the `<Root>`.

- #### pages

  The `<Router>` is defined in the root of this folder, a component folder should be created in `pages` for each page of the application and then a `<Route>` assigned within the `<Router>`'s `<Switch>`.

- #### store

  All application level state, as well as type definitions should be stored here.

- #### utils
  Utilities are helper functions, variables, and configurations to provide quality of life functionality across the application. The `serviceWorker` is also stored here. Example: capitalizeString, formikConfig.

### tests

Unit and integration tests should be written here and a folder structure mirroring the `src` directory should be used to organize them. For example, the path for a file testing a Button component should be `tests/components/atoms/Button.test.tsx`.

### types

Module type definitions should be created here.

<a name="scripts"></a>

## Available Scripts

The `package.json` contains a large block of included scripts. Some scripts, such as `lint:ts` are not inteded to be run on their own, but instead act as base configurations for other scripts such as `lint:ts:dev` and `lint:ts:prod`. This is especially true for the `ci` block of scripts. These act as an interface for the CircleCI pipeline by referencing other scripts defined within the project. The `husky` block of scripts are ran by Husky as Git lifecycle hooks. The `lint-staged` block are ran by Lint-Staged as part of the preconfigured `pre-commit` Git hook.

The scripts you will be responsible for running to get the most out of the workflow are:

### `start:dev`

This runs the Webpack Development Server, which will be your primary development tool.

### `test:unit:watch`

Runs Jest in watch mode.

### `test:e2e`

Runs Cypress in a browser window.

### `graphql-codegen:watch`

Runs GraphQL-Codegen in watchmode, which will continually generate typesafe hooks for interacting with your GraphQL API.

### `build`

Creates a compiled application in a `dist` folder, which can be deployed at your desired hosting provider. Use this script if you do not intend to deploy your application in a Docker container.

### `docker:build` & `docker:push`

Builds and pushes a Docker image of your application to DockerHub, which you can easily deploy to a service like [DigitalOcean](https://digitalocean.com). This image is configured with an Nginx web server to host your application. If you are utilizing automated deployments using the CircleCI pipeline this will be perfomed automatically.

<a name="deployment"></a>

## Deployment With Docker

This template assumes you will have a staging environment for testing your application as well as a production environment for end users.

In your production hosting environment run:

```sh
# Copy the docker-compose.yml file
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/config/docker/docker-compose.yml?ref=master > docker-compose.yml

# Copy the LetsEncrypt initiation script
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/scripts/deployment/init-letsencrypt.sh?ref=master > init-letsencrypt.sh
chmod +x init-letsencrypt.sh

# Copy docker-compose initiation script
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/scripts/compose_up/compose_up.sh?ref=master > compose_up.sh
chmod +x compose_up.sh

# Initialize LetsEncrypt to regenerate SSL Certificates
./init-letsencrypt.sh
```

In your staging hosting environment run:

```sh
# Copy the staging docker-compose.yml file (note the source filename is docker-compose.staging.yml but the resulting filename is still docker-compose.yml)
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/config/docker/docker-compose.staging.yml?ref=staging > docker-compose.yml

# Copy the LetsEncrypt initiation script
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/scripts/deployment/init-letsencrypt.sh?ref=staging > init-letsencrypt.sh
chmod +x init-letsencrypt.sh

# Copy staging docker-compose initiation script (note the source filename is compose_up-staging.sh but the resulting filename is still compose_up.sh)
curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/contents/scripts/compose_up/compose_up-staging.sh?ref=staging > compose_up.sh
chmod +x compose_up.sh

# Initialize LetsEncrypt to regenerate SSL Certificates
./init-letsencrypt.sh
```

**Note:** If your repository is not private the Authorization header can be omitted from the above commands.

**Note:**: You must replace the YOUR_GITHUB_API_TOKEN_HERE, YOUR_GITHUB_USERNAME_HERE, and YOUR_REPOSITORY_NAME_HERE placeholders with your own values.

You can now run the most up to date version of your staging or production application by running:

```sh
./compose_up.sh
```

**Note:** The included CircleCI config will handle all subsequent redeployments automatically.
