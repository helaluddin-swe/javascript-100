const value=document.getElementById('value')
let count=0
function getValue(){
  value.innerText=`Increment :${setIncrement()} and decrement :${setDecrement}`
  console.log(`Increment :${setIncrement()} and decrement :${setDecrement}`)

}
function setIncrement(){
  count+=1
  getValue()

}
function setDecrement(){
  count-=1
  getValue()

}

console.log(getValue())