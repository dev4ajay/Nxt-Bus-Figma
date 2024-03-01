import React from 'react'
import { CiUser } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
    return (

        <div className="">
            {/* <header id="header" className="d-flex"> */}
                {/* <div className="container d-flex align-items-center">
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
                </div> */}
                 <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">  <a href="/" className="logo ms-auto">
                        <img src='/assets/images/buslogo.png' className='logo-imgs' alt='logo'/>
                        </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <li className="dropdown">
                                <a className="nav-link   scrollto" href="/account"><span>Booking</span><i className="bi bi-chevron-down"></i> </a>
                                <ul>
                                    <li><a href='/account'><span>Account</span></a> </li>
                                    <li><a href='/passenger'><span>Passenger</span></a> </li>
                                    <li><a href='/booking'><span>Booking</span></a> </li>
                                   
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#services"><span>Ticket</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href='/ticket'><span>Ticket 1</span></a> </li>
                                    <li><a href='/ticket1'><span>Ticket 2</span></a> </li>
                                    <li><a href='/ticket2'><span>Ticket 1</span></a> </li>

                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="getstarted scrollto" href="/contact"> <span className='d-flex gap-2'><span className='text-danger font-bold' ><CiUser/></span> Account</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a><span>UX/UI</span></a> </li>
                                    <li><a href='/signup'><span>Signup</span></a>
                                    </li><li><a  href='/login'><span>Log in</span> </a>
                                    </li>
                                </ul>
                            </li>

                       
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* </header> */}
        </div>
    )
}

export default Header