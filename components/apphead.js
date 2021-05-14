import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function apphead() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="assets/css/fourthpage.css" />
            </Head>
            <div className="gallery-container" >
                <div className="text-center">
                    <img src="assets/images/BLACK.png" className="logo"></img>
                </div>
                <div className="nav text-center">
                    <Link href="/">home</Link>
                    <Link href="fourthpage">main</Link>
                </div>
            </div>
        </div>
    )
}
