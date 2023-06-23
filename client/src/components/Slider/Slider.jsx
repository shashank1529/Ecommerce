import React, { useState } from 'react'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import "./Slider.scss"
const Slider = () => {
  const data=[
  
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",

  ];
  const [currSlide,setSlide]=useState(0);
  const prevslide = () => {
    if (currSlide === 0) {
      setSlide(2);
    } else {
      setSlide((prev) => prev - 1);
    }
  };
  
const nextslide=()=>{
  if(currSlide===2){

    setSlide(0)
  }
  else{
    setSlide((prev) => prev + 1);
  }
}
  return (
    <div className="slider">
 <div className="container" style={{transform:`translateX(-${currSlide * 100}vw)`}}>
  <img src={data[0]} alt="" />
  <img src={data[1]} alt="" />
  <img src={data[2]} alt="" />
 </div>
 <div className="icons">
  <div className="icon" onClick={prevslide}>
    <NavigateBeforeRoundedIcon/>
  </div>
  <div className="icon" onClick={nextslide}>
   <NavigateNextRoundedIcon/>
  </div>
 </div>
      </div>
  )
}

export default Slider