import React, { Component } from "react";
import Particles from "react-particles-js";
import Zoom from "react-reveal/Zoom"
import Satty from "./images/satellite-solid.svg"







class LandingPage extends Component {
  render() {
    
    return (
        <div className="back-holder">
        <div className="particle-header">
        <Zoom>
        <h1 className="blog-title">Get Started</h1>
        </Zoom>
     
        
        <Particles />
        
       
        </div>  


        
        
        <div className="second-half">
        <div className="satty-holder">
        <Zoom>
        <img src={Satty} className="satty"/>
        </Zoom>
        </div>
       <div className="button-holder">



            
            <Zoom>
            <button className="button-item">Click Me!</button>
         
            <button className="button-item">Click me 2!</button>
            
            
            <button className="button-item">Click Me 3!</button>
           
            <button className="button-item">Click me 4!</button>
            </Zoom>
            </div>
            </div>
        
            
        </div>
  
    
    )
}
}

export default LandingPage;
