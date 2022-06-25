import {useState} from "react"
import Counter from "./Counter";
export default function App() {
    const [count, setCount] = useState(1);
    
    return (
        <div>
            <button onClick={()=> setCount(count+1)}/>
            <Counter value={count}/>
            <Counter value={count * count}/>

            
        </div>
        
    )
} 