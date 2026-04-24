 const val=document.getElementById('display')
 function updteDisplay(mgs){
  val.innerText=mgs
 }
 function setSessionStorage(key ,value){
  sessionStorage.setItem(key,value)
  updteDisplay(`Saved :${key} session and Value=${value}`)
}

 function getSessionStorage(key){
 const val= sessionStorage.getItem(key)
   updteDisplay(val? `${val}`:`${key}`)
}
 function removeSessionStorage(key){
  sessionStorage.removeItem(key)
  updteDisplay(` Removed ${key}`)
}
 function clearSessionStorage(){
  sessionStorage.clear()
}