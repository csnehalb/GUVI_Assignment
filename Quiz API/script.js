var scorelist=[]
sessionStorage.setItem("scorelist",JSON.stringify(scorelist))
sessionStorage.setItem('count',0)
sessionStorage.setItem('score',0)
sessionStorage.setItem('width',0)

async function getdata()
 {

    try{
     
      var data= await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
      var result=await data.json();
      //console.log(result)
      sessionStorage.setItem('questions',JSON.stringify(result))
      generatehtml()
      
      var options=result.results[0].incorrect_answers;
      options.push(result.results[0].correct_answer)
      options=options.sort()
      console.log(options)

      sessionStorage.setItem("options",options)
        

    }
     catch(err){
       console.log(err)
    }
 } 

 getdata()

 function generatehtml()
 {

    var div= document.createElement("div")
    div.id="div1"
    div.style.textAlign="Center"

    var span=document.createElement("h1")
    span.innerHTML=" &nbsp;&nbsp;Quick Quiz"
    span.style.color="skyblue"
    span.style.width="200%"
    
    div.appendChild(span)
    document.body.appendChild(div)

/*    var br2=document.createElement("br")
    div.appendChild(br2)
    document.body.appendChild(div)*/
    


    var playbtn=document.createElement("button")
    playbtn.innerHTML="Play"
    playbtn.setAttribute('class','btn btn-info')
    playbtn.style.width="200%"

    playbtn.addEventListener('click',function()
    {
        location.href = "questions.html"
    })

    div.appendChild(playbtn)
    document.body.appendChild(div)

    var br1=document.createElement("br")
    div.appendChild(br1)
    document.body.appendChild(div)
    var br3=document.createElement("br")
    div.appendChild(br3)
    document.body.appendChild(div)


    var scorebtn=document.createElement("button")
    scorebtn.innerHTML="High Scores"
    scorebtn.setAttribute('class','btn btn-info')
    scorebtn.style.width="200%"
    
    scorebtn.addEventListener('click',function(){
         
      location.href = "score.html"

    })

    div.appendChild(scorebtn)
    document.body.appendChild(div)

 }