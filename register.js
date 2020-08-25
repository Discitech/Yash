import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./login.css";

class Register extends Component{

	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
			
				<div className="main-container">		
			<div className="base-container-1">
			<h1>Sign Up Form</h1>
			<h3>It only takes 3 minutes!</h3>
			<form className="form-deco">				
		       <input type="text" className="input-4" name="username" placeholder="username" onChange={(event)=> {this.setState({name:event.target.value})}}/>
			   <input type="password" className="input-4" name="password" placeholder="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
			   <button type="button" onClick={this.submit} className="btn-4">Sign Up</button>
			   <a href="#">Forgot Pasword ?</a>
		    </form>
		    <div className="form-bottom-2">
		    	<p>By signing up, you agree to our terms of services and privacy policy.</p>
		    	<p>Already have an account?<a href="#">Log In</a></p>
		    </div>
			     
	
	   </div>
<div className="vertical-line"><p className="or">OR</p></div>
	   <div className="base-container-2">
	   <h1>Other ways to Login</h1>
<div className="adjust-4">
			              
			                 <div className="envolope">
			                   <span  className="logo-color-1"><FontAwesomeIcon icon={faFacebook} /></span>
			                   <a href="#">Facebook Login</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color-1"><FontAwesomeIcon icon={faGoogle}/></span>
			                   <a href="#">Google Login</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color-1"><FontAwesomeIcon icon={faInstagram} /></span>
			                   <a href="#">Instagram Login</a>
			                 </div>
			                 </div>
	   </div>
	   <p>Don't worry, we won't post anything without your permission.</p>
	   </div>
	 
	 </div>
			);
	}
	}
export default Register;