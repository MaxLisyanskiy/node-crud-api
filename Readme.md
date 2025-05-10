## Assignment: CRUD API

Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

## Project structure
```
node-crud-api/
├── src/
│   ├── index.ts
│   └── user/
│       ├── user.controller.ts
│       ├── user.routes.ts       
│       ├── user.types.ts
│       └── user.utils.ts
├── .env
├── package.json
└── tsconfig.json
```

## Endpoints

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
