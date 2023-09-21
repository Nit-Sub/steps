import React, { useEffect, useState } from 'react';
import './counter.css';
const Counter = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(1)
    const handleminusbutton = () => {
        setStep(step - 1)
    }
    const handleplusbutton = () => {
        setStep(step + 1)
        setTotal(count);
        console.log(count)}
    const handlecountminusbutton = () => {
        setCount(count - 1)
    }
    const handlecountplusbutton = () => {
        setCount(count + 1)
    }
     useEffect(() => {
        setTotal(count);
        console.log(count)
    }, [count]);
    return (<>
        <div className='main'>
            <div className='body'>
                <button onClick={handleminusbutton}>-</button>
                <p>Step: {step}</p>
                <button onClick={handleplusbutton}>+</button>
            </div>
            <div className='body'>
                <button onClick={handlecountminusbutton}>-</button>
                <p>Count: {count}</p>
                <button onClick={handlecountplusbutton}>+</button>
            </div>
            <p>{total} days from today is Sat jun 26 2027</p>
        </div>
    </>)
}
export default Counter;