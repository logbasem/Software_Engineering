// Ticket #10 - Setting up backend
// Kaitlyn Peters

//node js and express js to connect to mySQL database
import express from "express"
import mysql from "mysql"

const app = express()

//connect to db
//todo: make this flexible with everyone's local db (create .env file/db config file?)
// these are the credentials of my local SQL bench but i'll make sure to update this soon.
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"kyper"
})

app.get("/", (req, res) => {
    res.json("this is the backend")
})
app.listen(3000, ()=>{
    console.log("Connected to backend!")
})