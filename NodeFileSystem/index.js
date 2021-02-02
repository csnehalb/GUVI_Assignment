const express= require("express")
const fs=require("fs")
const app = express();
const path=require("path")
app.get("/createfile",(req,res)=>{

    const date=new Date()
    const d= date.getDate() +"-"+date.getMonth()+"-"+date.getFullYear()+" "+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()
        const filename= d + ".txt"

    const ts=Date.now()



// timestamp in seconds
const data= Math.floor(ts/1000).toString();
    fs.writeFile(filename,data,function(err){
        if(err) throw Error

    })
    res.json({message:"File Created"+date.toString()})

});


app.get("/readfolder",(req,res)=>{

    fs.readdir("D:/Zen_Class",(err,data)=>{
        if (err) throw Error
        else
        {
            filelist=[]
            data.forEach(element=>{
                
                
                   let ext=path.extname(element)
                   console.log(ext)
                   console.log(element)
                   if(ext==".txt")
                   filelist.push(element)
                
            })
            console.log(filelist)
            res.json(filelist)
        }
    })
})
app.listen(3000)