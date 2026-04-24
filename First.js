
const fetch_data=(delay,id)=> {
  console.log("Fetching Data.......id",id)
console.log("Data Fetched",id)
return {id,delay }
}
const main=async()=>{
  const task1=await fetch_data(1,1)
  const task2=await fetch_data(2,2)
  return {task1,task2}
}
const invoked=main()
console.log(invoked)


