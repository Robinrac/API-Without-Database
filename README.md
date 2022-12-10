# Robin Raczkiewicz working REST-API

## Description:

A program with a REST-API which includes:

* HTTP verb
* Routers
* Controllers
* GET, POST, PUT, DELETE functions
* .env file

Does not contain:
* Database

---
## Instructions:

### Install the following NPM packages:
``` 
 npm install express 
 npm install dotenv --save-dev
 npm install -D nodemon
 npm install uuid
``` 
---
### Commands to run the server:

In order for the server to start the user will have to type:

```
For production: npm start
For development: npm test
```
---

### Included functions:

This segment explains what the following functions do:
* getCandies
* getById
* postCandy
* putCandies
* deleteCandies

```
api/candies/getCandies - Prints out "candies" array and displays it to the user
api/candies/getById - Prints out a specific object in the array "candies" using it's ID
api/candies/postCandy - Adds a new "candy" object to the "candies" array.
api/candies/putCandies - Changes "candy" object using it's ID
api/candies/deleteCandies - removes "candy" object using it's ID
```
---
### Insomnia HTTP verbs:
These are direct links to the respective functions:
```
getCandies - http://localhost:3000/api/candies
getById - http://localhost:3000/api/candies/ *ID*
postCandy - http://localhost:3000/api/candies
putCandies - http://localhost:3000/api/candies/ *ID*
deleteCandies - http://localhost:3000/api/candies/ *ID*
```
---
## Authors:
 Author: [Robin Raczkiewicz](https://github.com/Robinrac) <br />
