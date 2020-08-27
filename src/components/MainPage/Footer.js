import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div style={{marginTop:"180px",height:"420px"}}>
	    <footer className="footer_widget" style={{height:"420px"}}>
		<ul>
			<div className="location">
				<h4>Location</h4>
				<ul>
					<li>Mumbai</li>
					<li>Pune</li>
					<li>Kolhapur</li>
                    <li>Bangalore</li>
					<img src=""/>
				</ul>
			</div>
			<div className="company">
				<h4>Company</h4>
				<ul id="comp_list">
					<a id="comp_item1" href="#Our_Story"><li>Our Story</li></a>
					<a id="comp_item2" href="#Mission"><li>Mission</li></a>
					<a id="comp_item3" href="#Journal"><li>Journal</li></a>
					<a id="comp_item4" href="#Careers"><li>Careers</li></a>
				</ul>
			</div>
			<div className="Support">
				<h4>Support</h4>
				<ul id="sup_list">
					<a id="sup_item1" href="#FAQ"><li>FAQ</li></a>
					<a id="sup_item2" href="#Contact_Us"><li>Contact Us</li></a>
					<a id="sup_item3" href="#Policies"><li>Policies</li></a>
				</ul>
			</div>
			<div className="studio">
				<h4>HOME FOOD</h4>
					<p>We are HOME FOOD we Deliver Awsome 
					Food on your destination</p>
			</div>
		</ul>
		<p className="rights">2020 HOME FOOD - All Rights Reserved</p>

	</footer>
</div>
    )
}
