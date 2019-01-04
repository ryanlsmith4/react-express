# React Express Server Starter

This starter project is meant to work with the React front end [here](https://github.com/Product-College-Labs/react-express-project). 

The purpose of this project is to provide a backend for a React Frontend. 

This project provides a simple backend API that serves JSON on a couple routes. 

## Getting started

You'll need to install dependencies. 

- `npm install` 
- Run the project with node or ndoemon
  - `node server.js` or `nodemon server.js`

## API Documentation 

The API of the current project has two endpoints that return JSON. 

- `/about` 
	- returns - `{ about: 'description string' }`
	- Example - `/about`
- `/random` 
	- query - n: Int
	- returns - random number from 0 to n - 1
	- Example - `/random/?n=6` 

You should test the API for yourself to make sure everything is running. Follow the instructions above and launch the Express Server.

There are three end points and each returns JSON. Type these into the address bar of the browser or just click the links below: 

- [http://localhost:4000](http://localhost:4000) default route
- [http://localhost:4000/about](http://localhost:4000/about) returns the about text
- [http://localhost:4000/random/?n=6](http://localhost:4000/random/?n=6) returns random number between 0 and 5

Notice each of these endpoints returns JSON. The browser should display this. 

The last endpoint in the list above includes query params. Try changing the value here and check the results. 

- [http://localhost:4000/random/?n=6](http://localhost:4000/random/?n=20) Random number between 0 and 19
- [http://localhost:4000/random/?n=6](http://localhost:4000/random/?n=100) Random number between 0 and 99

Test some other values. Try some unexpected or values that you think would return unexpected results. 

## Challenges (3hrs)

Your goal is to add some features to this API. 

**Challenge 1** 

Currently the API endpoint '/random/?n=num' returns a random number from 0 to num. This has a problem since the numbers returned are decimal numbers, for example: 

1. Return random numbers in a range. The call should take a value that sets the range.
1. Return die rolls. The call should take in the number of dice, and the number of sides. It should return an array of "rolls" and the total of all rolls. 
1. A service that takes a notation string and returns the dice rolls. 
  - Notication string uses this format: nDs where n is the number of dice and s is the number of sides. 
  - a + adds the next value so
    - 2D6+2 rolls 2 d 6 and adds 2
    - 3D6+1D4 rolls 3 d 6 and adds a 1 d 4 roll
1. Serve your Tweet generator
1. CRUD a simple resource. 
