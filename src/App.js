import React from 'react';
import './App.css';
import main from './main.png';
import main2 from './main2.png';
import Card from './Card';
import Card2 from './Card2';
import main3 from './i5.png';
import main4 from './i6.jpg';

function App() {
    return (
      <div className="m1">
        <nav className="m2">
           <a> <img src={main} width="150" height="70" /> </a>
            <a> India </a>
            <a style={{color:"red"}}> Consumer|Business</a>
            <a>  <img src={main2} width="15" height="15" /> </a>
            <a style={{color:"red"}}> ENG </a>
        </nav>
          <div className="m3">
             <a>Products</a>
              <a>Where to Buy</a>
              <a>Servicr Network</a>
              <a>Extended Warranty</a>
              <a>Promotions</a>
              <a>Press Room</a>
              <a>Contact</a>
              <a>Careers</a>
              <a>Warranty</a>
              <a>Support</a>
        </div>
        <div className="m4">
        </div>
        <br/>
        <div>
          <Card/>
        </div>
        <br/>
        <div className="t5">
          <div className="m5">
            <a>  <img src={main3} width="362" height="320" /> </a>
          </div>
          <div className="m6">
              <h1>PIXMA PRO-200</h1>
              <p>This 8-colour dye ink printer delivers a wider colour gamut with rich <br/> 
              colour expression in red and blue zones. Unique Chroma Optimizer gives <br/>
               photographs a uniform glossiness which regulates surface reflection to <br/>
               prevent bronzing effect for a professional-lab look and feel.</p>
              <button className="b1">View Products</button> 
          </div>
        </div>
        <br/>
        <div className="m7">
            <button className="b2">View more Products > </button> 
        </div>
        <br/>
        <br/>
        <div className="m8">
          <h1>News & Press Release</h1>
        </div>
        <br/>
        <div className="t6">
          <div className="m9">
            <a>  <img src={main4} width="362" height="320" /> </a>
          </div>
          <div className="m10">
              <h1>Canon and IBM Japan Form Joint Business <br/> 
              Operation Utilizing Volumetric Video Technology <br/>
              to Promote The Visual And Performing Arts</h1>
              <p className="text1">
              07 Jul 2021 — Canon and IBM Japan Form Joint Business Operation <br/>
              Utilizing Volumetric Video Technology to Promote The Visual <br/>
              And Performing Arts
              </p>
              <button className="b3">Read More</button> 
          </div>
        </div>
        <br/>
        <div className="m18">
          <Card2/>
        </div>
        <br/>
         <div className="m7">
            <button className="b2">View more news & press Release ></button> 
        </div>
        <br/>
        <div className="mn20">
            <div>
              <h1>Company</h1> 
              <a>About Us</a> <br/>
              <a>Corporate Social responsibility</a> <br/>
              <a>Social Media Sites</a> <br/>
              <a>Quality,Environment,Health and Safety</a> <br/>
              <a>E-Waste</a> <br/>
              <a>Diversity</a> <br/>
              <a>Press Room</a> <br/>
              <a>Terms of Use</a> <br/>
              <a>Privacy Policy</a> <br/>
              <a>Anti-Bribery&Anti-Corruption Policy</a> <br/>
              <a>Policy of Vigil Mechanism</a><br/>
              <a>FAQ</a><br/>
            </div>
            <div>
              <h1>Products</h1> 
              <a>Cinematography</a> <br/>
              <a>Photography</a> <br/>
              <a>Priting</a> <br/>
              <a>Scanning</a><br/>
              <a>Others</a><br/>
            </div>
            <div>
              <h1>Servies</h1> 
              <a>Anti-Counterfeit</a> <br/>
              <a>CIS Store</a> <br/>
              <a>eMaintenance</a> <br/>
              <a>Extended Warranty</a> <br/>
              <a>Labour Charges</a> <br/>
              <a>Product Warranty</a> <br/>
              <a>Servies Network</a> <br/>
              <a>Where To Buy</a><br/>
            </div>
            <div>
              <h1>Your Canon + You</h1> 
              <a>Your Canon + You</a> <br/>
              <a>Camera Catalogue</a> <br/>
              <a>Compact Camera Tips</a> <br/>
              <a>EOS Tips</a> <br/>
              <a>PIXMA Tips</a> <br/>
              <a>Printer Catalogue</a> <br/>
              <a>Scanner Tips</a><br/>
            </div>
            <div>
              <h1>Support & Downloads</h1> 
              <a>Support & Downloads</a> <br/>
            </div>
            <div>
              <h1>Other Canon Sites</h1> 
            </div>
        </div>
      </div>
    );
};

export default App;