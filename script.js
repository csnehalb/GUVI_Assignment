var req= new XMLHttpRequest()
req.open("GET","https://restcountries.eu/rest/v2/all")
req.send()
req.onload=function()
{
    var data=JSON.parse(this.response)
    console.log(data)
}
