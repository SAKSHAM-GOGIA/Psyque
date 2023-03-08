import React from 'react'
import './blogpage.css'
import { Link } from 'react-router-dom'

export default function blogpage() {
    return (
        <>
            <div className="header-blog mb-4">
                <div className="container">
                    <p style={{ fontFamily: "Playfair Display", fontSize: "60px", fontWeight: "400", textTransform: "uppercase", color: "#ffffff", textAlign: "center" }}>It takes courage to acknowledge and express one's emotions.</p>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-4">
                    <Link to='/communities/blogs/createblog'>
                        <button type="button" style={{ background: "#184E77", borderRadius: "50px" }}>
                            <p className='new-blog-text my-1 mx-5'>Create new blog!</p>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="below-head mt-4">
                        <div className="below-head-left col-md-6">
                            <div className="mx-1">
                                <button type="button" style={{ background: "#B5E48C", borderRadius: "15px" }} className="mx-1">
                                    <p className='text-center my-1 px-5'>Most Recent</p>
                                </button>
                            </div>
                            <div className="mx-1">
                                <button type="button" style={{ background: "#B5E48C", borderRadius: "15px" }} className="mx-1">
                                    <p className='text-center my-1 px-5'>Popular</p>
                                </button>
                            </div>
                        </div>
                        <div className="below-head-right col-md-6">

                            <div className="form-outline mx-2 my-2 px-2 py-1 search-bar">
                                <input type="text" id="typeText" className="form-control" />
                                <label className="form-label px-2 py-2" for="typeText"><small>Search by topic</small></label>
                                <button className='search-btn px-4 py-1 my-1 mx-2 text-white'>Search</button>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className='pb-3'/>
                <Link to='/communities/blog1'>
                    <div className="blog-card odd-color px-5 my-5">
                        <div className="card-inner mx-5 px-5 py-3">
                            <div className="card-body-color odd-color">
                                <p className='text-center pt-3 title'>I needed to turn my challenges into a positive to help others</p>
                            </div>
                            <div className="aut-date text-center py-2 ">
                                    <p >Morgan
                                    <br />  31 January 2023</p>
                                </div>
                        </div>

                    </div>

                </Link>
                <Link to='/communities/blog2'>
                    <div className="blog-card even-color px-5 my-5">
                        <div className="card-inner mx-5 px-5 py-3">
                            <div className="card-body-color even-color">
                                <p className='text-center pt-3 title'>Why Online Therapy is the Best Option for You</p>
                            </div>
                            <div className="aut-date text-center py-2 ">
                                    <p >Neha Bakshi
                                       <br /> 11 January 2023</p>
                                </div>
                        </div>

                    </div>

                </Link>
                <Link to='/communities/blog3'>
                    <div className="blog-card odd-color px-5 my-5">
                        <div className="card-inner mx-5 px-5 py-3">
                            <div className="card-body-color odd-color">
                                <p className='text-center pt-3 title'>To the Professors Who Acknowledged My Worth</p>
                            </div>
                            <div className="aut-date text-center py-2 ">
                                    <p > Dorothy Lane
                                       <br /> November 18, 2016</p>
                                </div>
                        </div>

                    </div>

                </Link>
                <p style={{ textAlign: "center", color: "#000000", marginBottom: "100px", fontSize: "20px", fontWeight: "600"}}>Load More</p>
            </div>
        </>
    )
}




