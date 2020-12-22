# Techsaloniki5 Students

A small Angular application which acts as the frontend of [techsaloniki-spring](https://github.com/manios/techsaloniki-spring).  It was developed as a tutorial of Spring Boot and Angular for workshop puproses on  [Techsaloniki event](https://techsaloniki.gr/techsaloniki-5), Greece (2019-10-05).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Branches

This example is divided into 2 Git branches:

* `master`: contains the exercise as it is taught inside the workshop with TODO items/goals to be missing.
* `complete`: contains the complete solution

## Requirements

To develop and run this application you need to:

1. Install [NodeJS](https://nodejs.org/en/). The requirements are least [NodeJS](https://nodejs.org/en/) 6.9.x and [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) 3.x.x. Latest version is recommended. To check NodeJS and NPM version you can run ```node -v``` and ```npm --version``` in a terminal.
1. Have the demo Spring Boot application up and running.

## IDE and environment setup

You can open this project as a directory in Visual Studio Code or another IDE like IntelliJ. In order to run the following commands, you can use a terminal or the IDE integrated terminal. 

* To download project dependencies you need to run:
  ```shell
  npm install
  ```
* Then you have to download Angular CLI:
  ```shell
  npm install -g @angular/cli
  ```
* In ```src/app/student.service.ts``` file replace the address and port of your Spring boot app. Default:
    ```typescript
    const API_URL: string = 'http://localhost:8081/students';
    ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
