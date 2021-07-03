import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default function apphead() {
    return (
        <div>
            {/* <div>
                <div className="text-center">
                    <img src="assets/images/BLACK.png" className="logo"></img>
                </div>
                <div className="nav text-center">
                    <Link href="/">Home</Link>
                    <Link href="/portraits">PORTRAITS</Link>
                    <Link href="/fourthpage">main</Link>
                </div>
            </div> */}
            <div class="header">
                <div class="logo">
                    <img src="assets/images/BLACK.png" class="main-page-logo"></img>
                </div>
                <div class="navbar">
                    <Link class="nav-item" href="/">
                        Home
                    </Link>
                    <Link class="nav-item" href="/portraits">
                        Portraits
                    </Link>
                    <Link class="nav-item" href="/fourthpage">
                        Gallery
                    </Link>
                    <Link class="nav-item" href="/fourthpage">
                        Contact
                    </Link>
                </div>
                {/* <div class="social">
                    <div class="social-item">
                        <a href="http://twitter.com/adambirdyy" target="_blank" class="social-item-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -150 1000 1000" class="social-icon">
                                <path fill="currentColor"
                                    d="M904 228q-37 54-90 93v23q0 73-21 145t-64 139-103 117-144 82-181 30q-151 0-276-81 19 3 43 3 126 0 224-77-59-2-105-36t-64-89q19 2 34 2 24 0 48-6-63-13-104-62T60 396v-2q38 21 82 23-37-25-59-64t-22-86q0-49 25-91 68 83 164 133t208 55q-5-21-5-41 0-75 53-127t127-53q79 0 132 57 61-12 114-44-20 64-79 100 52-6 104-28z">
                                </path>
                            </svg>
                        </a>
                        <ul class="list-unstyled list-inline social text-center">
                            <a class="btn" href="http://www.facebook.com/profile.php?id=" style="color: whitesmoke;"><span
                                class="fa fa-facebook fa-sm"></span></a>
                            <a class="btn" href="https://instagram.com/laxer_education_?igshid=1gfor2s28e6cw"
                                style="color: whitesmoke;"><span class="fa fa-instagram fa-sm"></span></a>
                            <a class="btn" href="http://youtube.com/" style="color: whitesmoke;"><span
                                class="fa fa-youtube fa-sm"></span></a>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div class="mobile-header">
                <div class="logo-container">
                    <img src="assets/images/BLACK.png" className= "mobile-logo" />
                </div>
                <div class="menu-button">
                    <input type="checkbox" id="burger-toggle" />
                    <label for="burger-toggle" class="burger-menu">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </label>
                    <div class="menu">
                        <div class="menu-inner">
                            <ul class="menu-nav">
                                <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                                    <div>Home</div>
                                </span></a></li>
                                <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                                    <div>Profile/account</div>
                                </span></a></li>
                                <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                                    <div>Profile/account</div>
                                </span></a></li>
                                <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                                    <div>Profile/account</div>
                                </span></a></li>
                         
                                <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                                    <div>Contact</div>
                                </span></a></li>
                            </ul>
                        </div>
                        <div id="sgr-logo">
                            <img src="assets/images/sign.png" class="sign" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
