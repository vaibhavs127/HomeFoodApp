import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WOW from 'wowjs';

class MoreInfo extends Component {

    componentDidMount() {
    new WOW.WOW().init();
    
  }

    render() {
        return (
            <div className="wow bounceIn" data-wow-duration="2s" data-wow-delay="2s" style={{display:"flex", marginTop:"-750px"}}>
            
                <Card  style={{ width: '18rem' , height:'23rem' ,marginLeft:"60px",background:"white" }} >
                                <Card.Img variant="top" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg"  height="150px"/>
                              
                                <Card.Body >
                                  <Card.Title style={{marginLeft:"-185px" ,marginTop:"160px"}}>Veg Pizza</Card.Title>
                                    <Card.Text style={{marginLeft:"-230px" ,marginTop:"30px", fontSize:"30px"}}>
                                      <b>Get 50% off...</b>
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft:"-195px" ,marginTop:"20px"}}>Order Food</Button>
                                
                                  </Card.Body>
                                  
                            </Card>
                            <Card style={{ width: '18rem' , height:'23rem' ,marginLeft:"60px",background:"white" }}>
                                <Card.Img variant="top" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg"  height="150px"/>
                              
                                <Card.Body >
                                  <Card.Title style={{marginLeft:"-185px" ,marginTop:"160px"}}>Chicken fry</Card.Title>
                                    <Card.Text style={{marginLeft:"-230px" ,marginTop:"30px", fontSize:"30px"}}>
                                      <b>Get 30% off...</b>
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft:"-195px" ,marginTop:"20px"}}>Order Food</Button>
                                
                                  </Card.Body>
                                  
                            </Card>
                            <Card style={{ width: '18rem' , height:'23rem' ,marginLeft:"60px",background:"white" }}>
                                <Card.Img variant="top" src="https://www.europeanbackdoors.com/wp-content/uploads/2016/02/being-veggie1.jpg"  height="150px"/>
                              
                                <Card.Body >
                                  <Card.Title style={{marginLeft:"-225px" ,marginTop:"160px"}}>Maharashtrian food</Card.Title>
                                    <Card.Text style={{marginLeft:"-230px" ,marginTop:"30px", fontSize:"30px"}}>
                                      <b>Get 40% off...</b>
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft:"-195px" ,marginTop:"20px"}}>Order Food</Button>
                                
                                  </Card.Body>
                                  
                            </Card>
                            <Card style={{ width: '18rem' , height:'23rem' ,marginLeft:"60px",background:"white" }}>
                                <Card.Img variant="top" src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg"  height="150px"/>
                              
                                <Card.Body >
                                  <Card.Title style={{marginLeft:"-215px" ,marginTop:"160px"}}>South Indian Food</Card.Title>
                                    <Card.Text style={{marginLeft:"-230px" ,marginTop:"30px", fontSize:"30px"}}>
                                      <b>Get 50% off...</b>
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft:"-195px" ,marginTop:"20px"}}>Order Food</Button>
                                
                                  </Card.Body>
                                  
                            </Card>
            </div>
            
        )
    }
}
export default MoreInfo;