import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Newcard.css';
import Card from './Card';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './Modal';
import './Modal.css';
import visa from '../../Images/visa.jpg';
import rupay from '../../Images/rupay.png';
import mestro from '../../Images/mestro.jpg';
import AX from '../../Images/AX.jpg';
import zeto from '../../Images/zeto.png';
import './PaymentForm.css';





class Newcard extends Component{

        constructor (props){
                super(props);
        
                this.state = {
                        CardLayouts: [],
                        show: false,  
                        
                }
        }
        
        
        

        
        handleSubmit = e =>{

                e.preventDefault();


                var Cardno = e.target[0].value;
                var Cardexp = e.target[1].value;
                var Cardtype = e.target[2].value;
                var Cardicon = e.target[3].value;

                // console.log(Cardno);
                // console.log(Cardexp);
                // console.log(Cardtype);
                // console.log(Cardicon);

                
                 this.addCardLayout({Cardexp,Cardno,Cardtype,Cardicon});
                
                //this.addCardLayout={(props) => Cardexp(Cardexp),Cardno(Cardno), Cardtype(Cardtype), Cardicon(Cardicon)};
                
                // Newcard.cardLayout();
                // Newcard.hideModal();
                // <addCardLayout Cardno={Cardno} Cardexp={Cardexp} Cardtype={Cardtype} Cardicon={Cardicon}/>
               
        };



        showModal = () => {
                this.setState({ show: true });
        };
                
        hideModal = () => {
                this.setState({ show: false });
        };
                
        addCardLayout = (props) => {
        

        this.setState({
                // CardLayouts: [...this.state.CardLayouts, <CardLayout Cardno={props.Cardno} Cardtype={props.Cardtype} Cardexp={props.Cardexp} Cardicon={props.Cardicon}/>]
                CardLayouts: [...this.state.CardLayouts, <Card cardno={props.Cardno} cardtype={props.Cardtype} cardexpiry={props.Cardexp} price="$216" src={props.Cardicon}/>
        ]

        })

                
                // console.log(props.Cardno);
                // console.log(props.Cardexp);
                // console.log(props.Cardtype);
                // console.log(props.Cardicon);

        };

        
        render(){

        return (
                <div>
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                                {/* <PaymentForm/> */}
                                <div className="cardform">
                                <h1 className="Heading">Add Card Details</h1>
                                
                                <form className="form dib" id="myform" onSubmit={this.handleSubmit}>
                                        <label className="tc input">Enter Card number</label>
                                        <input className="cvv tc input" type="text" placeholder="e.g. 123456789456" required /><br/>
                                        
                                        <label className="tc input">Enter Expiry Date</label>
                                        <input className="cvv tc input" type="text" placeholder="e.g. 6/20" required /><br/>

                                        <label className="tl w-30 input">Select Card Type</label>
                                        
                                        <select name="cardtype" id="cardtype">
                                        <option value="CREDIT">Credit</option>
                                        <option value="DEBIT">Debit</option>
                                        </select>
                                        <br/><br/>


                                        <label className="input tl mr-4">Choose card</label>

                                        <select name="card" id="card">
                                                <option value={visa}>Visa</option>
                                                <option value={rupay}>Rupay</option>
                                                <option value={mestro}>Mestro</option>
                                                <option value={AX}>AX</option>
                                                <option value={zeto}>Zeto</option>
                                        </select>
                                        <br/><br/>
                                        <img src={visa} className="mr-4 tc" alt="visa" width="50px"/>
                                        <img src={rupay} className="mr-4 tc" alt="rupay" width="50px"/>
                                        <img src={mestro} className="mr-4 tc" alt="mestro" width="50px"/>
                                        <img src={AX} className="mr-4 tc" alt="AX" width="50px"/>
                                        <img src={zeto} className="mr-4 tc" alt="zeto" width="50px"/>
                                        <br/>
                                        <br/>
                                        <input type="submit" onClick={this.hideModal} className="btn btn-success tc" value = "submit"/>
                                        <br/>
                                        
                                </form>
                        </div>



                        </Modal>

                        {this.state.CardLayouts}
                        

                        <div className="cardDesign">
                                <div className="card w-100">
                                        <div className="card-body">
                                        <span><a className="btn button">+</a></span>
                                        <h5 className="card-title">Add New Card</h5>
                                        <p className="card-text">Save and Pay via Cards.</p>
                                        <button id="addbtn" className="btn btn-success button" 
                                        onClick={this.showModal}> ADD NEW </button>
                                        </div>
                                        
                                </div>
                        </div>

                        
                </div>
        

        )
        }
}

export default Newcard;

