import React,{Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import fire from '../../Services/fire';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MainPage from '../MainPage/MainPage';
import swal from 'sweetalert';
// import {GoogleLogin} from 'react-google-login';
import './Login.css';


class Login extends Component{
   
  constructor(props){
  super(props);
  this.Login=this.Login.bind(this);
  this.handleChange=this.handleChange.bind(this);
            this.state = {
            email:'',
            password:'',  
            showModal:true,
            redirect: false
            
         };  

  }
  

  Login = (e) =>{
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password)
            .then((u) => {
              swal({
                  title: "Login successful",
                  text: "welcome",
                  icon: "success",
                });
              this.setState({ redirect: true });
              console.log(u)
            })
            .catch((err) => {
              const {email , password }=this.state;
              let formvalid= true;
              if(!email)
              {
                formvalid=false;
                swal({
                  title: "Enter valid email",
                  text: "Try Again",
                  icon: "error",
                });
              }
              if(!password)
              {
                formvalid=false;
                swal({
                  title: "Enter valid password",
                  text: "Try Again",
                  icon: "error",
                });
              }
              if(email==false && password==false )
              {
                swal({
                  title: "Input fields cannot be empty",
                  text: "Try Again",
                  icon: "error",
                });
              }
            console.log(err);
            });
          }

  handleChange=(e)=>{
           this.setState({[e.target.name]: e.target.value});
         }
   getInitialState=()=> {
    return { showModal: false };
  }

 close=()=> {
    this.setState({ showModal: false });
  }

//  responseGoogle=(response)=>{
    
//       console.log(response);
//   };

  render() {
    
    
  
    const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/SearchForm'/>;
     }
     
    return (
      <div>
        <MainPage />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.Login} style={{marginLeft:"1px"}}  block>
                    Login
                </Button>
                <Button onClick={this.close} className="float-right btn btn-danger" id="hover" style={{background:"#fc6667"}} block>Close</Button>
                
                {/* <Button variant="secondary" size="lg" block style={{marginLeft:"1px"}}>
                <GoogleLogin
                  clientId="15128399311-0m57vgppfcjslb56voj046m6loirvs8b.apps.googleusercontent.com"
                  buttonText="Login"
                  onClick={this.responseGoogle}
                  size="lg"
                  block
                  />
                  </Button> */}
                <hr/>
                <Link to="/Registration" style={{marginLeft:"130px"}}>Don't have account? Click here</Link>
            </Form>
            
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Login