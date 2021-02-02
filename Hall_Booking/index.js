const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
rooms=[]
bookings=[]
customers=[]
roomid=1
bookingid=1

app.post("/room",(req,res)=>{
    console.log(req.body)
    
    if(req.body.no_of_seats==undefined || req.body.aminities==undefined||req.body.price== undefined)
    {
     res.status(400).json({
         message:"please pass the no of seats,aminities and price"
     })
    }
    else{
        req.body.id=roomid++
        rooms.push(req.body)
        res.json({message:"Room Created"})
}
})

app.get("/rooms",(req,res)=>{
    res.json(rooms)
})


app.post("/booking",(req,res) =>{
    console.log(req.body)
    
    if(req.body.roomid==undefined||req.body.customername==undefined || req.body.date==undefined||req.body.starttime== undefined||req.body.endtime==undefined)
    {
     res.status(400).json({
         message:"please pass room id customername,date,starttime,endtime,roomid"
     })
    }
    else{
        req.body.id=bookingid++
        bookings.push(req.body)
        customer={}
        customer.customername=req.body.customername
        customer.roomid=req.body.roomid
        customer.date=req.body.date
        customer.starttime=req.body.starttime
        customer.endtime=req.body.endtime
        customers.push(customer)
        res.json({message:"Booking Done"})
}

})

app.get("/bookings",(req,res)=>{
    res.json(bookings)
})

app.get("/customers",(req,res)=>{
    res.json(customers)
})

app.listen(3000)