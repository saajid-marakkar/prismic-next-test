import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
export async function getStaticProps()
{
  
  const images = await Client().query(
    Prismic.Predicates.at("document.type","images")
  );
    console.log("blog page",images.results)
    
    
    
  return {
    props: {
      images: images
      
    },
  };
}
function secondpage({ images }) {
    return (
        <div>
            <Head>
                
                <link rel="stylesheet" href="assets/css/flexmasonry.css" />
                
        
            </Head>
            <div className="container">
                <div className="container">
                    <div className="container">
                        <div className="container">
                            <div className="container">
                                <div className="demo">
                                    <div className="grid">
                                        {images.results.map((image, index) => (
                                            (image.data.images_group.map((pic, index) => (
                                                <div><div className="inner"><img src={pic.image.url} alt="" /></div></div>
                                            )))
                                        ))} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
            
            
            <script src="assets/js/flexmasonry.js"></script>
    </div>
    )
}

export default secondpage
