import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type","home_page")
    );
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

function home({ image_links }) {

    const [bgsrc, setBgsrc] = useState("")
    const [imagelinks, setImagelinks] = useState(image_links)
    
    useEffect(() => {
        console.log("use-effect worked")
        startSlideShow(0)
        
      },[]);

    const startSlideShow = (index) => {
        const newIndex = index === image_links.length ? 0 : index
       setBgsrc(image_links[newIndex])
        
        setTimeout (() => startSlideShow(index+1), 10000)
    }  
    const nextImage = () => {
        let size = imagelinks.length
        // console.log(size)
        console.log(bgsrc)
        // var index = imagelinks.findIndex(img => img == bgsrc);
        let i=0;
        let index = 0;
        for (i=0; i<size; i++){
            if(imagelinks[i] === bgsrc){
                index = i;
            }
            else{
                // console.log("if stat imagelinks",image_links[i])
                // console.log("if stat bgsrc:",bgsrc)
            }
        }
        // var index = 3;
        // console.log(index)
        if (index == size - 1) {
            index = 0;
        }
        else {
            index++
        }
        // console.log(index)
        var nextImage = imagelinks[index]
        // console.log("next image: ",nextImage)
        setBgsrc(nextImage)
        // console.log("next image: ",nextImage)
        // setImagesrc(nextImage)
        // console.log("image link:",imagesrc)
    }

    return (
        <div className="slider-container">
            <div className="index-page" style={{backgroundImage:"url("+bgsrc+")"}} >
            {/* <div className="index-page" style={{backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/58feac6946c3c4afb89e0cd4/1561021077645-7985L45T7EB47LPOVJG5/DSC06163-Edit.jpg')"}} > */}
                {/* <div className="right" onClick={() => nextImage()} title="Next" style={{color:"black"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className="left" onClick={() => prevImage()} title="Previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default home
