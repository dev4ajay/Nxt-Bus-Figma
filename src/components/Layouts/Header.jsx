import React from 'react'
import { CiUser } from "react-icons/ci";

function Header() {
    return (

        <div className="">
            <header id="header" className="d-flex">
                <div className="container d-flex align-items-center">
                    <a href="/" className="logo ms-auto">
                        <img src='/assets/images/buslogo.png' alt='logo'/>
                        </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto" href="/">Home</a>
                            </li>
                            <li><a className="nav-link   scrollto" href="/experience">About Us</a>
                            </li><li><a className="nav-link   scrollto" href="/my-projects">Services</a>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link   scrollto" href="/about-us"><span>Our Bus</span><i className="bi bi-chevron-down"></i> </a>
                                <ul>
                                    <li><a><span>Bus 1</span></a> </li>
                                    <li><a><span>Bus 1</span></a> </li>
                                    <li><a><span>Bus 1</span></a> </li>
                                   
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#services"><span>Pages</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a><span>Bus 1</span></a> </li>
                                    <li><a><span>Bus 1</span></a> </li>
                                    <li><a><span>Bus 1</span></a> </li>

                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="getstarted scrollto" href="/contact"> <span className='d-flex gap-2'><span className='text-danger font-bold' ><CiUser/></span> Account</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a><span>UX/UI</span></a> </li>
                                    <li><a href='/signup'><span>Register Now</span></a>
                                    </li><li><a className='' href='/login'><span>Log in</span> </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header