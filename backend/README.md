## Backend for KYPer!

Welcome to the backend :D

Here are the steps for getting the back end running:
1. Clone the repo to your machine
2. Add the .env file inside the backend folder.
3. 'cd backend' to make sure you are in the directory
4. Run 'npm install' to install dependencies 
5. Run 'npm start' to start the server.

## .env file
In order to connect to your local mySQL database, you must have a .env file. This allows for environment-specific configurations without hard coding them in. 
Here is the template for the .env file:
```
NODE_ENV=development
PORT=3000

DB_HOST = 127.0.0.1
DB_USER = your_db_username
DB_PASS = your_db_password
DB_NAME = kyper
```
You only need to change DB_USER, DB_PASS. (And DB_NAME, if you gave your db a different name)

### Backend Dependencies
1. Express JS (Ver 2.18.1)
    1. Body parser 1.20.2
2. Node JS (ver 18.17.1)
3. Dotenv (ver 16.4.5)
4. Sequelize (ver 9.6.7) (for creating models from mySQL table data)
    1. mySQL 12 (driver for sequelize)
5. Passport JS -- ver 9.6.7 (authentication for username and passwords against db) 
    1. express-session 1.18.0
    2. Passport local 1.0.0
6. Bcrypt 5.1.1
