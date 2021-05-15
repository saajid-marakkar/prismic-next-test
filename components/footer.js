import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function footer() {
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="assets/css/fourthpage.css" />
            <link rel="stylesheet" href="assets/css/animation.css" />
            <script type="text/javascript" src="assets/js/colcade2.js"></script>
        </Head>
        <div>
            <div className="text-center footer">
                <img src="assets/images/BLACK.png" className="logo"></img>
            </div>
        </div>
    </div>
    )
}

export default footer
