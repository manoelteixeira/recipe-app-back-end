# Recipe App Back End

## Instalation And Setup
1. **Fork** and **Clone** this repository
2. Create a **.env** with:
    - `PORT=<server port>`
    - `PG_HOST=<database url>`
    - `PG_PORT=5432`
    - `PG_DATABASE=recipe_app`
    - `PG_USER=postgres`
3. Install project dependencies with `npm install`

## Commands
- `npm run start`: to run the server
- `npm run watch`: to run the server using nodemon
- `npm run db:init`: to initialize the database
- `npm run db:seed`: to seed the database
- `npm run dev`: to initialize and seed the databa