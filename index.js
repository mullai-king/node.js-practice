import express from "express";
import fs from "fs";
import {format} from "date-fns"


const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
  res.status(200).json({"message":"Success"});
})

//get-data
app.get('/get-data',(req,res)=>{
  res.status(200).json({message:"Success",data:{name:"Mullaiventhan",role:"admin"}});
})
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
}) 

app.get("/get-timestamp",(req,res)=>{
 let today = format(new Date(),'dd-MM-yyyy-hh-mm-ss');
 console.log(today);
 const filePath = `Timestamp/${today}.txt`;
 fs.writeFileSync(filePath, `${today}`, 'utf8');
 let data =fs.readFileSync(filePath, 'utf8');
 res.status(200).send({data});

});

app.get("/get-All-Files",(req,res)=>{
  let files = fs.readdirSync("Timestamp");
  res.status(200).send({files});
})

// app.use() //middleware
