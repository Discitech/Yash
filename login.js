import React,{Component} from 'react';
import loginImg from "../../login.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./login.css";
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';


class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			name: "",
			password:"",
			nameError: "",
			passwordError: ""
		}
		this.submit = this.submit.bind(this);
		this.valid = this.valid.bind(this);
	}
	valid(){
		if(!this.state.name.include("@") && this.state.password.length < 5){
			this.setState({nameError: "invalid name",passwordError: "password length sholud be more than 5"});
		}
		else if(this.state.name.include("@")){
			this.setState({nameError: "invalid name"});
		}
		else if(this.state.password.length < 5){
			this.setState({passwordError: "password length sholud be more than 5"});
		}
		else{
			return true;
		}
	}
	submit()
	{
		this.setState({nameError: "",passwordError: ""});
		if (this.valid()) {
			alert("form submitted")
		}
		

	}
	render(){
		return(
			<div>
			
				<div className="main-container">		
			<div className="base-container-1">
			<h1>Sign Up Form</h1>
			<form className="form-deco">				
		       <input type="text" className="input-4" name="username" placeholder="username" onChange={(event)=> {this.setState({name:event.target.value})}}/>
			   <input type="password" className="input-4" name="password" placeholder="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
			   <p><span><input type="checkbox"/></span>I agree to the terms and conditions of the services</p>
			   <button type="button" onClick={this.submit} className="btn-4">LogIn</button>
			   <a href="#">Forgot Pasword ?</a>
		    </form>
		    <div className="form-bottom-2">
		    	<p>Don't have a Code Fox account yet?</p>
		    	<a href="#">Create your account now</a>
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
	   </div>
	 
	 </div>
			);
	}
	}

export default Login;