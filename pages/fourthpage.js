import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
export async function getStaticProps()
{
  
  const images = await Client().query(
    Prismic.Predicates.at("document.type","images")
  );
    console.log("blog page",images.results)

    console.log("blog page",images.results[0].data.images_group[0].image.url)
    let image_links = [];
    {images.results.map((image, index) => (
                  
                
        (image.data.images_group.map((pic, index) => (
            image_links.push(pic.image.url)
        )))
    ))} 
    console.log("image url",image_links[1])
    
  return {
    props: {
        image_links: image_links

      
    },
  };
}

function fourthpage({ image_links }) {
    const [flag,setFlag] = useState(3)
    const [width,setwidth] = useState(0)
    useEffect(() => {
       
        var grid = document.querySelector('.grid');
        var colc = new Colcade( grid, {
        columns: '.grid-col',
        items: '.grid-item'
        });
        setwidth(window.screen.width)
    } );
    useEffect(() => {   
        if(window.screen.width<768)
        {
            setFlag(2)
        }
        else{
            setFlag(3)
        }
    },[width]);
    
    let inputStyle = {
        borderRight: "7px solid white",
        borderBottom: "7px solid white"
    };
    let inputStyle2 = {
        borderBottom: "7px solid white"
    };
    return (

        <div>
        <Head>
            <link rel="stylesheet" href="assets/css/fourthpage.css" />
            
            <script type="text/javascript" src="assets/js/colcade2.js"></script>
            
        </Head>
        <div className="gallery-container">
                <h1>My Photographs</h1>
                {console.log(flag)}
                <div className="grid">
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
                            
                            <img src={image_url} classNameName="images" style={ flag == 2 && index % 2 ? inputStyle2 : inputStyle} />
                        </div> 
                    ))} 
                    {/* {  for(i=0;image_links[i]!=null;i++){
                        (<div className="grid-item" key={index}>
                        <img src={image_url} classNameName="images" />
                        </div>)
                    }
                        
                        
                     
                    } */}
                </div>
                
            </div>
            
        </div>
        
    )
}

export default fourthpage
