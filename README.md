# News Aggregator

A React-based news aggregator application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Running in Production](#running-in-production)


## Prerequisites

Make sure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To get a local copy up and running, follow these steps:

### Clone the Repository

```sh
git clone <repository-url>
cd news-aggregator

docker-compose up --build

```
### Install new packages 
During development, you can install new packages without rebuilding the Docker image. Use the following command to install a new package inside the running container:

```sh 
docker-compose exec web npm install new-package
```


### Running in Production
To build and run the application in production mode, follow these steps:

#### Build the Docker Image

```sh 
docker build -t news-aggregator .
```

#### Run the Docker Container

```sh
docker run -p 80:80 news-aggregator
```

