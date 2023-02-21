import React from 'react'
import "./ourfeatures.css"

export default function ourfeatures() {
    return (
        <>
            <div className="container" style={{ paddingTop: "132px" }}>
                <h1 className='text-center heading-features' style={{ paddingBottom: "75px", fontSize: "50px",fontFamily: "Playfair Display"}}>
                    OUR FEATURES
                </h1>
                <div className='row pb-4'>
                    <div className="col-md-6">
                        <div className="card-features">
                            <div className="card-body-features">
                                <h2 className="card-title-features text-center"><b><i>BLOGS</i></b></h2>
                                <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-features">
                            <div className="card-body-features">
                                <h2 className="card-title-features text-center"><b><i>SURVEYS</i></b></h2>
                                <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pb-4'>
                    <div className="col-md-6">
                        <div className="card-features">
                            <div className="card-body-features">
                                <h2 className="card-title-features text-center"><b><i>DISCUSSION FORUMS</i></b></h2>
                                <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-features">
                            <div className="card-body-features">
                                <h2 className="card-title-features text-center"><b><i>APPOINTMENTS</i></b></h2>
                                <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='features-image text-center py-5'>
                    <img src="features.svg" />
                </div>
            </div>
        </>
    )
}

