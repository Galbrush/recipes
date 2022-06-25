import { useState } from "react"

export default function Counter({value}) {
    
    // const [count, setCount] = useState(value);
    
    return (
        <div>
        {/* <button onClick={()=> setCount(count + 1)}/> */}
        <h1>Counter {value}</h1>
        <p>test</p>
        </div>
    )
};