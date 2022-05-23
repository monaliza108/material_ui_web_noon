import "./App.css";
import * as React from 'react';
import NavBar from "./Components/Navbar";
import Triggers_bar from "./Components/Triggers_bar.js";
import Slideshow from "./Components/slidebar";
import {Story_bar, Arrow_slider} from "./Components/Stories_content";

function AppBar() {
  return (
<>
      <div className="NavBar">
         <NavBar/></div>
      
      <div className="Triggers_bar">
        <Triggers_bar/></div>
        
  <div style={{ margin:"auto", position:"relative" , textAlign:"center", width:"100%"}}>
  <img src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png" alt="/welcome-new-user/" class="sc-egiyK cwhUbk" ></img></div>

        <div className="Slideshow">
          <Slideshow/></div>
        
        <div className="Stories">
            <Story_bar/> <Arrow_slider/></div>
        
</>
);
}
export default AppBar;
