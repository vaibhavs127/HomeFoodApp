import React, {useState} from "react";
import { useHistory, Redirect } from "react-router-dom";
import SocialFollow from '../MainPage/SocialFollow';
import '../MainPage/MainPage.css';
import './SearchForm.css';

function SearchForm() {

  const history = useHistory();

  const [formValue, setFormValue] = useState({
    location: {},
    name: "",
  });


  function onChangeValue(e) {
    const target = e.target;
    setFormValue((state) => ({ ...state, [target.name]: target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!formValue.name) {
      alert("Please enter valid name");
      
      return;
    }
    history.push(`/search?q=${encodeURIComponent(formValue.name)}`);
  }
 
 function logout(e){
   e.preventDefault();
   if(!Redirect)
   {
     return;
   }
        history.push('/');
  }

  return (
    <>
    {/* <Slider/> */}
     <div className="MainImg2">
     
                    <h3 className="Header">Home Food</h3>
                <div className="NavBar">
                    <ul>
                        <li>Search</li>
                        <li>About</li>
                        <li>My Cart</li>
                    </ul>
                </div>
                
                <form onSubmit={onSubmit}>
                    <input type="search" className="rcorners"
                            name="name"
                            placeholder="Search by name"
                            autoComplete={"off"}
                            onChange={onChangeValue}/>
                  <button type="submit" className="HotelBtn2" >Search</button> 
                  </form>
                    <button className="SignIn" onClick={logout}>Logout</button>    
                <SocialFollow />
            </div> 
     
    </>
  );
}
export default SearchForm;