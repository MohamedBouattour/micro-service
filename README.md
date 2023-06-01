# Microservice Project Team XYZ
## Introduction
This project is part of an academic project for the micro-service course. 
The project consists of multiple modules, each module has it's own purpose and functionality and together they form the whole project.
This entire project is containerized with Docker and each module has it's own Dockerfile.
* apigateway module that sits between the different services handling the communication between them.
* authenticationapp module contains the authentication service.
* eurekaserver holds the information about all client-service applications.
* uml_designer contains our frontend nodejs application and has 2 parts a server and a ui.
* for the database we used MySQL as our RDBMS.

## Installation
To install and run this project, follow these steps:
1. Clone the repository
2. Navigate to the `apigateway`, `authenticationapp`, `eurekaserver` folders and run `./mvnw clean install` to install the dependencies for the Spring microservice and the Config Server microservice
3. Run `docker-compose up` to build and start the Docker containers for all micro services

## Usage
Once the Docker containers are up and running, you can access the various microservices at the following URLs:

- `Eureka` microservice: http://localhost:8761
- `apigateway` microservice: http://localhost:8054
- `designer_server` microservice: http://localhost:3000
- `code-server` microservice: http://localhost:8443
- `authentication` microservice: http://localhost:8081
- `ui` microservice: http://localhost:8080