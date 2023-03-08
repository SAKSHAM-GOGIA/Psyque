import React from 'react'
import './forumintro.css'
import { Link } from 'react-router-dom'

export default function forumintro() {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1 className='text-center' style={{ fontSize: "50px", fontFamily: 'Playfair Display' }}>DISCUSSION FORUM</h1>
                </div>
                <div className="row my-5">
                    <div className="col-9">
                        <div className="card-forum">
                            <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Depression</button>
                            <span style={{ fontSize: "12px" }}>16 January 2023</span>
                            <div className="card-body">
                                {/* <h5 className="card-title mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "600", color: "#000000" }}>Special title treatment</h5> */}
                                <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I am feeling sad, depressed, I worked in a pvt compny but now got terminated.not only that , i made my friends angry on that day and they are not talking to me . I did a stunt one day which was very tensed. I came home but now i am not willing to do anything.  feel like no one wants to talk to me.</p>
                            </div>
                            <div className="card-footer align-items-center">
                                <div className="px-3 py-2 endline-forum">
                                    <Link to='/communities/forum1'>
                                        <div className="reply">
                                            <i className="fas fa-reply" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Reply</span></i>
                                        </div>
                                    </Link>
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
                                        <Link to='/communities/forum1'>
                                            <div className="comments mx-2 my-2">
                                                <button type="button" className="btn position-relative comments-btn">
                                                    <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>2
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 right-forum">
                    <div className="col-9">
                        <div className="card-forum">
                            <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Anxiety</button>
                            <span style={{ fontSize: "12px" }}>01 January 2023</span>
                            <div className="card-body">
                                <h5 className="card-title mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "600", color: "#000000" }}>Rapid heart rate and breathlessness</h5>
                                <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>So I don't know what happens I suddenly feel my heart racing when I have to speak something in public and become so breathless because of that and I cannot speak.</p>
                            </div>
                            <div className="card-footer align-items-center">
                                <div className="px-3 py-2 endline-forum">
                                    <Link to='/communities/forum2'>
                                        <div className="reply">
                                            <i className="fas fa-reply" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Reply</span></i>
                                        </div>
                                    </Link>
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
                                        <Link to='/communities/forum2'>
                                            <div className="comments mx-2 my-2">
                                                <button type="button" className="btn position-relative comments-btn">
                                                    <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>0
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-9">
                        <div className="card-forum">
                            <button className='topic mx-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Therapy</button>
                            <button className='topic mr-3 mt-4 mb-1' style={{ color: "#000000", fontFamily: "Playfair Display" }}>Self-care</button>
                            <span className='mx-3' style={{ fontSize: "12px" }}>25 December 2022</span>
                            <div className="card-body">
                                <p className="card-text mx-3 my-2" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>I am struggling to find myself. I am a colourful butterfly but at times I don't know who I am. With the spiralling thoughts, I tend to live in guilt causing anxiety. I want to grow and dance like the sunflower being accepted by myself. i want to feel beautiful.</p>
                            </div>
                            <div className="card-footer align-items-center">
                                <div className="px-3 py-2 endline-forum">
                                    <Link to='/communities/forum3'>
                                        <div className="reply">
                                            <i className="fas fa-reply" style={{ color: "#000000" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#000000" }}>Reply</span></i>
                                        </div>
                                    </Link>
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
                                        <Link to='/communities/forum3'>
                                            <div className="comments mx-2 my-2">
                                                <button type="button" className="btn position-relative comments-btn">
                                                    <i className="fas fa-comment" style={{ color: "#B5E48C" }}><span className="mx-1" style={{ fontFamily: "Poppins", textAlign: "justify", fontWeight: "500", color: "#B5E48C" }}>Comments</span></i>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#B5E48C" }}>1
                                                        <span className="visually-hidden">unread messages
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ textAlign: "left", color: "#000000", marginBottom: "100px"}}>view more...</p>
                
            </div>
        </>
    )
}



