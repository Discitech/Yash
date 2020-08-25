import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../css/login.css';

class ResetPaswsord extends Component{

	constructor(props){
		super(props);
		this.state={
            password:"",
            confirm:"",
			passwordError: ""
		}
		this.submit = this.submit.bind(this);
		this.valid = this.valid.bind(this);
	}

	valid(){
		if(!this.state.email.include("@") && this.state.password.length < 5){
			this.setState({emailError: "invalid email",passwordError: "password length sholud be more than 5"});
		}
		else if(this.state.email.include("@")){
			this.setState({emailError: "invalid name"});
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
		this.setState({emailError: "",passwordError: ""});
		if (this.valid()) {
			alert("form submitted")
		}
	}

	render(){
		return(
			<div>
				<div className="main-container">		
					<div className="base-container-1">
						<h1>Log In</h1>
                        <form className="form-deco">
                            <input type="password" className="input-4" name="password" placeholder="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
                            <input type="password" className="input-4" name="password" placeholder="confirm password" onChange={(event) => {this.setState({confirm:event.target.value})}}/>
                            <button type="button" onClick={this.submit} className="btn-4">Reset Password</button>
                        </form>
	  			    </div>
					
				{/* <div className="vertical-line"><p className="or">OR</p></div>
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
	   			</div> */}
	    	</div>
		</div>
	)}
};

export default ResetPassword;
