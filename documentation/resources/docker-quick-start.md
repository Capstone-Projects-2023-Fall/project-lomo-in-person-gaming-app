---
sidebar_position: 4
---
# Docker Quick Start

## Docker concepts
- A docker container is kind of a virtual machine except it only runs a lightweight command line version of Linux and uses the host computer's resources to function. It's supposed to be lightweight.
- The `docker compose` command is the equivalent of a makefile in C
    - You can use docker run to start a container with literally multiple lines of options OR put all of those options in a docker-compose.yml file and run `docker compose up` instead.
- The `docker-compose.yml` file describes how the docker container is built.
  - It can bundle docker images together 

## Start/stop container
You can either use Docker Desktop's Dashboard or the command line. 
- Docker Desktop:
  - Go to the "containers" tab, click the start/stop button next to the container called 'backend' or 'laravel.test-1'
- Command line:
    ```bash
    # start container
    sail up -d
    docker compose up -d

    # stop container
    sail down
    docker compose down
    ```

## Show a list of containers

You can either use Docker Desktop's Dashboard or the command line.

- Docker Desktop:
  - Go to the "container" tab to see a list of all containers, both running and stopped
- Command line:
  - Show active containers only: `docker ps`
  - Show ALL containers, both active and inactive: `docker ps -a`

## Get container id

You can either use Docker Desktop's Dashboard or the command line.

- Docker Desktop
  - Go to the "container" tab.
  - Find backend > laravel.test-1 container
  - Underneath the container title is a string of characters like `47e98223b7bf`. That's the container id.
  - Copy the container id
- Command line
  - Run `docker ps -a` to show all containers
  - Find the container id and copy it

## Get container name

Easiest and surest way is to use the command line
1. Run `docker ps -a` to show all the containers
2. Find the container name and copy it

## Access the docker container's command line

You can either use Docker Desktop's Dashboard or the command line.

### From Docker Desktop
1. Go to the "containers" tab
2. Make sure that the laravel container is RUNNING
3. Click into the laravel container
4. Click the "terminal" tab (for mac users) or the "exec" tab (for windows users)
5. Run `bash` to change the shell to bash
6. Start running commands as if it's your local machine. Meaning, don't use `sail` commands or docker commands, just use the original commands
   - Example: run `php --version` instead of `sail php --verion` or `docker exec -it <container-id/name> php --version`

### From Command line
1. Run `docker exec -it <container-id/name> bash` to enter the command line inside the docker container
   1. `-it` means interactive
2. Start running commands as if it's your local machine. Meaning, don't use `sail` commands or docker commands, just use the original commands
   - Example: run `php --version` instead of `sail php --verion` or `docker exec -it <container-id/name> php --version`