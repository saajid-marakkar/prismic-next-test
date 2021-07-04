import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function footer() {
    return (
        <div>
            <div>
                <div className="text-center footer">
                    <img src="assets/images/sign.png" className="sign"></img>
                </div>
            </div>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </div>
    )
}

export default footer
