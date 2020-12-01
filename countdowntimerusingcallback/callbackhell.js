var countdown=(time)=>{

    setTimeout(()=>{
          document.getElementById('countdown').innerHTML=time--
          
          setTimeout(()=>{


            document.getElementById('countdown').innerHTML=time--
           
           setTimeout(() => {
               
            document.getElementById('countdown').innerHTML=time--
            setTimeout(() => {
                document.getElementById('countdown').innerHTML=time--
              
                setTimeout(() => {
                    document.getElementById('countdown').innerHTML=time--
                    setTimeout(() => {
                        document.getElementById('countdown').innerHTML=time--
                         setTimeout(() => {
                            document.getElementById('countdown').innerHTML=time--
                             setTimeout(() => {
                                document.getElementById('countdown').innerHTML=time--
                                setTimeout(() => {
                                    document.getElementById('countdown').innerHTML=time--
                                    setTimeout(() => {
                                        document.getElementById('countdown').innerHTML=time--
                                        setTimeout(() => {
                                            document.getElementById('countdown').innerHTML=""
           
                                            document.getElementById('msg').innerHTML="Happy BirthDay"
                                              
                                        }, 1000);
                                    }, 1000); 
                                }, 1000);
                             }, 1000);
                         }, 1000); 
                    }, 1000);  
                }, 1000);

            }, 1000);

           }, 1000);     

          },1000)

    },1000)

}


countdown(10);