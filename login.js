import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,Github } from '@fortawesome/free-brands-svg-icons';
import "./login.css";
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const validator = require('validator');



class Login extends Component{

constructor(props){
		super(props);
		this.state = {
			email: "",
            password:"",
            tick: false
		}
		this.clickHand = this.clickHand.bind(this);
		this.login = this.login.bind(this);
		this.googleAuth = this.googleAuth.bind(this);
		this.facebookAuth = this.facebookAuth.bind(this);
		this.githubAuth = this.githubAuth.bind(this);
	}

 googleAuth(){
        axios.post('/auth/google')
        .then((res) => {
            if(res.data.success === true){
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
             
                toast.success('You have successfully signIn through Google.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
               // youy have to redirect here
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


 githubAuth(){
        axios.post('/auth/google')
        .then((res) => {
            if(res.data.success === true){
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
             
                toast.success('You have successfully signIn through Github.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
               // youy have to redirect here
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


     githubAuth(){
        axios.post('/auth/google')
        .then((res) => {
            if(res.data.success === true){
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
             
                toast.success('You have successfully signIn through Facebook.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
               // youy have to redirect here
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

 login(){
        axios.post('/login',{
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            if(res.data.success === true){
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
                this.setState = {
                    email: "",
                    password: ""
                };
                console.log("1")
                toast.success('You have sign in successsfully.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //you have to redirect
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
		if(validator.isLength(this.state.password , {min:5, max: 15}) && validator.isEmail(this.state.email) && this.state.tick){
            this.login();
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 15}) && !validator.isEmail(this.state.email)){
			toast.error('🦄 Invalid Password. It should contain 5 to 15 values', {
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
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 15})){
			toast.error('🦄 Invalid password. It should contain 5 to 15 value!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
        }
        else if(!this.state.tick){
            toast.error('Please agree terms and conditions', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }



render(){
		return(
			<div>
				<div className="main-container">		
                    <div className="base-container-1">
                        <h1>Log In</h1>
                        <form className="form-deco">
                            <div>
								<FontAwesomeIcon icon={faEnvelope} className="user-logo"/>				
                                <input type="text" className="input-4" name="email" value={this.state.email} placeholder="Your Email..." onChange={(event)=> {this.setState({email:event.target.value})}}/>
                            </div>	
                            <div>
								<FontAwesomeIcon icon={faLock} className="user-logo"/>				
                                <input type="password" className="input-4" value={this.state.password} name="password" placeholder="Your Password..." onChange={(event) => {this.setState({password:event.target.value})}}/>
                            </div>			
                            <p><span><input type="checkbox" onChange={()=> this.setState({tick: !this.state.tick})}/></span>I agree to the terms and conditions of the services</p>
                            <button type="submit" onClick={(event) => {this.clickHand(event)}} className="btn-4">LogIn</button>
                            <Link to="/Forgot">Forgot Pasword ?</Link>
                        </form>
                        <div className="form-bottom-2">
                            <p>Don't have a Code Fox account yet?</p>
                            <Link to="/Signup">Create your account now</Link>
                        </div>
	                </div>
                    <div className="vertical-line"><p className="or">OR</p></div>
                        <div className="base-container-2">
                            <h1>Other ways to Login</h1>
                            <div className="adjust-4">
                                <div className="envolope">
                                    <span  className="logo-color-1"><FontAwesomeIcon icon={faFacebook} /></span>
                                    <a href="#" onClick={this.facebookAuth}>Facebook Login</a>
                                </div>
                                <div className="envolope">
                                    <span  className="logo-color-1"><FontAwesomeIcon icon={faGoogle}/></span>
                                    <a href="#" onClick={this.googleAuth}>Google Login</a>
                                </div>
                                <div className="envolope">
                                    <span  className="logo-color-1"><FontAwesomeIcon icon={faGithub} /></span>
                                    <a href="#" onClick={this.githubAuth}>Github Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
	        <ToastContainer />
	    </div>
	)}
}

export default Login;