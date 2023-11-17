import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [state,setState]= useState([]);
  const inputRef=useRef(null); 

  return (
    <div className="App">
      
<input ref={inputRef} type="text" />
<button onClick={()=>{setState([...state,inputRef.current.value])}}>Add</button>
{state.map((item, index)=>{return <h3 key={index}>{item}</h3>})}
</div>

  );
}
