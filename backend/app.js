const express=require('express')
const connectDB=require ('./config/connection')
const app=express()

// conecter database
connectDB();

// midle ware
app.use(express.json());

app.use("/api/contacts" , require("./routes/contact"));

const port= 5000
app.listen(port,()=>console.log(`sever working ${port}`));