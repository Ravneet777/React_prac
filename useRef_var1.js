import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [state,setState]= useState([]);
  const inputRef=useRef(null); 

  return (
    <div className="App">
      
<input ref={inputRef} type="text" />
<button onClick={()=>{setState(inputRef.current.value)}}>Add</button>
<h3>{state}</h3>
</div>

  );
}
