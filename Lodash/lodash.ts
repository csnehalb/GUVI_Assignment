//1.Chunk Method
function create_chunks(array,size)
{
    let len=array.length
    let i=0;
    var chunks=[]
    while(i<array.length)
    {
        let temparr=[]
        for(let j=0;j<size;j++)
        {
            if(i<array.length)
               temparr.push(array[i++])
               else
               break;
        }
        
        chunks.push(temparr)
    }

   
    console.log("Chunks: ",chunks)
    
     
}

let arr=[1,2,3,4,5,6,7,8];
console.log("1.Chunk Method Implementation")
console.log("Input Array:",arr)
console.log("Chunk Size:",3)
create_chunks(arr,3)


//2.reduce function 
function reduce(accumulator,array,iteratorfunction)
{

    for(let i=0;i<array.length;i++)
    {
       let temp=iteratorfunction(array[i],accumulator)
       accumulator=temp
    }   

    console.log("Ans after applying reduce method:",accumulator)

}

let arr2=[10,20,30]
console.log(" ")
console.log("2.Reduce Method Implementation")
console.log("Input Array",arr2)
console.log("reduced it by sum of numbers in array")
reduce(0,arr2,function(value,acc)
{
   return value+acc
})

//3.Filter Method
function filter(array,condition)
{
   let condition_true=[]
   let condition_false=[]
   
   for(let i=0;i<array.length;i++)
   {
       if(condition(array[i]))
       condition_true.push(array[i])
       else
       condition_false.push(array[i])
   }
   
console.log("Elements that satisfy condition: ",condition_true)
//console.log("Elements that satisfy condition: "condition_false)
}

var arr3=[3,2,5,7,8]
console.log(" ")
console.log("3.Filter Method Implementation")
console.log("Input array:",arr3)
console.log("filtering based on no is odd or even")
filter(arr3,function(n)
{
    if(n%2==0)
      return true
      else
      return false
})

//4.find method
function find(array,condition)
{
   let elem;
   
   
   for(let i=0;i<array.length;i++)
   {
       if(condition(array[i]))
       {
       elem=array[i]
       break;
       }
       
   }
   
console.log("First Element found",elem)

}

var arr3=[3,2,5,7,8]
/*find(arr3,function(n)
{
    if(n%2==0)
      return true
      else
      return false
})*/
console.log(" ")
console.log("4.Find Method Implementation")
console.log("Input Array::",arr3)
console.log("find the first odd element")

find(arr3,elem=>elem%2!=0)

//5.Sum Method
function sum(array)
{

   let sum=0;

    for(let i=0;i<array.length;i++)
    {
        sum=sum+array[i]
    }   

    console.log("Sum=",sum)

}
var arr5=[10,20,30,40]
console.log(" ")
console.log("5.Sum Method Implementation")
console.log("Input Array::",arr5)


sum(arr5)