const app=require("express")();

app.get("/",(req,res)=>{
    res.send("basic API endpoint");
})

app.listen(4040,()=>{
    console.log("server is running at 4040");
})