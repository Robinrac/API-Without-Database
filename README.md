# Robin Raczkiewicz working REST-API

## Description:

__A program with a REST-API which includes:__

* HTTP verb
* Routers
* Controllers
* GET, POST, PUT, DELETE functions
* .env file

__Does not contain:__
* Database

---
## Instructions:

### Install the following NPM packages:
``` 
 npm install express 
 npm install dotenv --save-dev
 npm install -D nodemon
 npm install uuid
 npm install uuidv4
``` 
---
### Commands to run the server:

__In order for the server to start the user will have to type:__

```
For production: npm start
For development: npm test
```
---

### Included functions:

__This segment explains what the following functions do:__
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
__These are direct links to the respective functions:__
```
getCandies - http://localhost:4000/api/candies
getById - http://localhost:4000/api/candies/ *ID*
postCandy - http://localhost:4000/api/candies
putCandies - http://localhost:4000/api/candies/ *ID*
deleteCandies - http://localhost:4000/api/candies/ *ID*
```
---
## Authors:
 Author: __[Robin Raczkiewicz](https://github.com/Robinrac)__
