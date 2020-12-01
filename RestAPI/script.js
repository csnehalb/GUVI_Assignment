
/*function fetchreq(url)
{
  return  new Promise(function(resolve,reject){

    var req= new XMLHttpRequest()
    req.open("GET",url)
    req.send()
    req.onload=function()
    {
     if(this.status==200 && this.readyState==4)
          resolve(this.response)
          else
          reject(false)
        var data=JSON.parse(this.response)
        if(data!=null)
          resolve(data)
          else
          reject(data)
    }
    


});
}


fetchreq("https://restcountries.eu/rest/v2/all")
.then (function(data){ 
     console.log(data.json())   
})
.catch(function(err){
    console.log(err)
})

*/



function fetchre(url)
{
   return new Promise(function(resolve,reject){
     
    var req= new XMLHttpRequest()
    req.open("GET",url)
    req.send()
    req.onload=function()
     {
         var data=JSON.parse(this.response)
         console.log(data)
         resolve(data)
     }

   }) ;


}




var mypromise=fetchre("https://restcountries.eu/rest/v2/all")
mypromise.then(function(data){
  //  console.log(data)
for(var i=0;i<5;i++)
{
    console.log("Name="+data[i].name)
    console.log("Region"+ data[i].region)
    console.log("LatLang"+data[i].latlng)
    console.log("Country Code"+data[i].currencies[0].code)
    console.log("Currency Name"+data[i].currencies[0].name)
    console.log("Currency Symbol"+data[i].currencies[0].symbol)
    console.log("flagurl"+data[i].flag)
    console.log("Capital="+data[i].capital)

}
    var row1=document.createElement("div")
    row1.classList.add('row')
    row1.id="row1"
     
    var row2=document.createElement("div")
    row2.classList.add('row')
    row2.id="row2"
    

    var col1=document.createElement("div")
    col1.classList.add("col-sm-4")
    //row1.appendChild(col1)

    var col2=document.createElement("div")
    col2.classList.add("col-sm-4")
    //row1.appendChild(col2)

    var col3=document.createElement("div")
    col3.classList.add("col-sm-4")
    //row1.appendChild(col3)

    
    var col4=document.createElement("div")
    col4.classList.add("col-sm-4")
    //row1.appendChild(col1)

    var col5=document.createElement("div")
    col5.classList.add("col-sm-4")
    //row1.appendChild(col2)

    var col6=document.createElement("div")
    col6.classList.add("col-sm-4")
    //row1.appendChild(col3)

    

  


//Card 1

    var card1=document.createElement("div")
    card1.classList.add("card")
    card1.id="card1"
    card1.style.width="20rem"
    
     
    var img1=document.createElement("img")
    img1.id="img1"
    img1.classList.add("card-img-top")
    img1.src=data[0].flag
    img1.alt="Image1"
   // img1.style.height=150
     img1.style.width="20rem"



    card1.appendChild(img1)

    var cardbody1=document.createElement("div")
    cardbody1.classList.add("card-body")
    cardbody1.id="cardbody1"
    
    var pcard1=document.createElement("p")
    pcard1.classList.add("card-text")
    pcard1.id="pcard1"
    pcard1.innerHTML="<b>Name: </b>"+data[0].name + "<br/>" +"<b>Capital: </b>"+ data[0].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[0].region + "<br/>"+ "<b>LatLang: </b>"+ data[0].latlng +"<br/>"+"<b>Currency Code: </b>"+data[0].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[0].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[0].currencies[0].symbol
    cardbody1.appendChild(pcard1) 
       
    card1.appendChild(cardbody1)

    col1.appendChild(card1)
    row1.appendChild(col1)
    document.body.append(row1) 

//Card2

var card2=document.createElement("div")
    card2.classList.add("card")
    card2.id="card2"
    card2.style.width="20rem"
    
     
    var img2=document.createElement("img")
    img2.id="img2"
    img2.classList.add("card-img-top")
    img2.src=data[1].flag
    img2.alt="Image1"
   // img1.style.height=150
     img2.style.width="20rem"



    card2.appendChild(img2)

    var cardbody2=document.createElement("div")
    cardbody2.classList.add("card-body")
    cardbody2.id="cardbody2"
    
    var pcard2=document.createElement("p")
    pcard2.classList.add("card-text")
    pcard2.id="pcard2"
    pcard2.innerHTML="<b>Name: </b>"+data[1].name + "<br/>" +"<b>Capital: </b>"+ data[1].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[1].region + "<br/>"+ "<b>LatLang: </b>"+ data[1].latlng +"<br/>"+"<b>Currency Code: </b>"+data[1].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[1].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[1].currencies[0].symbol
    cardbody2.appendChild(pcard2) 
       
    card2.appendChild(cardbody2)






    col2.appendChild(card2)
    row1.appendChild(col2)  
    document.body.appendChild(row1)


//Card3

var card3=document.createElement("div")
    card3.classList.add("card")
    card3.id="card3"
    card3.style.width="20rem"
    
     
    var img3=document.createElement("img")
    img3.id="img3"
    img3.classList.add("card-img-top")
    img3.src=data[2].flag
    img3.alt="Image3"
   // img1.style.height=150
   img3.style.width="20rem"



    card3.appendChild(img3)

    var cardbody3=document.createElement("div")
    cardbody3.classList.add("card-body")
    cardbody3.id="cardbody3"
    
    var pcard3=document.createElement("p")
    pcard3.classList.add("card-text")
    pcard3.id="pcard3"
    pcard3.innerHTML="<b>Name: </b>"+data[2].name + "<br/>" +"<b>Capital: </b>"+ data[2].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[2].region + "<br/>"+ "<b>LatLang: </b>"+ data[2].latlng +"<br/>"+"<b>Currency Code: </b>"+data[2].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[2].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[2].currencies[0].symbol
    cardbody3.appendChild(pcard3) 
       
    card3.appendChild(cardbody3)






    col3.appendChild(card3)
    row1.appendChild(col3)  
    document.body.appendChild(row1)



    var br1=document.createElement("br")
    document.body.appendChild(br1)
//Card4

var card4=document.createElement("div")
    card4.classList.add("card")
    card4.id="card4"
    card4.style.width="20rem"
    
     
    var img4=document.createElement("img")
    img4.id="img4"
    img4.classList.add("card-img-top")
    img4.src=data[3].flag
    img4.alt="Image4"
   // img1.style.height=150
     img4.style.width="20rem"



    card4.appendChild(img4)

    var cardbody4=document.createElement("div")
    cardbody4.classList.add("card-body")
    cardbody4.id="cardbody4"
    
    var pcard4=document.createElement("p")
    pcard4.classList.add("card-text")
    pcard4.id="pcard4"
    pcard4.innerHTML="<b>Name: </b>"+data[3].name + "<br/>" +"<b>Capital: </b>"+ data[3].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[3].region + "<br/>"+ "<b>LatLang: </b>"+ data[3].latlng +"<br/>"+"<b>Currency Code: </b>"+data[3].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[3].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[3].currencies[0].symbol
    cardbody4.appendChild(pcard4) 
       
    card4.appendChild(cardbody4)






    col4.appendChild(card4)
    row2.appendChild(col4)  
    document.body.appendChild(row2)

//Card5
var card5=document.createElement("div")
    card5.classList.add("card")
    card5.id="card5"
    card5.style.width="20rem"
    
     
    var img5=document.createElement("img")
    img5.id="img5"
    img5.classList.add("card-img-top")
    img5.src=data[4].flag
    img5.alt="Image5"
    // img5.style.height= "7rem"
      img5.style.width="20rem"



    card5.appendChild(img5)

    var cardbody5=document.createElement("div")
    cardbody5.classList.add("card-body")
    cardbody5.id="cardbody5"
    
    var pcard5=document.createElement("p")
    pcard5.classList.add("card-text")
    pcard5.id="pcard5"
    pcard5.innerHTML="<b>Name: </b>"+data[4].name + "<br/>" +"<b>Capital: </b>"+ data[4].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[4].region + "<br/>"+ "<b>LatLang: </b>"+ data[4].latlng +"<br/>"+"<b>Currency Code: </b>"+data[4].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[4].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[4].currencies[0].symbol
    cardbody5.appendChild(pcard5) 
       
    card5.appendChild(cardbody5)
       
    col5.appendChild(card5)
    row2.appendChild(col5)  
    document.body.appendChild(row2)


//Card6
var card6=document.createElement("div")
    card6.classList.add("card")
    card6.id="card6"
    card6.style.width="20rem"
    
     
    var img6=document.createElement("img")
    img6.id="img6"
    img6.classList.add("card-img-top")
    img6.src=data[5].flag
    img6.alt="Image6"
   // img1.style.height="7rem"
      img6.style.width="20rem"



    card6.appendChild(img6)

    var cardbody6=document.createElement("div")
    cardbody6.classList.add("card-body")
    cardbody6.id="cardbody6"
    
    var pcard6=document.createElement("p")
    pcard6.classList.add("card-text")
    pcard6.id="pcard6"
    pcard6.innerHTML="<b>Name: </b>"+data[5].name + "<br/>" +"<b>Capital: </b>"+ data[5].capital + "<br/>"+ "<b>Region: </b>"+ 
    data[5].region + "<br/>"+ "<b>LatLang: </b>"+ data[5].latlng +"<br/>"+"<b>Currency Code: </b>"+data[5].currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+data[5].currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ data[5].currencies[0].symbol
    cardbody6.appendChild(pcard6) 
       
    card6.appendChild(cardbody6)






    col6.appendChild(card6)
    row2.appendChild(col6)  
    document.body.appendChild(row2)



















})
mypromise.catch(function(err){
    console.log(err)
})

