import axios from "axios"
const ServerURL="http://10.0.2.2:5000"

//,{headers:{Authorization: "Bearer "+localStorage.getItem("TOKEN") }}
const getData=async(url)=>{
try{  console.log(`${ServerURL}/${url}`)  
var response=await axios.get(`${ServerURL}/${url}`)

var result=await response.data
return result
}
catch(e)
{   console.log(e)
    return null}
}
//{headers:{Authorization: "Bearer "+localStorage.getItem("TOKEN") }})
const postData=async(url,body)=>{
    try{    
    var response=await axios.post(`${ServerURL}/${url}`,
   
    body)
    
    var result=await response.data
    return result
    }
    catch(e)
    { return null}
    }
    



export {ServerURL,getData,postData}