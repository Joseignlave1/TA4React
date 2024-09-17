import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return(
        <div className="counter-container">
            <p>{counter}</p>
            <button className = "button" onClick={() => {
                setCounter((prevState) => prevState + 1);
            }}>Aumentar contador</button>
              <button className = "button" onClick={() => {
                setCounter(0);
            }}>Reiniciar Contador</button>
            <button className = "button" onClick={() => {
                setCounter((prevState) => prevState > 0 ? prevState - 1 : 0);
            }}>Disminuir Contador contador</button>
        </div>
    )
}