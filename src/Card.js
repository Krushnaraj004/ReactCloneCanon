import React from 'react';
import image from './i2.png';
import image2 from './i3.png';
import image3 from './i4.png';

const Card =(props)=>{
	return(
	  	<div className="mn">
			<div className="mn1">
				<a><img src={image} width="360" height="316"/> </a>
				<p className="n1" style={{fontSize:"10"}}>EOS 90D (EF-S18-55mm <br/>
				  f/3.5-5.6 IS STM)</p>
			</div>

			<div className="mn2">
				<a><img src={image2} width="360" height="316"/> </a>
				<p className="n2" style={{fontSize:"10"}}>PIXMA G2010</p>
			</div>

			<div className="mn3">
				<a><img src={image3} width="360" height="316"/> </a>
				<p className="n2" style={{fontSize:"10"}}>RF14-35mm f/4L IS USM</p>
			</div>
		</div>	
		);
};

export default Card;