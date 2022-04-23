import React from 'react'
import Head from 'next/head'

function contactMe() {
    return (
        <div >
            <Head>
                <link href="/assets/css/contactme.css" rel="stylesheet" />
            </Head>
            <div >
                <div className="contact-form-section">
                    <div className="form-title">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contact-form">
                        <div className="dual-input">
                            <div class="first-name">
                                <label htmlFor="first">First Name</label>
                                <input type="text" id="first-name-input" placeholder="enter your first name" />
                            </div>
                            <div class="last-name">
                                <label htmlFor="last">Last Name</label>
                                <input type="text" id="last-name-input" placeholder="enter your last name" />
                            </div>
                        </div>
                        <div class="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email-input" placeholder="enter your address email" />
                        </div>
                        <div className="dual-input">
                            <div class="phone">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone-input" placeholder="enter your phone number" />
                            </div>
                            <div class="location">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location-input" placeholder="enter where are you from" />
                            </div>
                        </div>
                        <div class="favourite-part">
                            <label htmlFor="favourite-part">My favourite part: youselves!</label>
                            <textarea id="favourite-part-input" placeholder="tell me about youselves" />
                        </div>
                        <div class="about">
                            <label htmlFor="about">About Session</label>
                            <textarea id="about-input" placeholder="tell me which session or what kinda photo service are you looking for?" />
                        </div>
                        <div class="sub">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactMe
