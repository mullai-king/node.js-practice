import express from "express"

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

// app.use() //middleware
