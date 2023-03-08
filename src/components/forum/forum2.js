import React from 'react'
import './forum.css'

export default function forum2() {
    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="card-forum">
                        <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Anxiety</button>
                        <span style={{ fontSize: "12px" }}>01 January 2023</span>
                        <div className="card-body">
                            <h5 className="card-title mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "600", color: "#000000" }}>Rapid heart rate and breathlessness</h5>
                            <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>So I don't know what happens I suddenly feel my heart racing when I have to speak something in public and become so breathless because of that and I cannot speak.</p>
                        </div>
                        <div className="row">
                            <div className="card-footer">
                                <div className="px-3 py-2 endline-forum">

                                    <div className="col-md-6">
                                        <div className="form-outline mx-2 my-2 px-2 py-1">
                                            <input type="text" id="typeText" className="form-control " />
                                            <label className="form-label d-flex align-items-center px-2" for="typeText">Reply</label>
                                            <button className='reply-btn px-4 py-1 my-1 mx-2'>Post</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="right-items">
                                            <div className="upvote mx-2 my-2">
                                                <button type="button" className="btn position-relative upvote-btn">
                                                    <i className="fas fa-heart" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Upvote</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>5
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="comments mx-2 my-2">
                                                <button type="button" className="btn position-relative comments-btn">
                                                    <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>0
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

