const express=require("express");
const app=express();
const dotenv=require("dotenv");
const path=require("path")
const cors=require("cors")
dotenv.config({path:path.join(__dirname,"config","config.env")})
app.use("/images", express.static(path.join(__dirname, "images")));
const connectDatabase=require("./config/connectDatabase")
const product=require("./routes/product");
const order=require("./routes/order")

connectDatabase();
app.use(cors());
app.use(express.json())
app.use("/api/v1",product);
app.use("/api/v1",order);

app.listen(process.env.PORT,()=>{
    console.log(`Server ${process.env.PORT} is running in ${process.env.NODE_ENV}`)
}) 