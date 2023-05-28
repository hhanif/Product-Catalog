# Product-Catalog
API / web app that allows users to create products and search over them.

This a barebones React web-application using Node and Express.js to create the API endpoints. 
To use this:

1. Open up backend which is the server-side code in server.js. To run this, 
First: Use command: "npm install" to install all node modules / dependencies. 

Then, use the command: node server.js

This will start running on localhost:8000 where you can test the POST call: http://localhost:8000/api/products

With a payload like this:
{
  "name": "Advil",
  "category": "Pills",
  "sku": "456"
}

You can then find any product you have added via the POST call using the GET endpoint:
http://localhost:8000/api/products/search?query=

2. Open the frontend folder which is a simple create-react-app that allows the users to create and search prodcuts.

In a new terminal window

First: Use command: "npm install" to install all node modules / dependencies. 
Then to run this, use the command: npm start

Once this successfully compiles/builds, you will then be directed to http://localhost:3000 where you can add products and search for the products created.
