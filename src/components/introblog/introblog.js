import React from 'react'
import './introblog.css'

export default function introblog() {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1 className='text-center' style={{ fontSize: "50px", fontFamily: 'Playfair Display' }}>BLOGS</h1>
                </div>

                <div className="row my-5">
                    <div className="col-md-4">
                        <div className="card card-blog py-4 px-5">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src="card1.svg" alt="" />
                                    <p className='text-center pt-3 author'>To the Professors Who Acknowledged My Worth</p>
                                </div>
                            </div>
                            <div className="card-title text-center pt-3 text-white">
                                <h5 >Dorothy Lane</h5>
                                <h5 >November 18, 2016</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-blog py-4 px-5">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src="card2.svg" alt="" />
                                    <p className='text-center pt-3 author'>I needed to turn my challenges into a positive to help others</p>
                                </div>
                            </div>
                            <div className="card-title text-center pt-3 text-white">
                                <h5 >Morgan</h5>
                                <h5 >31 January 2023</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-blog py-4 px-5">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src="card3.svg" alt="" />
                                    <p className='text-center pt-3 author'>Why Online Therapy is the Best Option for You</p>
                                </div>
                            </div>
                            <div className="card-title text-center pt-3 text-white">
                                <h5 >Neha Bakshi</h5>
                                <h5 >11 January 2023</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
