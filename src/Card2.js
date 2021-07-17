import React from 'react';
import image4 from './i7.jpg';
import image5 from './i8.jpg';
import image6 from './i9.png';

const Card2 =(props)=>{
	return(
	  	<div className="mn11">
			<div className="mn12">
				<a><img src={image4} width="360" height="316"/> </a>
				
				<h1>Canon Launches its Widest 
				<br/> Native RF Ultra-wide Lens</h1>
				
				<p className="n13">
				29 Jun 2021 — The RF14-35MM F/4L IS USM 
				covers 14mm with 0.38x magnification at 
				 35mm in a compact lens design</p>
			</div>

			<div className="mn14">
				<a><img src={image5} width="360" height="316"/> </a>
				<h1>Canon India launches its mesmerizing new ad campaign titled, <br/> ‘Weddings by Canon’</h1>
				<p className="n15">19 Jun 2021 — The campaign video was <br/> 
				unveiled by film superstar Mammootty via<br/>
				 his Instagram and Facebook accounts</p>
			</div>

			<div className="mn16">
				<a><img src={image6} width="360" height="316"/> </a>
				<h1>Canon India expands its line up of photo printers for professional photographers, <br/> businesses & homes users</h1>
				<p className="n17">09 Jun 2021 — Launches new PIXMA G670, PIXMA G570, 
				 imagePROGRAF PRO-300 and PIXMA PRO-200 in <br/>
				 line with its objective of promoting <br/>the photo printing culture</p>
			</div>
		</div>	
		);
};

export default Card2;