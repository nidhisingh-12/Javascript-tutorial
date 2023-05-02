let marks_class_12 = [91,23,45,64,24,false,"Not present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[6])
console.log("the legnth og marks_class_12 is", marks_class_12.length)
marks_class_12[4]= 89
marks_class_12[3] = 96
console.log(marks_class_12)

//more method in array
// let num = [2,3,4,6,8]
// let b = num.toString() // b is now a string
// console.log(b,typeof(b))
// let c = num.join(" and ")
// console.log(c,typeof(c))
// let r = num.pop() //pop returns the popped element
// console.log(num,r)
// let x = num.push(56) //push returns the new array length
// console.log(num,x)

// let a = num.shift() // used for remove the element from the start of the array
// console.log(a,num)

// let n = num.unshift() //used for remove the element from the end of the array
// console.log(n,num)

// /*------------------------------*/
// let array = [3,5,7,8,9]
// console.log(array.length)
// delete array[0] // the length of array will not be changed
// console.log(array.length)

// //Concat 
// let array2 = [3,4,6,8,3,21]
// let array3 = [3,4,6,8,3,21]
// let newArray = array2.concat(array3)
// console.log(newArray)
// console.log(array2,array3) 

// // sort method
// // let s = [45,34,56,78,67]
// // s.sort()
// // console.log(s) 

// let compare = (a,b)=>{
//     return b-a
// }
// let num = [34,56,30,67,89,69]
// num.sort(compare)
// num.reverse()
// console.log(num)

/*----------------------*/
// splice method
let num = [45,6,657,32,54,65]
num.splice(3,4,5,6,843,21,34,) // 3 index and 4 index will be deleted after all element will added in num element
console.log(num)

//slice method
let num1 = [56,78,79,23,34,12]
let newnum1 = num1.slice(3,5)
console.log(newnum1)


