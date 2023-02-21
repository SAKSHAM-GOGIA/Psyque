import React from 'react'
import './abovefooter.css'
import { Link } from 'react-router-dom'

export default function abovefooter() {
    return (
        <>
            <div className="container">
                <div className="card abovefooter-card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h5 className="card-title abovefooter-text">Get a mental health assessment done right now.</h5>
                            </div>
                            <div className="col-4 text-end">
                                <Link to="/surveys" className="inside-abovefooter">Take Survey</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
