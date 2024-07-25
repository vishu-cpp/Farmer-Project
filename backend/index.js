import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json()); //middleware

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoURI;

//connect to mongoDB
try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongoDB")

}
catch(error)
{
  console.log("error",error)

}
//defining route

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})