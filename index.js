import express from "express";
import fs from "fs";
import {format} from "date-fns"


const app = express();
const PORT = 4000;


// test console logging
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
}) 
// get timestamp of api call and store to timestamp folder 
app.get("/get-timestamp",(req,res)=>{
 let today = format(convertToIST(new Date()),'dd-MM-yyyy-hh-mm-ss');
 console.log(today);
 const filePath = `Timestamp/${today}.txt`;
 fs.writeFileSync(filePath, `${today}`, 'utf8');
 let data =fs.readFileSync(filePath, 'utf8');
 res.status(200).send({data});

});

// get the files from timestamp folder
app.get("/get-All-Files",(req,res)=>{
  let files = fs.readdirSync("Timestamp");
  res.status(200).send({files});
})

// app.use() //middleware
