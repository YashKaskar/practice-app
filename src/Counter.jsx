import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(0)
    const changenumadd = () => {    
        setNum(num + 1)
    }
    const changenumsub = () => {    
        setNum(num - 1)
    }
    return (    
            <div>   
            <p>The count is : {num}</p>
            <button onClick={changenumadd}>Increment</button>
            <button onClick={changenumsub}>Decrement</button>
            </div>
        )
}