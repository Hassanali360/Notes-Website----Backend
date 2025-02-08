const express = require('express')
const app = express();
const noteroutes = require("./Routes/note-routes.js")
require('dotenv').config()
const connectDatabase = require('./database/db')
const USerroutes = require("./Routes/user-routes.js")




connectDatabase();

// middleware -> exxpress.json()

app.use(express.json());

app.use("/user",USerroutes);
app.use("/notes", noteroutes);










const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server ${port}`);
})