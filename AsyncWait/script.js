
var cg=document.createElement("div")
cg.classList.add("card-deck")
cg.classList.add("style1")

 async function getdata()
 {

    try{
      var data= await fetch("https://restcountries.eu/rest/v2/all")
      var result=await data.json();
      //console.log(result[0].latlng[0])
      //console.log(result[0].latlng[1])
     //console.log(resullt)
      generatehtml(result)
    }
     catch(err){
       console.log(err)
    }
 } 

 async function getweather(lat,lang)
 {
     try{

        url="http://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon="+ lang +"&appid=0ddddb85c7330b4ad6c84fee68647bc5"
    var weatherdata=await fetch(url)
    var weatherresult=await weatherdata.json();
    console.log(weatherresult)
    console.log(weatherresult.main.humidity)
    console.log(weatherresult.main.temp)
    console.log(weatherresult.weather[0].description)
    console.log(weatherresult.weather[0].icon)
    weath=JSON.stringify(weatherresult)
     console.log(weath)
   
     sessionStorage.setItem('weather', weath);
     
     

     }catch(err)
     {
         console.log(err)
     }
 }
 getdata()

 function generatehtml(data)
 {


/* var cg=document.createElement("div")
cg.classList.add("card-deck")
cg.classList.add("style1") */
var cg;
data.forEach((element,index) => {
    

 console.log(index)
 

 
    if(index%3==0)
    {
        console.log("entered")
     cg=document.createElement("div")
    cg.classList.add("card-deck")
    cg.classList.add("style1")  
    } 

//Card 1

    var card1=document.createElement("div")
    card1.classList.add("card")
    card1.classList.add("text-center")
    card1.id="card1"
    //card1.style.width="12rem"
    card1.style.border="1px solid black"
    
    var cardheader1=document.createElement("div")
    cardheader1.classList.add("card-header")
    cardheader1.style.backgroundColor="black"
    cardheader1.style.color="white"
    cardheader1.innerHTML="<b>"+element.name+"</b>"
    card1.appendChild(cardheader1)      

    

    var cardbody1=document.createElement("div")
    cardbody1.classList.add("card-body")
    cardbody1.id="cardbody1"
    cardbody1.style.backgroundImage=" "

    var div1=document.createElement("div")
    div1.classList.add("text-center") 
    var img1=document.createElement("img")
    img1.id="img1"
    img1.classList.add("card-img-top")
   // img1.classList.add("img-fluid")
    img1.src=element.flag
    img1.alt="Image1"
    img1.style.height="14rem"
    img1.style.width="70%"
    img1.style.textAlign="center" 

    div1.appendChild(img1)
    cardbody1.appendChild(div1)

    var pcard1=document.createElement("p")
    pcard1.classList.add("card-text")
    pcard1.id="pcard1"
    pcard1.innerHTML="<b>Name: </b>"+element.name + "<br/>" +"<b>Capital: </b>"+ element.capital + "<br/>"+ "<b>Region: </b>"+ 
    element.region + "<br/>"+ "<b>LatLang: </b>"+ element.latlng +"<br/>"+"<b>Currency Code: </b>"+element.currencies[0].code+
    "<br/>"+"<b>Currency Name: </b>"+element.currencies[0].name +"<br/>"+ "<b>Currency Symbol:  </b>"+ element.currencies[0].symbol
    cardbody1.appendChild(pcard1) 
       
    card1.appendChild(cardbody1)

    var btn=document.createElement("button")
    btn.innerHTML="Click for Weather"
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
    btn.addEventListener('click',function(){
        getweather(element.latlng[0],element.latlng[1])
        createmodal(element.name)
    })
    cardbody1.appendChild(btn)
    card1.appendChild(cardbody1)
    cg.appendChild(card1)
    //row1.appendChild(col1
    document.body.append(cg)
   
   

});


 }


 function createmodal(countryname)
 {
     
    
    var weather = JSON.parse(sessionStorage.getItem('weather')); 
    var weatherresult=weather
    console.log("Welcome to modal function")
    console.log(weatherresult)
    console.log(weatherresult.main.humidity)
    console.log(weatherresult.main.temp)
    console.log(weatherresult.weather[0].description)
    console.log(weatherresult.weather[0].icon)
    alert( "Temperature:  "+ weather.main.temp+" "+"\nHumidity=  "+ weather.main.humidity+"\nDescription "+ weather.weather[0].description)

   /* var modal=document.createElement("div")
    modal.classList.add("modal")
    modal.tabIndex=-1
    modal.setAttribute("role","dialog")
    modal.style.display="block"
    modal.id="modal1"
    modal.backgroundColor="blue"
   
    var modaldailog=document.createElement("div")
    modaldailog.classList.add("modal-dialog")
    modaldailog.setAttribute("role","document")

    var modalcontent=document.createElement("div")
    modalcontent.classList.add("modal-content")
    
    var modalheader=document.createElement("div")
    modalheader.classList.add("modal-header")
    
     
    var h5=document.createElement("h5")
    h5.classList.add("modal-title")
    h5.innerHTML=countryname

    modalheader.appendChild(h5)
    modalcontent.appendChild(modalheader)
    modaldailog.appendChild(modalcontent)
    modal.appendChild(modaldailog)
    document.body.append(modal)

    var modalbody=document.createElement("div")
    modalbody.classList.add("modal-body")

    var p=document.createElement("p")
      p.innerHTML= "Temperature: "+ weather.main.temp+"<br/>"+"Humidity= "+ weather.main.humidity+"<br/>"+weather.weather[0].description

    modalbody.appendChild(p)
    modalcontent.appendChild(modalbody)
    modaldailog.appendChild(modalcontent)
    modal.appendChild(modaldailog)
    document.body.append(modal)
    
    var modalfooter=document.createElement("div")
    modalfooter.classList.add("modal-footer")
    
    var btn2=document.createElement("button")
    btn2.innerHTML="Close"
    btn2.classList.add("btn")
    
    btn2.classList.add("btn-secondry")
    btn2.setAttribute("data-dismiss","modal")
    btn2.addEventListener('click',function(){
        $("#modal1").modal("hide");
    })
   
    modalfooter.appendChild(btn2)
    modalcontent.appendChild(modalfooter)
    modaldailog.appendChild(modalcontent)
    modal.appendChild(modaldailog)
    document.body.append(modal)  
*/
    


 }
