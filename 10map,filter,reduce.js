let arr = [3,4,5,6]
// arr.map((element)=>{
//   console.log(element)
// }) 

//console.log(arr)
//array map method
let a = arr.map((value, index,array)=>{
  console.log(value,index,array)
  return value+index
})
console.log(a)

//array filter method
let arr2 = [33,40,54,6,4,5]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2,arr) 

//array reduce method 
let arr3 = [2,3,4,5,6,7]
let newarr3 = arr3.reduce((nidhi((n1,n2)=>{
  return n1+n2
})
console.log(newarr3)                          
