import React from 'react'
import './issue.css'

export default function issue() {
    return (
    <>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Depression</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Anxiety</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Grief and loss</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>OCD</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Bipolar Disorder</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Stress</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Phobia</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>ADHD</p>
                </div>
                <div className="col-4 rectangle">
                    <p className='text text-center pt-2'>Trauma/PTSD</p>
                </div>
            </div>
            <p style={{ textAlign: "center", color: "#1A759F" }}>and much more!</p>
        </div>
    </>

    )
}