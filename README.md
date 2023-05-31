# Micro-service Project

## Introduction
This project is part of an academic project for the Microservice Architecture course. The project consists of two main parts, a monorepo called `MonoRepoWithJS` and another monorepo called `MonoRepoWithSpring`. The first monorepo includes a NestJS-based microservice called `client`, along with two frontend microservices built with Angular and React. The second monorepo contains a Spring-based microservice called `compte`, a Config Server microservice, and a Eureka microservice. The entire project is containerized with Docker.

## Installation
To install and run this project, follow these steps:
1. Clone the repository
2. Navigate to the `MonoRepoWithJS` folder and run `npm install` to install the dependencies for the NestJS microservice and the frontend microservices
3. Navigate to the `MonoRepoWithSpring` folder and run `./mvnw clean install` to install the dependencies for the Spring microservice and the Config Server microservice
4. Run `docker-compose up` to build and start the Docker containers for all microservices

## Usage
Once the Docker containers are up and running, you can access the various microservices at the following URLs:

- `client` microservice: http://localhost:3000
- Angular frontend microservice: http://localhost:4200
- React frontend microservice: http://localhost:3001
- `compte` microservice: http://localhost:8080
- Config Server: http://localhost:8888
- Eureka microservice: http://localhost:8761

## Contributing
If you'd like to contribute to this project, please follow these steps:
1. Fork this repository
2. Create a new branch with your changes: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Added a new feature'`
4. Push your changes to your forked repository: `git push origin my-feature-branch`
5. Create a pull request to merge your changes into the main repository

## License
This project is licensed under the MIT License. See the LICENSE file for details.
