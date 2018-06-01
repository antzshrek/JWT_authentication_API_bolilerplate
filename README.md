# README

[![Open Source Helpers](https://www.codetriage.com/antzshrek/jwt_authentication_api_bolilerplate/badges/users.svg)](https://www.codetriage.com/antzshrek/jwt_authentication_api_bolilerplate)

### Project Title

JWTauthentication API bolilerplate

## Installation
To run the demo web app offline, you need to install the following;

1. Make sure you have installed [Node.js](https://nodejs.org/en/download/). Versions 6.0.0 and higher should work. We recommend that you use the most-recent `"Active LTS"` version of Node.js.
2. Make sure you have installed `npm` (NB: `npm` is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer).   

### Check that you have node and npm installed

- To check if you have Node.js installed, run this command in your terminal:

`node -v`

- To confirm that you have npm installed you can run this command in your terminal:

`npm -v`

## Quick Start

1. `sudo npm install`
2. `node index` (recommend install nodemon)
3. Open <http://localhost:3000>

### Overview

 This project is a JWT user authentication API bolier plate that can be used in a node project that requires . The application has this structure:
```
├── app
│   ├── controllers
│   │   └── user.js         # Exports functions to use in routers
│   ├── logs                # Contains all the logs
│   ├── models              # Contains all models
│   │   └── User.js         # User model
│   └── routes              # contains all routes
│       ├── api             # where /api/ routes are stored
│       │   ├── index.js    # separates public from private routes with a middleware
│       │   ├── private.js  # contains all private routes
│       │   └── public.js   # contains all public routes
│       └── index.js        # where / routes are stored
│   
|
├── utils.js          	    # useful functions used in the entire application
├── config.js               # where all JWT, Winston, Mongoose,... config goes
├── index.js                # entry point, where mongoose connects to mongodb
└── server.js               # where the server starts and routes for the root path
```

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin: [Reuben Antz](https://github.com/antzshrek). 
*Feel free to contact  [Antz](cheerantz@gmail.com) if you wanna Fork the project to try something unique, and test.*


## Usage
`nodemon` will start a development server with [nodemon](https://nodemon.io/)



## Public Routes
**POST** `/api/user/register`

Parameters:
1. `email` **unique**
2. `firstName`
3. `lastName`
4. `password`




**POST** `/api/user/login`

Parameters:
1. `email`
2. `password`

Returns:

* `user` user object
* `token` jwt token

## Private Routes
In order to access private routes you **MUST** pass the `token` parameter that is given when logging in.

**GET** `/api/user` - Returns the user from the database, useful for refreshing user data.

**POST** `/api/user` - Updates user data

Parameters:

Any user field that you want to update, `_id`, `meta` and `__v` will be ignored.

**POST** `/api/user/checkpassword` - Returns true if the provided *password* is the same as the user's one

Parameters:
`password` Current user password that you want to check.


**DELETE** `/api/user` - Deletes the user



## Examples

**LANDING PAGE**

http://localhost:3000/

- If success recieve:
----------------------------------------------------
{
    "status": 200,
    "message": "Trust me, you made it! Best regards from Antz"
}

**Login** 
```
Post('http://localhost:3000/api/user/login', {

{"key":"email","value":"antz@gmail.com\n","description":"","type":"text","enabled":true},{"key":"password","value":"12345678","description":"","type":"text","enabled":true}
```
- If success recieve:
----------------------------------------------------
```
{
    "success": true,
    "user": {
        "_id": "5a93e06ad884f70b59362620",
        "firstName": "ANtz",
        "lastName": "Antz",
        "email": "antz@gmail.com\n",
        "__v": 0,
        "meta": {
            "updated_at": "2018-02-26T10:24:42.106Z",
            "created_at": "2018-02-26T10:24:42.106Z"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTkzZTA2YWQ4ODRmNzBiNTkzNjI2MjAiLCJmaXJzdE5hbWUiOiJBTnR6IiwibGFzdE5hbWUiOiJBbnR6IiwiZW1haWwiOiJhbnR6QGdtYWlsLmNvbVxuIiwiX192IjowLCJtZXRhIjp7InVwZGF0ZWRfYXQiOiIyMDE4LTAyLTI2VDEwOjI0OjQyLjEwNloiLCJjcmVhdGVkX2F0IjoiMjAxOC0wMi0yNlQxMDoyNDo0Mi4xMDZaIn0sImlhdCI6MTUxOTY0MDY5OCwiZXhwIjoxNTIyMjMyNjk4fQ.LFjUBd9y0T4CWz3DKltTYam8e5HwJl2rj2_Q82E6qDY"
}
```

- If failed recieve:
------------------------------------------
```
{
    "success": false,
    "message": "Wrong email or password!"
}
```


**Register** 
```
Post('localhost:3000/api/user/register', {

[{"key":"firstName","value":"Mike","description":"","type":"text","enabled":true},{"key":"lastName","value":"Alex","description":"","type":"text","enabled":true},{"key":"email","value":"mike@gmail.com\n","description":"","type":"text","enabled":true},{"key":"password","value":"1234567d","description":"","type":"text","enabled":true}]
```
- If success recieve:
----------------------------------------------------
```
{
    "success": true
}
```


## Contributors
* [Reuben Antz](https://github.com/antzshrek)
