import React from 'react'
import Head from 'next/head'

function contactMe() {
    return (
        <div >
            <Head>
                <link href="/assets/css/contactme.css" rel="stylesheet"/>
            </Head>
            <div >
                <div className="contact-form-section">
                    <div className="form-title">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contact-form">
                        <div className="first-name-last-name">
                            <div class="first-name">
                                <label htmlFor="first">First Name</label>
                                <input type="text" id="first" placeholder="enter your first name"/>
                            </div>
                            <div class="last-name">
                                <label htmlFor="last">Last Name</label>
                                <input type="text" id="last" placeholder="enter your last name"/>
                            </div>
                        </div>
                        <div class="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="enter your address email"/>
                        </div>
                        <div className="phone-location">
                            <div class="phone">
                                <label htmlFor="first">Phone</label>
                                <input type="text" id="first" placeholder="enter your phone number"/>
                            </div>
                            <div class="location">
                                <label htmlFor="last">Location</label>
                                <input type="text" id="last" placeholder="enter where are you from"/>
                            </div>
                        </div>
                        <div class="email">
                            <label htmlFor="email">My favourite part: youselves!</label>
                            <input type="email" id="email" placeholder="tell me about youselves"/>
                        </div>
                        <div class="email">
                            <label htmlFor="email">About Session</label>
                            <input type="email" id="email" placeholder="tell me which session or what kinda photo service are you looking for?"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default contactMe
