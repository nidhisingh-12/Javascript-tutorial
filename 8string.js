//we can used double quotes and single quotes also 
let name = "nidhi"
console.log(name.length)

let friend = 'neha'
console.log(friend)

let family = "singh"
console.log(family[0]) 
console.log(family[1]) 

//template literals
let boy1 = "pramod"
let boy2 = "nitin"
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)

//escape sequence characters
let fruit = "Bana\"na" //single quotes also can be used
console.log(fruit)
console.log(fruit.length)


let name = "nidhi"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())



//slice method
//index starts from 0.
console.log(name.slice(2,5))
console.log(name.slice(2,)) // start from 2 till end
console.log(name.replace("nid", "rid"))



//Concatetion method
let friend = "singh"
console.log(name.concat("is a friend of ", friend, "ok "))



// trim method is used for remove the space
let friend2 = "            nidhi"
console.log(friend2.trim())

