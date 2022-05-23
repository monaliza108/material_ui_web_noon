import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url:
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg"
  },
  {
    url:
      "https://k.nooncdn.com/cms/pages/20220520/8f9e4b2d2aa601f767b0b612c48be377/en_dk_uae-hero-01.jpg",
  },
  {
    url:
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/3/fd2ec981-19c5-4fb8-af87-155ce3d5eb351643900805737-Desktop-banner_sale-live.jpg"
  }
];

const Slideshow = () => {
  return (
<>
  {/* //slide_show */}
    <div className="slide-container" scale={0.4}>
      <Slide style={{ marginLeft: "5ch", width: "70%" }}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})`, height: "30ch" }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    
    {/* //slide_image */}
    <div style={{float:"left",marginTop:"-16.86%", marginLeft: "72.12%" }}>
    <img style={{width: "44ch" , height :"30ch"}} src="https://k.nooncdn.com/cms/pages/20220520/dd5a74909ee9355b9598b33954302fea/en_dk_uae-fash-01.png" alt="/fashion-men" class="sc-egiyK cwhUbk"></img>
    </div>
    
</>
  );
};

export default Slideshow;
