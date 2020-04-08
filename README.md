# Scratch lecture repo - node.js

### Set Up
- Create a JS file called `index.js`
- Generate the `package.json` file by running `npm init` in the terminal (accept all defaults)
- Install express by running `npm install express` in the terminal
- You should see `express` added as a dependency in your `package.json` file

### PostMan
- Setup a new test collection called `20200408-nodejs-rest`

### Pre-work - Test Route
- Setup a single endpoint that will accept GET requests at `/greeting/[DYNAMIC NAME]` and respond with greeting message using the name passed in ex. `Hello there Kevin!`
- Create a Postman test case in your collection to test your endpoint

### CRUD
When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.
### Read - GET Request
View an entry (or multiple entires)
### Delete - DEL Request
Delete an entry (or multiple entries)
### Create - POST Request
Create a new entry 
### Update - PUT Request
Update an existing entry