# Recipe App Back End
This is a back-end application for a simple [Recipe App](https://github.com/manoelteixeira/recipe-app-front-end) App.

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

## Endpoints

|  #  |    URL     | HTTP Verb |    CRUD    |              Description               |
| :-: | :--------: | :-------: | :--------: | :------------------------------------: |
|  1  |   `/recipes`   |    GET    |  **R**ead  |   Get a list of all recipes   |
|  2  | `/recipes?ingredients=<ingredient>+<ingredient>+...` |  **R**ead  |   Get a list of all recipes that contains given ingredients |
|  3  | `/recipes/:id` |    GET    |  **R**ead  | Get an individual view (show one recipe) |
|  4  |   `/recipes `  |   POST    | **C**reate |           Create a new recipe            |
|  5  | `/recipes/:id` |  DELETE   | **D**elete |             Delete a recipe              |
|  6  | `/recipes/:id` |    PUT    | **U**pdate |             Update a recipe              |

> You can try these enpoints [here](https://recipe-back-end-rw5d.onrender.com)