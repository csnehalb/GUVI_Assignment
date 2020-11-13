//Solving problems using array functions on rest countries data.
//Loading the data from rest API
//Add error handling to the xml http request code

var req= new XMLHttpRequest()
req.open("GET","https://restcountries.eu/rest/v2/all")
req.send()
req.onload=function()
{ 
  try{
   
    var data=JSON.parse(this.response)
    console.log(data)
    //Get all the countries from Asia continent using Filter function
    var asiadata=data.filter(item=>{return item.region==="Asia"})
    console.log(asiadata)

   //Print the total population of countries in Asia continent using reduce and filter function

      var total1=asiadata.reduce((curtotal,item)=>{return curtotal+item.population},0)
       console.log(total1)

   //Get all the countries with population of less than 2 lacs using Filter function
      var haslessthan2lacpopulation=data.filter(item=>{return item.population<200000})
      console.log(haslessthan2lacpopulation)

   //Print the following details name, capital, flag using forEach function
    data.forEach(item=>{
     console.log(item.name+" "+item.capital+" "+item.flag)
      })
   //Print the total population of countries using reduce function
      var total2=data.reduce((curtotal,item)=>{return curtotal+item.population},0)
      console.log(total2)

    //Print the country which use US Dollars as currency. 
     var UScurrencycountries=data.filter(item=>{return item.currencies[0].symbol==="$"})
     console.log(UScurrencycountries)

 



  }catch(err)
  {console.log(err)}
}
req.onerror=function(){
  console.log("Network Error")
  alert("Network Error")
}

