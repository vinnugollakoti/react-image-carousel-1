import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const image=images
    let [curr,setCurr]=useState(0)
    return(
        <>
            <img src={image[curr].img}></img>
            <h1 className="title">{image[curr].title}</h1>
            <h2 className="des">{image[curr].subtitle}</h2>
            <div className="bu">
            <div className="no">
            <ArrowBackIosIcon onClick={()=>{
                let check = curr == 0 ? 2 : curr-1;
                setCurr(check)
            }} className="n"/>
            </div>
            <div className="no">
            <ArrowForwardIosIcon onClick={()=>{
                let check=curr == 2 ? 0 : curr+1;
                  setCurr(check);
            }} className="n"/>
            </div>
             </div>
        </>
    )

    
}

export default Carousel;