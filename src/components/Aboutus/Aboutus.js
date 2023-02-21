import React from 'react'
import "./aboutus.css"

export default function Aboutus() {
    return (
        <div className='about-us py-5 my-5' id="about-us">
            <div className='container '>
                <h2 className='text-center pb-5' style={{fontSize: "50px", color: "black", fontFamily:"Playfair Display"}}>
                    ABOUT US
                </h2>
                <p className='text-justify about-us-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}
