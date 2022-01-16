import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Link from 'next/link'




export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "home_page")
    );
    console.log("blog page", images.results)

    console.log("blog page", images.results[0].data.images_group[0].image.url)
    let image_links = [];
    {
        images.results.map((image, index) => (


            (image.data.images_group.map((pic, index) => (
                image_links.push(pic.image.url)
            )))
        ))
    }
    

    return {
        props: {
            image_links: image_links


        },
    };
}

function Portraits({ image_links }) {

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


