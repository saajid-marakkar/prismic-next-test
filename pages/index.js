import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



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
    console.log("image url", image_links[1])

    return {
        props: {
            image_links: image_links


        },
    };
}

function Home({ image_links }) {
    const [flag, setFlag] = useState(3)
    const [width, setwidth] = useState(0)
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState("none")
    const [open, setOpen] = useState("")
    const [imagesrc, setImagesrc] = useState(" ")
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    useEffect(() => {

        var grid = document.querySelector('.grid');
        var colc = new Colcade(grid, {
            columns: '.grid-col',
            items: '.grid-item'
        });
        setwidth(window.screen.width)
        setTimeout(() => {
            setLoading(true)
        }, 1000);
        setTimeout(() => {
            setDisplay("flex")
        }, 2000);
    });
    useEffect(() => {
        if (window.screen.width < 768) {
            setFlag(2)
        }
        else {
            setFlag(3)
        }
    }, [width]);

    let inputStyle = {
        borderRight: "8px solid white",
        borderBottom: "8px solid white"
    };
    let inputStyle2 = {
        borderBottom: "8px solid white"
    };
    const displayImage = (image_url) => {
        setImagesrc(image_url)
        const modalp = document.querySelector(".modalp");
        modalp.classList.add("open");

        modalp.addEventListener("click", (e) => {
            if (e.target.classList.contains("modalp")) {
                modalp.classList.remove("open");
            }
        })
    }
    const closeDisplayImage = (e) => {
        // const modalp = document.querySelector(".modalp");
        // if (e.target.classList.contain("modalp")) {
        //     modalp.classList.remove("open");
        // }
    }

    return (

        <div>
            {console.log(loading)}
            <div className="gallery-container">
                {console.log(flag)}
                {
                    loading == false ?
                        <div className="gallery-container" >
                            <div className="text-center">
                                <Spin indicator={antIcon} />
                                <h3>loading..</h3>
                            </div>
                            <div className="grid">

                            </div>
                        </div>
                        :
                        <div className="grid" style={{ display: display }}>
                            <div className="grid-col grid-col--1">

                            </div>
                            <div className="grid-col grid-col--2">

                            </div>
                            <div className="grid-col grid-col--3">

                            </div>
                            <div className="grid-col grid-col--4">

                            </div>
                            {image_links.map((image_url, index) => (

                                <div className="grid-item" key={index}>

                                    <img src={image_url} className="images" style={flag == 2 && index % 2 ? inputStyle2 : inputStyle} onClick={() => displayImage(image_url)} />
                                </div>
                            ))}
                        </div>
                }
            </div>
            <div className="modalp"  >
                <img src={imagesrc} className="full-img" />
            </div>


        </div>

    )
}

export default Home
