import React, { useState } from 'react';
import './counter.css';
const Counter = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(1)
    const handleminusbutton = () => {
        setStep(step - 1)
    }
    const handleplusbutton = () => {
        setStep(step + 1)
    }
    return (<>
            <div className='main'>
                <div className='body'>
                    <button onClick={handleminusbutton}>-</button>
                    <p>Step: {step}</p>
                    <button onClick={handleplusbutton}>+</button>
                </div>
                <div className='body'>
                    <button>-</button>
                    <p>count: {count}</p>
                    <button>+</button>
                </div>
                <p>5 days from today is Sat jun 26 2027</p>
            </div>
        </>)
}
export default Counter;