import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../css/login.css';
// import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const validator = require('validator');



class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			email: "",
            password:"",
            name:""
		}
		this.clickHand = this.clickHand.bind(this);
		this.login = this.login.bind(this);
	}

    login(){
        axios.post('/login',{
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res);
            if(res.data.success === true){
                console.log(1);
                localStorage.setItem('token', res.data.token);
                this.setState.name = res.data.user;
            } 
            else if(res.data.success === false){
                toast.error('Failed Sign In', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }


	clickHand(e)
	{
		e.preventDefault();
		if(validator.isLength(this.state.password , {min:5, max: 10}) && validator.isEmail(this.state.email)){
			this.login();
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 10}) && !validator.isEmail(this.state.email)){
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
    }
    
	render(){
		return(
			<div>
				<div className="main-container">		
                    <div className="base-container-1">
                        <h1>Sign Up Form</h1>
                        <form className="form-deco">				
                            <input type="text" className="input-4" name="email" value={this.state.email} placeholder="Your Email..." onChange={(event)=> {this.setState({email:event.target.value})}}/>
                            <input type="password" className="input-4" value={this.state.password} name="password" placeholder="Your Password..." onChange={(event) => {this.setState({password:event.target.value})}}/>
                            <p><span><input type="checkbox"/></span>I agree to the terms and conditions of the services</p>
                            <button type="submit" onClick={(event) => {this.clickHand(event)}} className="btn-4">LogIn</button>
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
	        <ToastContainer />
	    </div>
	)}
}

export default Login;
