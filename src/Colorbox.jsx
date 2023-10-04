import { useState } from "react"
import "./Colorbox.css"
function Colorbox() { 
    const [color, setColor] = useState('purple')
    return <div className="Colorbox" style={{backgroundColor: color}}></div>
}

export default Colorbox