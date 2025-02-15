# MyRide

## Project Setup

### Step 1: Create Project Structure
1. Create two folders:
   ```sh
   mkdir frontend backend
   ```

### Step 2: Set Up Backend
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Initialize a Node.js project:
   ```sh
   npm init -y
   ```
3. Install Express:
   ```sh
   npm install express
   ```

### Step 3: Create Essential Files
1. Create a file named `app.js` and import Express:
   ```js
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
       res.send('Welcome to MyRide!');
   });

   module.exports = app;
   ```

2. Create a file named `server.js` and acquire the HTTP module:
   ```js
   const http = require('http');
   const app = require('./app');
   const server = http.createServer(app);

   const PORT = process.env.PORT || 5000;
   server.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });
   ```

### Step 4: Install Environment and CORS
1. Install dotenv and cors:
   ```sh
   npm install dotenv cors
   ```
2. Create a `.env` file inside the `backend` folder and specify the port:
   ```env
   PORT=5000
   ```

### Step 5: Start the Server
1. Run the server using Nodemon:
   ```sh
   npx nodemon server.js
   ```

## Additional Information
- `frontend` folder can be used for React or any frontend framework.
- Ensure `nodemon` is installed globally or install it locally using:
  ```sh
  npm install --save-dev nodemon
  ```
- To stop the server, use `Ctrl + C` in the terminal.

## Step 6:
- install the moongoose package.
- create a db folder inside the backend folder and a db.js file inside it.

## Step 7:
- creating the user models so creating a models name folder.

## Step 8:
- Install bcrypt for hashing passwords.
- Install jsonwebtoken to get the JWT token for authentication.

## Step 9:
- Create the controllers and routes.

### Happy Coding! 🚀


