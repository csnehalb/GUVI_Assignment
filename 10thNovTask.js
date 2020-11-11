//Print odd numbers in an array 
var odd=function(){
var arr=[1,2,3,4,5,6]
var odd=arr.filter((item)=>{return item%2!==0})
console.log(odd)
}
odd()
//Convert all the strings to title caps in a string array
var ConvertStringArray=function(){
var strarr=["snehal","GAYATRI","DeeptI"]
var oparr=strarr.map(item=>item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
console.log(oparr)
}
ConvertStringArray()
//Sum of all numbers in an array
var add=function(){
var numarr=[10,20,30,40,50]
let sum=numarr.reduce((res,item)=>res+item,0)
console.log(sum)
}
add()
//Return all the prime numbers in an array
var prime=function()
{
var inparr=[3,4,5,6,7,8,9,11]
op=""
inparr.forEach((item)=>{
   flag=false
    for(let i=2;i<item;i++)
    {
        if(item%i==0)
          flag=true
    }
    if(flag==false)
     op=op+item+" "

})
console.log(op)
}
prime()
//Return all the palindromes in an array
var palindrome=function()
{
var starr=["aba","abc","hello","acca"]
out=""
starr.forEach(item=>{

    let org=item.split('')
    let rev=org.reverse()
    let revitem=rev.join("").toString()
     if(item===revitem)
     out=out+item+" "

    
})
console.log(out)
}
palindrome()
//Return median of two sorted arrays of same size
var median=(function(){
let arr1=[4,1,8,16]
let arr2=[3,1,2,6]
if(arr1.length===arr2.length)
{
  arr3=arr1.concat(arr2)
  arr3.sort(function(a,b){return a-b})
  n=arr3.length
  console.log(arr3)
  if (n % 2 != 0)
        return parseFloat(arr3[parseInt(n/2)])
 
     return parseFloat((arr3[parseInt((n-1)/2)] +
                  arr3[parseInt(n/2)])/2.0)
 
}
else
console.log("Arrays of different sizes not allowed")})()
console.log(median)
//Remove duplicates from an array
dupinparr=[1,1,2,4,5,6,3,2,2,3,4]
unique=[]
dupinparr.forEach(item=>{
 
  if (!unique.includes(item))
      unique.push(item)
})
console.log(unique)
//Rotate an array by k times and return the rotated array
var rotarray=(function()
{
let rotarrinp=[1,2,3,4,5,6]
n=rotarrinp.length
k=3
temparr=[]
for(let i=0;i<k;i++)
{
  let temp=rotarrinp.shift()
  temparr.push(temp)
}
let outarr=rotarrinp.concat(temparr)
console.log(outarr)
return outarr
})()
console.log(rotarray)