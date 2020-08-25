import React,{Component} from 'react';
import "./forgotpassword.css";



class Forgot extends Component{


render(){

return(

		<div>
		   <div className="forgot">
		       <h1 className="readjust-1">Password Reset</h1>
		       <p>Please enter your email address below and we'll email you a link to a page where you can easily create a new password.</p>
		       <input type="email" className="input-5" name="email" placeholder="Email" onChange={(event)=> {this.setState({email:event.target.value})}}/>
		       <button type="button" onClick={this.submit} className="btn-5">Reset Password</button>
		       <p>Take me back to the <a href="#">login</a> page</p>
		   </div>
		</div>


	);
}
	}

export default Forgot;