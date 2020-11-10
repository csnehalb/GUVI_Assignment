var req= new XMLHttpRequest()
req.open("GET","http://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=0ddddb85c7330b4ad6c84fee68647bc5")
req.send()
req.onload=function()
{
    var data=JSON.parse(this.response)
    console.log(data)
}
