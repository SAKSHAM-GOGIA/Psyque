import React from 'react'
import './introblog.css'
import { Link } from 'react-router-dom'

export default function introblog() {
    return (
        <>
            <div className="container">
            <Link to='/communities/blogs'>
                <div className="heading">
                    <h1 className='text-center' style={{ fontSize: "50px", fontFamily: 'Playfair Display' }}>BLOGS</h1>
                </div>
                </Link>

                <div className="row my-5">
                    <div className="col-md-4">
                        <Link to='/communities/blog3'>
                            <div className="card card-blog py-4 mb-0 px-5">

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
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/communities/blog1'>
                            <div className="card card-blog py-4 mb-0 px-5">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="img-fluid" src="card2.svg" alt="" />
                                        <p className='text-center author'>I needed to turn my challenges into a positive to help others</p>
                                    </div>
                                </div>
                                <div className="card-title text-center pt-3 text-white">
                                    <h5 >Morgan</h5>
                                    <h5 >31 January 2023</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/communities/blog2'>
                            <div className="card card-blog py-4 mb-0 px-5">
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
                        </Link>
                    </div>
                </div>
                <p style={{ textAlign: "center", color: "#000000", marginBottom: "100px"}}>view more...</p>
            </div>
        </>
    )
}
