<h1 align="center">
  Verzel Project
  </br>
    <a href="verzel-showcase-project-client.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version">
    </a>
</h1>
<div align="center">

  <h3>Built With</h3>

  <img alt= "typescript logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img alt= "node.js logo" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
  <img alt= "express logo" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <img alt= "react logo" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30px"/>
  <img alt= "styled components logo" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  <img alt= "postgresql logo" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img alt= "prisma logo" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img alt= "jest logo" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img alt= "docker logo" src="https://img.shields.io/badge/Docker-228FE1?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
  <img alt= "nginx logo" src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" height="30px"/>
  <img alt= "heroku logo" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img alt= "vercel logo" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Verzel Project simulates a car showcase, where the user can see the cars and admin users can create, update and delete cars.

</br>

## Features

-   Acess the website see the cars and order them by price.
-   Login as admin user and create, update and delete cars.

</br>

## API Reference

#### Sign-in

```http
  POST /auth/signin
```

#### Response:

```json
{
	"token": "jason web token"
}
```

#

#### Request:

| Body       | Type     | Description              |
| :--------- | :------- | :----------------------- |
| `email`    | `string` | **Required** valid email |
| `password` | `string` | **Required**.            |

#### Get all cars

```http
  GET /api/cars
```

#### Response:

```json
[
	{
		"id": 1,
		"name": "Audi A3",
		"model": "2019",
		"value": "100000",
		"mainImageURL": "https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png",
		"brand": {
			"id": 1,
			"name": "Audi"
		}
	},
	{
		"id": 2,
		"name": "BMW 320i",
		"model": "2021",
		"value": "150000",
		"mainImageURL": "https://cdn.motor1.com/images/mgl/KPK4R/s1/bmw-320i-m-sport-2021-teste-br.jpg",
		"brand": {
			"id": 2,
			"name": "BMW"
		}
	}
]
```

#

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request authorization header**

<br/>

#### Create a car

```http
POST /car
```

#### Request:

| Body           | Type     | Description                   |
| :------------- | :------- | :---------------------------- |
| `name`         | `string` | **Required**.                 |
| `model`        | `string` | **Required**.                 |
| `mainImageURL` | `string` | **Required**. valid image url |
| `value`        | `number` | **Required**.                 |
| `brandId`      | `number` | **Required** valid brand id.  |

#### Response:

```json
{
	"id": 1,
	"name": "Fiat Uno",
	"model": "2021",
	"mainImageURL": "https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png",
	"value": "20000",
	"createdAt": "2022-11-22T23:48:24.560Z",
	"updatedAt": "2022-11-22T23:48:24.560Z",
	"brandId": 1
}
```

#

#### Get a card

```http
GET /card/:cardId
```

#### Request:

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `cardId`  | `string` | **Required**. |

#### Response:

```json
{
	"name": "Lucas Alves",
	"linkedinUrl": "https://www.linkedin.com/in/LucasAlvsz/",
	"githubUrl": "https://www.github.com/LucasAlvsz/"
}
```

</br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

##### Without Docker:

##### back-end:

`DATABASE_URL = postgres://username:password@hostname:5432/databasename`

`PORT = 5000 or any port you want [optional]`

##### front-end:

`VITE_API_URL = http://localhost:[PORT] or http://localhost:5000`

`VITE_BASE_URL = http://localhost:[PORT] or http://localhost:5000`

#

##### With Docker:

##### back-end:

`DATABASE_URL = postgres://username:password@postgres_db:5432/databasename`

`POSTGRES_USER = postgres`

`POSTGRES_PASSWORD = postgres`

`POSTGRES_DB = virtual-card`

##### front-end:

`VITE_API_URL = http://localhost:8080/api`

`VITE_BASE_URL = http://localhost:8080`

</br>

## Run Locally

> Remember to create a .env file with the environment variables in virtual-card-front and virtual-card-back folders.

##### Without Docker:

Clone the project

```bash
  git clone https://github.com/LucasAlvsz/virtual-card.git
```

Go to the project api directory

```bash
  cd virtual-card/virtual-card-back
```

Install dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

Go to the project client directory

```bash
  cd virtual-card/virtual-card-front
```

Install dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the client

```bash
  npm run preview
```

#

##### With Docker:

```bash
  cd virtual-card
```

```bash
  docker-compose up
```

</br>

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
