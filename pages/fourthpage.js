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
    
    
    
  return {
    props: {
      images: images
      
    },
  };
}

function fourthpage({ images }) {
    useEffect(() => {
       
        var grid = document.querySelector('.grid');
        var colc = new Colcade( grid, {
        columns: '.grid-col',
        items: '.grid-item'
        });
        

    } );
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="assets/css/fourthpage.css" />
            
            <script type="text/javascript" src="assets/js/colcade2.js"></script>
            
        </Head>
        <div class="gallery-container">
                <h1>My Photographs</h1>

                <div class="grid">
                    <div class="grid-col grid-col--1">

                    </div>
                    <div class="grid-col grid-col--2">

                    </div>
                    <div class="grid-col grid-col--3">

                    </div>
                    <div class="grid-col grid-col--4">

                    </div>
                    {images.results.map((image, index) => (
                  
                
                        (image.data.images_group.map((pic, index) => (
                            <div class="grid-item" key={index}>
                                <img src={pic.image.url} className="images" />
                            </div> 
                        )))
                    ))} 
                </div>
                
            </div>
            
        </div>
        
    )
}

export default fourthpage
