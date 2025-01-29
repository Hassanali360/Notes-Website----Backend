const express = require('express')
const app = express();

require('dotenv').config()
const connectDatabase = require('./database/db')

connectDatabase();

// middleware -> exxpress.json()

app.use(express.json());












const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server ${port}`);
})