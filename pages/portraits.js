import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Link from 'next/link'

function Portraits() {
    return (
        <div className="container">
            <div className="portraits-page">
                <div className="portraits-page-menu">
                    <div className="portraits-page-menu-item">
                        <Link href="indoor">
                            <img src="assets/images/indoor.jpeg" className="image-text-container"/>
                        </Link>
                        <div>
                            <h1>INDOOR</h1>
                        </div>
                    </div>
                    <div className="portraits-page-menu-item">
                        <Link href="outdoor">
                            <img src="assets/images/outdoor.jpeg" />
                        </Link>
                        <div>
                            <h1>OUTDOOR</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portraits


