import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
export default function Home({ images }) {
  return (
    <div >
      <Head>
        <link rel="stylesheet" href="assets/css/style.css"/>
      </Head>
      <div className="">
            <div className=" text-center" style={{display:"flex", justifyContent:"center"}}>
              <h1 >Vishnu Sagar Photography</h1>
            </div>
          </div>
          <div >
            <div className="parent">
              <div className="photos">
                {images.results.map((image, index) => (
                  
                
                  (image.data.images_group.map((pic, index) => (
                         <img src={pic.image.url} className="images" />
                        
                    )))
                ))} 
              </div>
            </div>
          </div>
    
    </div>
  )
}
