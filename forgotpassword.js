import React,{Component} from 'react';
import "./forgotpassword.css";



class Forgot extends Component{


render(){

return(

		<div>
		   <div className="change-1">
		       <h1 className="readjust-2">Change Password</h1>
		       <p>Please enter your new password.</p>
		       <input type="password" className="input-6" name="password" placeholder="New password" onChange={(event)=> {this.setState({password:event.target.value})}}/>
		        <input type="password" className="input-6" name="password" placeholder="Confirm password" onChange={(event)=> {this.setState({password:event.target.value})}}/>
		       <button type="button" onClick={this.submit} className="btn-6">Reset Password</button>
		   </div>
		</div>


	);
}
	}

export default Forgot;