import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default function apphead() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="assets/css/fourthpage.css" />
                <link rel="stylesheet" href="assets/css/animation.css" />
            </Head>
            <div>
                <div className="text-center">
                    <img src="assets/images/BLACK.png" className="logo"></img>
                </div>
                <div className="nav text-center">
                    <Link href="/">home</Link>
                    <Link href="/portraits">portraits</Link>
                    <Link href="/fourthpage">main</Link>
                </div>
            </div>
        </div>
    )
}
