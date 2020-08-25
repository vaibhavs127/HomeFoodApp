import React ,{ Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import fire from '../../Services/fire';
import './Registration.css';
import MainPage from '../MainPage/MainPage';
import {Redirect, Link} from 'react-router-dom';
import swal from 'sweetalert';

let data;
class Registration extends Component {
    constructor(props) {
        super(props);
        this.SignUp=this.SignUp.bind(this);
        this.SaveData=this.SaveData.bind(this);
    this.state = { 
            name:'',
            phoneNo:'',
            email:'',
            password:'',
            confirmPassword:'',
            showModal: true,
            redirect: false   
         }
    }

SignUp = (e) =>{
            e.preventDefault();
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
              swal({
                  title: "Registration successful",
                  text: "welcome",
                  icon: "success",
                });
              this.setState({ redirect: true });
              console.log(u)
            })
            .catch((err) => {
             swal({
                  title: "Registration failed",
                  text: "try again",
                  icon: "error",
                }); 
            console.log(err);
            });
          }


   getInitialState=()=> {
    return { showModal: true };
  }

 close=()=> {
    this.setState({ showModal: false });
  }

   SaveData = (Name,Phone,Email,password,confirmPassword) =>{


            let NewData = data.push()
            NewData.set({
                

                Name:this.state.Name,

                Phone:this.state.Phone,

                Email:this.state.Email,

                Password:this.state.Password,

                confirmPassword:this.state.confirmPassword

            })
            
              
            
            
    }
   
                
                    HandleName = (event) =>{
                        this.setState({
                            Name:event.target.value
                        })
                    }

                    HandlePhone = (e) =>{
                        this.setState({
                            Phone:e.target.value
                        })
                    }

                    HandleEmail = (e) =>{
                        this.setState({
                            Email:e.target.value
                        })
                        this.setState({[e.target.name]: e.target.value});
                    }

                     HandlePassword = (e) =>{
                        this.setState({
                            Password:e.target.value
                        })
                        this.setState({[e.target.name]: e.target.value});
                    }

                     HandleConfirmPass = (event) =>{
                        this.setState({
                            confirmPassword:event.target.value
                        })
                    }
   
 

  render() {
    data = fire.database().ref('/UserData');

    const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/SearchForm'/>;
     }
  
   
    
    return (
      <div>
        <MainPage />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.SignUp}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" onChange={this.HandleName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" onChange={this.HandlePhone} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control onChange={this.HandleEmail} type="email" name="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  onChange={this.HandlePassword} type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" onChange={this.HandleConfirmPass} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.SaveData} style={{marginLeft:"1px"}} >
                    Register
                </Button>
                <Button onClick={this.close} className="float-right btn btn-danger" style={{background:"#fc6667"}}>Close</Button>
                <hr/>
                <Link to="/Login" style={{marginLeft:"170px"}}>Click here to Login</Link>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Registration