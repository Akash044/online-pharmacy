import React from 'react'
import { Link } from "react-router-dom";
import headerLogo from '../../assets/images/images2.png'

function Header() {
    return (
        <header>
            <section id="title">
                {/* <!-- Nav Bar --> */}
                <nav className="main-nav">
                    <div style={{width: "300px", height: "150px"}}>
                    
                        <Link to="/"><img className="logo" src={headerLogo} alt=""
                            style={{width: "300px", height: "150px"}}/></Link>
                    </div>
                    <ul>
                        <li className="home"><Link to="/home">Home</Link> |{" "}</li>
                        <li className="categories"><a>categories</a>
                            <div className="submenue" id="submenue">
                                <ul>
                                    <li><a href="capsules.html">Capsule</a></li>
                                    <li><a href="tablets.html">Tablet</a></li>
                                    <li><a href="syrups.html">Syrup</a></li>
                                    <li><a href="vitamins.html">Vitamines</a></li>
                                    <li><a href="ointments.html">Ointment</a></li>
                                    <li><a href="calciums.html">Calcium</a></li>

                                </ul>
                            </div>
                        </li>
                        <li className="account"><Link to="/home">Account</Link></li>
                        <li className="contact"><Link to="/contact">Contact Us</Link></li>
                        <li></li>
                    </ul>
                    <div className="login-join-button row align-items-center mr-5">
                        <div className="col-5">
                            {/* <!-- Login Button With Login Form Modal -->
            <!-- Button trigger modal --> */}
                            <button type="button" className="btn btn-sm nav-btn btn-light" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Login
                            </button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Enter your email and password
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {/* <!-- Login Form  --> */}
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                    <label for="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                                    <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-primary login-btn nav-btn" id="">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            {/* <!-- Join Button as anchor (sends to sign up page) --> */}
                            <a target="_blank" href="sign-up.html">
                                <button type="button" className="btn btn-sm btn-light nav-btn">Sign Up</button>
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
}

export default Header