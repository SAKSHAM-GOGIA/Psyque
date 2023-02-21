import React from 'react'
import "./surveypage.css"
// import { Link } from "react-router-dom";

export default function surveypage() {
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <h1 className='text-dark' style={{ fontSize: '50px', paddingTop: "102px" }}> <i>Take the mental health survey right away and start the path to recovery. </i></h1>
                    </div>
                    <div className="col-md-6">
                        <img src="survey-image.svg" alt="" />
                    </div>
                </div>

                <div className='text-dark' style={{ fontSize: "20px" }}>
                    <p> Your responses will be kept confidential. </p>
                </div>

            </div>
        </>
    )
}
