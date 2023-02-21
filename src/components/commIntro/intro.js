import React from 'react'
import './intro.css'
export default function intro() {
  return (
    <>
        <div className='container'>
            <div className=".shadow-2-strong d-flex justify-content-center pt-4">
                <img src="comm1.svg" alt="" />
            </div>
            <div className='welcome-text'>
                <p>WE ARE GLAD TO HAVE YOU JOIN US!</p>
            </div>
            <div>
                <p className='text-center moto pt-2 '>We want to create a strong community of individuals who are there for one another, who assist and support one another, and who contribute to one another's progress.</p>
            </div>
        </div>                              
    </>
    
  )
}