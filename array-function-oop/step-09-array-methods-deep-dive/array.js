const names=["Hellal","Belala","rahim","karim"]
console.log(names)
const array=document.getElementById('array')
array.innerText=names

const name2=new Array("Hellal","Belala","rahim","karim","shafi")
console.log(name2)
const result=document.getElementById('array2')
result.innerText=name2

// lentht of array
console.log(name2.length)
console.log(names.length)
const len1=name2.length
const length=document.getElementById('array3')
length.innerText=len1

// access array
const access1=document.getElementById('array4')
access1.innerText=name2[0]

// insert array with push method in end 
names.push("Messi")
names.push("Ronaldo")
names.push("Mbappe")
 const result5=document.getElementById('array5')
 console.log(result5)
 result5.innerText=names

//  pop from the end
