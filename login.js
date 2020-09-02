import React,{Component} from 'react';
import loginImg from "../../login.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./login.css";
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validator = require('validator');

class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			email: "",
			password:"",
		}
		this.submit = this.submit.bind(this);
		this.sendMail = this.sendMail.bind(this);
	}

sendMail(){
	axios.post('/login',{
		email: this.state.email,
		message: this.state.message
	})
	.then((res) => {
		if(res.data.msg === 'success'){

		}
		else if(res.data.msg === 'fail'){

		}
	})
	.catch((error) => {
		console.log(error);
	})
}


	submit(e)
	{
		e.preventDefault();
		if(validator.isEmail(this.state.email) && validator.isLength(this.state.password , {min:5, max: 10})){
			this.sendMail();
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 10})){
			toast.error('🦄 Invalid password. it should contain 5 value!', {
                   position: "top-center",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
               });
			this.setState({email: "",password: ""});
			
		}
		else if(!validator.isEmail(this.state.email)){
			toast.error('🦄 Invalid Email!', {
                   position: "top-center",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
               });
			this.setState({email: "",password: ""});
		}
		else{
			toast.error('🦄 Invalid Password. it should contain 5 value!', {
                   position: "top-center",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
               });
			toast.error('🦄 Invalid Email!', {
                   position: "top-center",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
               });
			this.setState({email: "",password: ""});
		}
	}
	render(){
		return(
			<div>
			
				<div className="main-container">		
			<div className="base-container-1">
			<h1>Sign Up Form</h1>
			<form className="form-deco">				
		       <input type="text" className="input-4" name="email" value={this.state.email.value} placeholder="Your Email..." onChange={(event)=> {this.setState({name:event.target.value})}}/>
			   <input type="password" className="input-4" value={this.state.password.value} name="password" placeholder="Your Password..." onChange={(event) => {this.setState({password:event.target.value})}}/>
			   <p><span><input type="checkbox"/></span>I agree to the terms and conditions of the services</p>
			   <button type="submit" onClick={(event) => {this.submit(event)}} className="btn-4">LogIn</button>
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