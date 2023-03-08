import React from 'react'
import './forum.css'

export default function forum1() {
    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="card-forum">
                        <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Depression</button>
                        <span style={{ fontSize: "12px" }}>16 January 2023</span>
                        <div className="card-body">

                            <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I am feeling sad, depressed, I worked in a pvt compny but now got terminated.not only that , i made my friends angry on that day and they are not talking to me . I did a stunt one day which was very tensed. I came home but now i am not willing to do anything.  feel like no one wants to talk to me.</p>
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
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>10+
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="comments mx-2 my-2">
                                                <button type="button" className="btn position-relative comments-btn">
                                                    <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>2
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
            <div className="container">
                <div className="row my-5">

                    <div className="card-forum">
                        <p className='mx-3 mt-4 mb-1' style={{ fontSize: "12px" }}>17 January 2023</p>
                        <div className="card-body">

                            <p className="card-text mx-3 mt-3 mb-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I am sorry to hear about your job loss. It cannot be very comforting. I guess it's okay to feel about not doing anything. Sometimes a pause is all we need to reset our thoughts. It is also good to see you accept what has happened which is a good start. Be well!</p>
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
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>3
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
                <div className="row my-5">

                    <div className="card-forum">
                        <p className='mx-3 mt-4 mb-1' style={{ fontSize: "12px" }}>29 January 2023</p>
                        <div className="card-body">

                            <p className="card-text mx-3 mt-3 mb-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I m also facing something similar</p>
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
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>0
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
        </>
    )
}

