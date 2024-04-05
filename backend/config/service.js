//Ticket #15 - User Data Table
//KP

// mock http requests to test the controllers

const http = require('http');
const app = require('../index');

//mock user data
const registerUser = {
    username: "Kaitlyn",
    enteredPassword: "password123",
    first_name: "K",
    last_name: "P",
    email: "test@test.com",
};

const loginUser = {
    username: "Kaitlyn",
    enteredPassword: "password123",
}

//create a mock request
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/users/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(options, (res) => {
    let data = '';
    const chunks = [];

    res.on('data', (chunk) => {
        chunks.push(chunk)
    });

    res.on('end', () => {
        const data = Buffer.concat(chunks);
        console.log('Response:', data.toString());
    });
});
req.on('error', (error) => {
    console.error('Error', error);
});

// async function hashPassword(password) {
//     try {
//         const saltRounds = 10;
//         // Generate a salt and hash the password
//         const hashedPassword = await bcrypt.hash(password, saltRounds);
//         console.log("Hashing successful");
//         return hashedPassword;
//     } catch (error) {
//         console.log(error.message);
//         throw error; // Re-throw the error to handle it outside the function
//     }
//}

// REQ body------------
//for register
// const requestBodyRegister = JSON.stringify({
//     username: registerUser.username,
//     enteredPassword: registerUser.enteredPassword,
//     first_name: registerUser.first_name,
//     last_name: registerUser.last_name,
//     email: registerUser.email,
// });
//for log in
const requestBodyLogin = JSON.stringify({
    username: loginUser.username,
    userpassword: loginUser.userpassword,
});

req.write(requestBodyLogin);
req.end();
