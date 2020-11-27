var form=document.createElement('form')
form.method='post'


var div1=document.createElement("div")
div1.id="div1"
div1.style.textAlign="center"

var text1=document.createElement('input')
text1.type='text'
text1.id="text1"
text1.style.lineHeight="3em"
text1.size=62
div1.appendChild(text1)




var cbtn=document.createElement('input')
cbtn.type = 'button'
cbtn.value='C'
cbtn.onclick=clear
div1.appendChild(cbtn)
function clear()
{
document.getElementById("text1").value = ""
}


form.appendChild(div1)
document.body.append(form)

var lb1=document.createElement('br')
form.appendChild(lb1)


var div2=document.createElement("div")
div2.id="div2"
div2.style.textAlign="center"

var cbtn1=document.createElement('input')
cbtn1.type = 'button'
cbtn1.value='1'
div2.appendChild(cbtn1)
//form.appendChild(cbtn1)
cbtn1.addEventListener('click',appendtext1)

function appendtext1()
{document.getElementById("text1").value+='1' }



var cbtn2=document.createElement('input')
cbtn2.type = 'button'
cbtn2.value='2'
div2.appendChild(cbtn2)
cbtn2.addEventListener('click',appendtext2)
function appendtext2()
{document.getElementById("text1").value+="2" }



var cbtn3=document.createElement('input')
cbtn3.type = 'button'
cbtn3.value='3'
div2.appendChild(cbtn3)
cbtn3.addEventListener('click',appendtext3)

function appendtext3()
{document.getElementById("text1").value+="3" }


var cbtndiv=document.createElement('input')
cbtndiv.type = 'button'
cbtndiv.value='/'
div2.appendChild(cbtndiv)
cbtndiv.addEventListener('click',appenddiv)

function appenddiv()
{document.getElementById("text1").value+='/' }


form.appendChild(div2)
document.body.append(form)

var lb2=document.createElement('br')
form.appendChild(lb2)


var div3=document.createElement("div")
div3.id="div3"
div3.style.textAlign="center"

var cbtn4=document.createElement('input')
cbtn4.type = 'button'
cbtn4.value='4'
div3.appendChild(cbtn4)
cbtn4.addEventListener('click',appendtext4)

function appendtext4()
{document.getElementById("text1").value+="4"}




var cbtn5=document.createElement('input')
cbtn5.type = 'button'
cbtn5.value='5'
div3.appendChild(cbtn5)
cbtn5.addEventListener('click',appendtext5)

function appendtext5()
{document.getElementById("text1").value+="5" }




var cbtn6=document.createElement('input')
cbtn6.type = 'button'
cbtn6.value='6'
div3.appendChild(cbtn6)
cbtn6.addEventListener('click',appendtext6)

function appendtext6()
{document.getElementById("text1").value+="6" }


var cbtnminus=document.createElement('input')
cbtnminus.type = 'button'
cbtnminus.value='-'
div3.appendChild(cbtnminus)
cbtnminus.addEventListener('click',appendminus)


function appendminus()
{document.getElementById("text1").value+='-' }

form.appendChild(div3)
document.body.append(form)

var lb3=document.createElement('br')
form.appendChild(lb3)


var div4=document.createElement("div")
div4.id="div4"
div4.style.textAlign="center"


var cbtn7=document.createElement('input')
cbtn7.type = 'button'
cbtn7.value='7'
div4.appendChild(cbtn7)
cbtn7.addEventListener('click',appendtext7)

function appendtext7()
{document.getElementById("text1").value+="7" }




var cbtn8=document.createElement('input')
cbtn8.type = 'button'
cbtn8.value='8'
div4.appendChild(cbtn8)
cbtn8.addEventListener('click',appendtext8)


function appendtext8()
{document.getElementById("text1").value+="8" }




var cbtn9=document.createElement('input')
cbtn9.type = 'button'
cbtn9.value='9'
div4.appendChild(cbtn9)
cbtn9.addEventListener('click',appendtext9)


function appendtext9()
{document.getElementById("text1").value+="9" }




var cbtnplus=document.createElement('input')
cbtnplus.type = 'button'
cbtnplus.value='+'
div4.appendChild(cbtnplus)
cbtnplus.addEventListener('click',appendplus)
function appendplus()
{document.getElementById("text1").value+='+' }


form.appendChild(div4)
document.body.append(form)

var lb4=document.createElement('br')
form.appendChild(lb4)



var div5=document.createElement("div")
div5.id="div5"
div5.style.textAlign="center"



var cbtnd=document.createElement('input')
cbtnd.type = 'button'
cbtnd.value='.'
div5.appendChild(cbtnd)
cbtnd.addEventListener('click',appendtextd)

function appendtextd()
{document.getElementById("text1").value+="." }


var cbtn0=document.createElement('input')
cbtn0.type = 'button'
cbtn0.value='0'
div5.appendChild(cbtn0)
cbtn0.addEventListener('click',appendtext0)

function appendtext0()
{document.getElementById("text1").value+="0" }



var cbtnequals=document.createElement('input')
cbtnequals.type = 'button'
cbtnequals.value='='
cbtnequals.addEventListener('click', calculate)

div5.appendChild(cbtnequals)







var cbtnmult=document.createElement('input')
cbtnmult.type = 'button'
cbtnmult.value='*'
div5.appendChild(cbtnmult)
cbtnmult.addEventListener('click',appendmult)

function appendmult()
{document.getElementById("text1").value+='*' }




form.appendChild(div5)

document.body.append(form)

var lb5=document.createElement('br')
form.appendChild(lb5)

var div6=document.createElement("div")
div6.id="div6"
div6.style.textAlign="center"


var cbtnm1=document.createElement('input')
cbtnm1.type = 'button'
cbtnm1.value='M+'
cbtnm1.addEventListener('click',memplus)
div6.appendChild(cbtnm1)

function memplus()
{
    var temp=parseInt(sessionStorage.getItem('mvalue'))+parseInt(document.getElementById('text1').value )    
    //var temp=evaluate(expr1)
  sessionStorage.setItem("mvalue",temp)

}


var cbtnm2=document.createElement('input')
cbtnm2.type = 'button'
cbtnm2.value='M-'

div6.appendChild(cbtnm2)

function memminus()
{
    var temp1=parseInt(sessionStorage.getItem('mvalue'))-parseInt(document.getElementById('text1').value )    
    sessionStorage.setItem("mvalue",temp1)

}



var cbtnms=document.createElement('input')
cbtnms.type = 'button'
cbtnms.value='MS'
cbtnms.addEventListener('click',memorystorage)
div6.appendChild(cbtnms)

function memorystorage()
{
    sessionStorage.setItem("mvalue",document.getElementById('text1').value);
}


var cbtnmr=document.createElement('input')
cbtnmr.type = 'button'
cbtnmr.value='MR'
cbtnmr.addEventListener('click',memoryread)
div6.appendChild(cbtnmr)

function memoryread()
{
document.getElementById('text1').value=sessionStorage.getItem('mvalue')

}



form.appendChild(div6)

document.body.append(form)

var lb5=document.createElement('br')
form.appendChild(lb5)




function calculate()
{
    expr = document.getElementById('text1').value;
   

    document.getElementById('text1').value=evaluate(expr);


}

function evaluate(str) {
    function splitStringArithmetic(str) {
      var index = 0;
      var splitArray = str.split("").reduce((arr, v, i) => {
        if (isNaN(parseInt(v))) {
          arr.push(str.slice(index, i));
          arr.push(v);
          index = i + 1;
        }
        return arr;
      }, []);
      splitArray.push(str.slice(index));
      return splitArray;
    }
  
    function findMultIndex(arr) {
      return arr.findIndex(i => i == "*");
    }
  
    function findDivIndex(arr) {
      return arr.findIndex(i => i == "/");
    }
  
    function findAddIndex(arr) {
      return arr.findIndex(i => i == "+");
    }
  
    function findSubIndex(arr) {
      return arr.findIndex(i => i == "-");
    }
  
    function multiply(arr) {
      var index = findMultIndex(arr);
      arr[index] = parseInt(arr[index - 1]) * parseInt(arr[index + 1]);
      return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
      });
    }
  
    function divide(arr) {
      var index = findDivIndex(arr);
      arr[index] = parseInt(arr[index - 1]) / parseInt(arr[index + 1]);
      return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
      });
    }
  
    function add(arr) {
      var index = findAddIndex(arr);
      arr[index] = parseInt(arr[index - 1]) + parseInt(arr[index + 1]);
      return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
      });
    }
  
    function subtract(arr) {
      var index = findSubIndex(arr);
      arr[index] = parseInt(arr[index - 1]) - parseInt(arr[index + 1]);
      return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
      });
    }
  
    function containsMultOrDiv(arr) {
      return arr.some(i => i === "*" || i === "/");
    }
  
    function containsAddOrSub(arr) {
      return arr.some(i => i === "+" || i === "-");
    }
  
    function simplify(arr) {
      while (containsMultOrDiv(arr)) {
        if (arr.includes("*")) {
          if (arr.includes("/")) {
            if (findDivIndex(arr) < findMultIndex(arr)) {
              arr = divide(arr);
            } else {
              arr = multiply(arr);
            }
          } else {
            arr = multiply(arr);
          }
        } else {
          arr = divide(arr);
        }
      }
      while (containsAddOrSub(arr)) {
        if (arr.includes("+")) {
          if (arr.includes("-")) {
            if (findSubIndex(arr) < findAddIndex(arr)) {
              arr = subtract(arr);
            } else {
              arr = add(arr);
            }
          } else {
            arr = add(arr);
          }
        } else {
          arr = subtract(arr);
        }
      }
      return arr;
    }
  
    var arithmeticArray = splitStringArithmetic(str);
     console.log(arithmeticArray)










    return simplify(arithmeticArray);
  }







