import React from 'react'
import './okay.css'
export default function okay() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <img src="its_okay.svg" alt="" />
                    </div>
                    <div className="col-6 rect d-flex align-items-center">
                        <h2 className='caption'>It's OKAY not to be OKAY!</h2>
                    </div>
                </div>
                <p className='endtext'>Get in touch with individuals who, like you, have faced adversity head-on and emerged stronger for the experience through blogs and discussion forums.</p>
            </div>

        </>

    )
}
