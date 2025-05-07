## Assignment: CRUD API

Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

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
  "name": "",
  "phone": "",
  "email": ""
}
```

### [PUT] Update user

- URL: `/api/users/{userId}`
- params:
  /users/1
- Body:

```json
{
  "name": "",
  "phone": "",
  "email": ""
}
```

### [DELETE] Delete user

- URL: `/api/users/{userId}`
