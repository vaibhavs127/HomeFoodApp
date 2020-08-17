import React, { Component } from 'react';
import './Demo.css';
import {Data} from "./Demo3"; 

class Demo extends Component {
	render() {
		return (
			
            <div>
			
                {
					
					Data.map((experience, i) => {
						return (
							<div key={i} >
								<div>
									<a href={experience.Name}>
										<img src={experience.Image} alt={experience.companyName} style={{width:"20%"}} />
									</a>
									<div>
										<div>
											<h3>Name:{experience.Name}</h3>
											<h3>Rs:{experience.Price}</h3>
											<h6>{experience.Info}</h6>
                                            <h6>{experience.vegnonveg}</h6><hr />
										</div>
											
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Demo;