# DATATHON WEB
## Overview
This project uses SvelteKit for the frontend with Tailwind CSS and PocketBase for the backend.

## Technologies Used
- Frontend: SvelteKit
- Styling: Tailwind CSS
- Backend: PocketBase
- Containerization: Docker

## Getting Started
Prerequisites: Docker, Docker Compose

1. Clone the repository:
```
   git clone https://github.com/PDelos/Datathon_Web.git
   cd Datathon_Web
```

2. Build and start the Docker containers:
   docker-compose up --build

## Running the Application
- Frontend: http://localhost:5173
- Backend: http://localhost:8090
    - API: http://localhost:8090/api/
    - Admin Panel: http://localhost:8090/_/

## Using SvelteKit with Tailwind CSS
Add new components in `src/routes` or `src/lib`.
Use Tailwind classes directly in Svelte components.

Example:
<div class="p-4 bg-blue-500 text-white">Hello, Tailwind CSS!</div>

## Using PocketBase
Data is stored in `pb_data`. Access PocketBase admin UI at http://localhost:8090/_/.

## Commands to dockerize dev enviorment
- Build the project (first time running): 
```
docker compose up --build
```
- Start the project (once image, containers and volumes are set): 
```
docker compose up
```
- If having problems with docker, make sure all volumes, images and containers related to this repo are deleted before running docker commands.
- To enter inside a container through a terminal, use:
```
docker exec -it sveltekit /bin/sh
docker exec -it pocketbase /bin/sh
```

## Additional Resources
- SvelteKit Documentation: https://kit.svelte.dev/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- PocketBase Documentation: https://pocketbase.io/docs
