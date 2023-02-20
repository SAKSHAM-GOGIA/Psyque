import React from 'react'
import "./footer.css"

export default function footer() {
    return (
        // <!-- Footer -->
        <footer className="text-center text-dark" style={{ fontSize: '16px' }}>
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block" style={{ fontSize: "20px" }}>
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div >
                    <a href="#" className="me-4 text-dark" style={{ fontSize: "larger" }}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-dark" style={{ fontSize: "larger" }}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-dark" style={{ fontSize: "larger" }}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-dark " style={{ fontSize: "larger" }}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-dark" style={{ fontSize: "larger" }}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}
            <div className='line'></div>

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <img src="footer logo.svg" alt="" />
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Blogs</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Discussion Forums</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Our Counselors</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Surveys</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">About Us</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}



                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >
                            {/* <!-- Links --> */}
                            <h6 className="fw-bold mb-4">Contact</h6>
                            <p>
                                <i className="fas fa-home me-3 text-dark">
                                </i>
                                Vellore Institute of Technology, Vandalur-Kelambakkam road, Chennai-600127
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3 text-dark"></i>
                                psyque.2023@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-dark"></i> +919084646531</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4" style={{ backgroundColor: "#184E77", color: "white" }}>
                © 2021 Copyright :
                <a className="text-reset fw-bold" href="#"> Psyque.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        // <!-- Footer -->
    )
}
