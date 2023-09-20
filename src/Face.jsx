import { useState } from "react"
import "./toggler.css"
export default function Face() {
    const [isHappy, setIsHappy] = useState(true)
    const Excited = () => setIsHappy(!isHappy)

    
    return (    
        <>
            <p className="toggler" onClick={Excited}>
            {isHappy ? "🤩" : "🙂"} 
            </p>
        </>
    )
}

