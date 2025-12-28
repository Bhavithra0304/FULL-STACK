const express=require("express");
const app=express();
const dotenv=require("dotenv");
const path=require("path")
dotenv.config({path:path.join(__dirname,"config","config.env")})

const connectDatabase=require("./config/connectDatabase")
const product=require("./routes/product");
const order=require("./routes/order")

connectDatabase();
app.use(express.json())
app.use("/api/v1",product);
app.use("/api/v1",order);

app.listen(process.env.PORT,()=>{
    console.log(`Server ${process.env.PORT} is running in ${process.env.NODE_ENV}`)
}) 