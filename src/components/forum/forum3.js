import React from 'react'
import './forum.css'

export default function forum3() {
    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="card-forum">
                        <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Therapy</button>
                        <button className='topic mr-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Self-care</button>
                        <span className='mx-3' style={{ fontSize: "12px" }}>25 December 2022</span>
                        <div className="card-body">
                            <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I am struggling to find myself. I am a colourful butterfly but at times I don't know who I am. With the spiralling thoughts, I tend to live in guilt causing anxiety. I want to grow and dance like the sunflower being accepted by myself. i want to feel beautiful.</p>
                        </div>
                        <div className="card-footer align-items-center">
                            <div className="px-3 py-2 endline-forum">

                                <div className="reply">
                                    <i className="fas fa-reply" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Reply</span></i>
                                </div>

                                <div className="right-items">
                                    <div className="upvote mx-2 my-2">
                                        <button type="button" className="btn position-relative upvote-btn">
                                            <i className="fas fa-heart" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Upvote</span></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>8
                                                <span className="visually-hidden">unread messages
                                                </span>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="comments mx-2 my-2">
                                        <button type="button" className="btn position-relative comments-btn">
                                            <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>1
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
            <hr />
            <div className="container">
                <div className="row my-5">

                    <div className="card-forum">
                        <p className='mx-3 mt-4 mb-1' style={{ fontSize: "12px" }}>10 January 2023</p>
                        <div className="card-body">

                            <p className="card-text mx-3 mt-3 mb-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Just live and do things which you enjoy, spend some alone time listen to music, read books or go for a long walk. Don't treat yourself negatively, God has created everyone differently.</p>
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
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#000000" }}>1
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

