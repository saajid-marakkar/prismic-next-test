import React from 'react'
import Link from 'next/link'
export default function apphead() {
    return (
        <div>
            <div>
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
