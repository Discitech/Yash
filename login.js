import React,{Component} from 'react';
import loginImg from "../../login.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	Youtube,
	FaFacebook,
	FaTwitter,
	FaInstagram
} from '@fortawesome/free-brands-svg-icons';
import LoginFacebook from './components/facebook.js';

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
		
			<div className="base-container">
			<div className="header">LogIn</div>
			<div className="content">
			     <div className="image">
			        <img src={loginImg} alt=""/>
			     </div>
			     <div className="form">
					  <div className="form-group">
					       <label htmlFor="username">Username</label>
					       <input type="text" name="username" placeholder="username" onChange={(event)=> {this.setState({name:event.target.value})}}/>
					       <p>{this.state.nameError}</p>
					  </div>
					  <div className="form-group">
					       <label htmlFor="password">Password</label>
					       <input type="password" name="password" placeholder="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
					       <p>{this.state.passwordError}</p>
					  </div>
			     </div> 
			</div>
			<div className="footer">
			    <button type="button" onclick={this.submit} className="btn">LogIn</button>
			</div>
			<div>
	   		<LoginFacebook />
	   		</div>
	   </div>
	 </div>
	 
			);
	}
	}

export default Login;