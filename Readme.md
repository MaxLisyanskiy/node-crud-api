# Assignment: CRUD API
Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

## Overview
This project is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and TypeScript. It allows users to manage user records, including their usernames, ages, and hobbies. The API is designed to demonstrate basic RESTful principles and serves as a foundation for further development.

## Postman\Insomnia Collection
A `HAR` collection is included in the `docs/collection/` directory. You can import the `collection_Node-Crud-Api.har` file into Postman\Insomnia to test the API endpoints easily.

## Project Structure
```
node-crud-api/
├── docs/
│   ├── collection/
│       └── collection_Node-Crud-Api.har
│   └── screens/
│       └── preview.png
├── src/
│   ├── index.ts
│   └── user/
│       ├── user.controller.ts
│       ├── user.routes.ts       
│       ├── user.types.ts
│       └── user.utils.ts
├── .env
├── .prettierrc
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## Initialization
To get started with the project, follow these steps:

1. **Clone the repository:**
` git clone https://github.com/MaxLisyanskiy/node-file-manager.git`
2. **Switch on develop branch**
` git switch origin develop`
3. **Install dependencies:**
`npm install`

## Running the Application
Project has 2 modes of running application
- development: `npm run start:dev`
- production: `npm run start:prod`

## API Endpoints

#### [GET] Get all users

- URL: `/api/users`

#### [GET] Get a specific user

- URL: `/api/users/{userId}`

#### [POST] Create a new user

- URL: `/api/users`
- Body:

```json
{
  "username": string,
  "age": number,
  "hobbies": string[]
}
```

### [PUT] Update user

- URL: `/api/users/{userId}`
- Body:
```json
{
  "username": string,
  "age": number,
  "hobbies": string[]
}
```

### [DELETE] Delete user

- URL: `/api/users/{userId}`
