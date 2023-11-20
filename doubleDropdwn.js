import { useState } from "react";
import "./styles.css";

export default function App() {
  
  const arr = [
    {
      name:"India",
      cities: ["punjab","haryana"]
    },
     {
       name:"pak",
       cities: ["lahore","karachi"]
     }
  ];
  const [state,setState]=useState("");
  const [selectedCities,setSelectedCities] = useState([])
  var obj=[];
 const handleChange=(e)=>{
   setState(e.target.value);
   let x= e.target.value;
    obj=arr.filter((p)=> p.name==x)
    const Scities = obj ? obj[0].cities : [];
    setSelectedCities(Scities);
console.log(obj[0].cities)
 }
 //console.log(state);


  return (
    <div className="App">
      
    <select value={state} onChange={handleChange}>
      {arr.map((item,index)=>{
        return <option key={index} value={item.name}>{item.name}</option>
      })}
      
      </select>
      <p>selected value is : {state}</p>
         
         <select>
         {selectedCities.map((item,index)=>{
           return <option key= {index} value={item}>{item}</option>
         })}
           </select>
    </div>
  );
}
