import React from "react";
import "./index.css";

let currdate= new Date();
currdate=currdate.getHours();
let greeting="";
const cssstyle={};
if(currdate>=0 && currdate<12)
   {
   	greeting="Good Morning";
   	cssstyle.color="orange";
   }
     else if(currdate>=12 && currdate<18){
     	greeting="Good Afternoon";
     	cssstyle.color="yellow";

     }
     else
     {
     	greeting="Good Night";
     	cssstyle.color="blue";
     }
     const  App=()=>{
       return(
       <div>
  <h1>Hello Sir Ankit Yadav is Greetting you <span style={cssstyle}>{greeting}</span></h1>
  </div>
  );}
  export default App;
