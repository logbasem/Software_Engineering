// Ticket #10 - Setting up backend
// Kaitlyn Peters

//node js and express js to connect to mySQL database
import express from "express"

const app = express()

app.listen(3000, ()=>{
    console.log("Connected to backend!")
})