import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
export default function apphead() {
    const [isIndexPage, setIsIndexPage] = useState(false);
    useEffect( ()=>
    {
        let path = window.location.pathname
        console.log(path)
        if (path == "/")
        {
            setIsIndexPage(true) 
        }
        else{
            setIsIndexPage(false)
        }
        
    }, )
    return (
        <>
            {
                isIndexPage ? 
                    <>
                    </>
                    :
                    <div>
                        <div className="header">
                            <div className="logo">
                                <Link href="/home" ><img src="assets/images/black-height-updated.png" className="main-page-logo"></img></Link>
                            </div>
                            <div className="navbar">
                                <Link className="nav-item" href="/home">
                                    Home
                                </Link>
                                <Link className="nav-item" href="/portraits">
                                    Portraits
                                </Link>
                                <Link className="nav-item" href="/fourthpage">
                                    Landscape
                                </Link>
                                <Link className="nav-item" href="/home">
                                    Automotive
                                </Link>
                                <Link className="nav-item" href="/commercial">
                                    Commercial
                                </Link>
                                <Link className="nav-item" href="/about">
                                    About
                                </Link>
                                <Link className="nav-item" href="/contact-me">
                                    Contact Me
                                </Link>
                            </div>
                            <div className="social-icons">
                                <div>
                                    <a className="btn" href="http://www.facebook.com/profile.php?id=" ><i
                                        className="fa fa-facebook fa-sm"></i>
                                    </a>
                                </div>
                                <div>
                                    <a className="btn" href="http://www.facebook.com/profile.php?id=" ><i
                                        className="fa fa-twitter fa-sm"></i>
                                    </a>
                                </div>
                                <div>
                                    <a className="btn" href="https://www.instagram.com/mevishnusagar/" ><i
                                        className="fa fa-instagram fa-sm"></i>
                                    </a>
                                </div>  
                            </div>
                        </div>
                        <div className="mobile-header sticky-top ">
                            <div className="logo-container">
                                <Link href="/home"><img src="assets/images/black-height-updated.png" className="mobile-logo" /></Link>
                            </div>
                            <div className="menu-button">
                                <input type="checkbox" id="burger-toggle" />
                                <label htmlFor="burger-toggle" className="burger-menu">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </label>
                                <div className="menu ">
                                    <div className="menu-inner">
                                        <ul className="menu-nav">
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/"><span>
                                                <div>Home</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/portraits"><span>
                                                <div>Portraits</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/fourthpage"><span>
                                                <div>Landscape</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/automotive"><span>
                                                <div>Automotive</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/commercial"><span>
                                                <div>Commercial</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/about"><span>
                                                <div>About</div>
                                            </span></a></li>
                                            <li className="menu-nav-item"><a className="menu-nav-link" href="/contact-me"><span>
                                                <div>Contact Me</div>
                                            </span></a></li>
                                            <li>
                                                <div className="social-icons">
                                                    <div>
                                                        <a className="btn" href="http://www.facebook.com/profile.php?id=" ><i
                                                            className="fa fa-facebook fa-sm"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="btn" href="http://www.facebook.com/profile.php?id=" ><i
                                                            className="fa fa-twitter fa-sm"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="btn" href="http://www.facebook.com/profile.php?id=" ><i
                                                            className="fa fa-instagram fa-sm"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="sgr-logo">
                                        <img src="assets/images/sign.png" className="sign" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
