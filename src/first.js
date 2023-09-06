import React from 'react'
import { useState } from 'react'

const First = () => {
const [step , setStep]=useState(1);
const [showhide, setShowhide ]=useState(true);
    const messages =[
        "Learn React",
        "Apply for Jobs",
        "Invest your new income"
      ]

    const handlePrevious=()=>{
        if (step>1) setStep(step- 1)
    
      }
      const handleNext=()=>{
        if (step<3) setStep(step+1)
      }
    console.log(showhide)
      return (
        <>
          <button  className="close"onClick={()=>setShowhide(!showhide)}>&times;</button>
       {
        showhide &&
        <div className="steps">
        <div className="numbers">
          <div className={step>=1 ?"active" :""}>1</div>
          <div className={step>=2 ?"active" :""}> 2</div>
          <div className={step>=3 ?"active" :""}>3</div>
        </div>
        <p className="message">{step}:{messages[step-1]}</p>
        <div className="buttons">
          <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
        </div>
      </div>
    
       }
          </>
      );
}

export default First;