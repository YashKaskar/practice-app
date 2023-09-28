import { useState } from "react"
import "./toggler.css"
export default function Face() {
    const [isHappy, setIsHappy] = useState(true)

    const Excited = () => setIsHappy(!isHappy)

    const [heart, setHeart] = useState(true)
    const likeheart = () => setHeart(!heart)
    
    return (    
        <>
            <p className="toggler" onClick={Excited}>
                Click Me and get Excited <br />
                {isHappy ? "🙂" : "🤩"} 
                {isHappy ? "Happy" : "Excited"}
            </p>
            <p className="toggler" onClick={likeheart}>
                {heart ? "❤️" : "💖"} <br />
                {heart ? "Heart" : "Twinckle heart "}
            </p>
            
        </>
    )
}

