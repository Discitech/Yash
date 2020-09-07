import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import "./login.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const validator = require('validator');

class Register extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: "",
			email: "",
            password:"",
		}
		this.clickHandler = this.clickHandler.bind(this);
		this.signUp = this.signUp.bind(this);
		this.googleAuth = this.googleAuth.bind(this);
		this.facebookAuth = this.facebookAuth.bind(this);
		this.githubAuth = this.githubAuth.bind(this);
	}

	googleAuth(){
        axios.get('/auth/google')
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
        axios.get('/auth/github')
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


     facebookAuth(){
        axios.get('/auth/facebook')
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

 signUp(){
 	axios.post('/signup',{
 		    name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            if(res.data.success === true){
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
                this.setState = {
                	name: "",
                    email: "",
                    password: ""
                };
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

clickHandler(e){
	e.preventDefault();
	if(validator.isLength(this.state.password , {min:5, max: 15}) && validator.isEmail(this.state.email) && validator.isAlphanumeric(this.state.name)){
            this.signUp();
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 15}) && !validator.isEmail(this.state.email) && !validator.isAlphanumeric(this.state.name)){
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
            	toast.error('🦄 Invalid Username. It should contain numbers and letters only!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
		}
		else if(!validator.isLength(this.state.password , {min:5, max: 15}) && !validator.isEmail(this.state.email)){
			toast.error('🦄 Invalid password. It should contain 5 to 15 value!', {
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
		else if(!validator.isEmail(this.state.email) && !validator.isAlphanumeric(this.state.name)){
			toast.error('🦄 Invalid Email!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            	toast.error('🦄 Invalid Username. It should contain numbers and letters only!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if(!validator.isLength(this.state.password , {min:5, max: 15}) && !validator.isAlphanumeric(this.state.name)){
			toast.error('🦄 Invalid Email!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
        else if(!validator.isAlphanumeric(this.state.name)){
			toast.error('🦄 Invalid Username. It should contain numbers and letters only!', {
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
}


	render(){
		return(
			<div>
				<div className="nav-1">Code Fox</div>
				<div className="main-container">		
					<div className="base-container-1">
						<h1>Sign Up Form</h1>
							<h3>It only takes 3 minutes!</h3>
								<form className="form-deco">				
		      						 <input type="text" className="input-4" name="username" value={this.state.name} placeholder="Your Username..." onChange={(event)=> {this.setState({name:event.target.value})}}/>
		      						 <input type="email" className="input-4" name="email" value={this.state.email} placeholder="Your Email..." onChange={(event)=> {this.setState({email:event.target.value})}}/>
			  						 <input type="password" className="input-4" name="password" value={this.state.password} placeholder="Your Password..." onChange={(event) => {this.setState({password:event.target.value})}}/>
			  						 <button type="submit" onClick={(event) => {this.clickHandler(event)}} className="btn-4">Sign Up</button>
			  
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
			                   <button onClick={this.facebookAuth}>Facebook Login</button>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color-1"><FontAwesomeIcon icon={faGoogle}/></span>
			                   <button onClick={this.googleAuth}>Google Login</button>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color-1"><FontAwesomeIcon icon={faGithub} /></span>
			                   <button onClick={this.githubAuthAuth}>Github Login</button>
			                 </div>
			             </div>
	            </div>
	   <p>Don't worry, we won't post anything without your permission.</p>
	   		</div>
	 	<div className="footer-2">&copy; discitetech.com | designed by code fox </div>
	        <ToastContainer />
	 </div>
			);
	}
	}
export default Register;