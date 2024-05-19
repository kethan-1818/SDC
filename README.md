# OCC Computer Science Club Website 
You can view a preview of the site here: 
https://github.com/Ankulgupta5284/SDC-CLUB-WEBSITE/blob/master/README.md?plain=1

## Getting Started
Visit and follow instructions from <a href="https://github.com/Ankulgupta5284/SDC-CLUB-WEBSITE/blob/master/README.md?plain=1">Guide for Developers</a>

## Docker & Docker Compose
Docker compose will create a containerized environment for the frontend, backend, and mongo. To quickly start the entire stack on any machine with docker:


`docker-compose up`

To run just a mongo instance:

`docker-compose up -d mongo`

Stopping the environment:

`docker-compose down`

Rebuild All Containers:

`docker-compose build`

### Cleaning Docker Env
**Deleting the mongo container will delete all data in the database**
1. Stop the container(s) using the following command:
`docker-compose down --volumes`
2. Delete all images using the following command:
`docker image prune -a`
