import React ,{Component} from'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab,faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';
import axios from 'axios';

class Footer extends Component {

constructor(props){

		super(props);

		this.state={
			name: "",
			email:"",
			message:"",
			emailError:""
		}
		this.clickHand = this.clickHand.bind(this);
		this.sendMail = this.sendMail.bind(this);
	}

	sendMail(){
	axios.post('/footercontact',{
		name: this.state.name,
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
		this.setState({emailError: "your email not send"});
	})
}

	clickHand()
	{
		this.setState({emailError: ""});
		if(validator.isEmail(this.state.email)){
			this.sendMail();
		}
		else{
			this.setState({emailError: "invalid Email"});
			console.log(this.state.emailError);
		}
	}

	render(){

		return (

			<div className="footer">
			
			   <div className="footer-content">
			         <div className="footer-section about">
			         <h1 className="logo">discitetech</h1>
			         <p>this is the part where we wrrite something to define us like what we are and what we do mainly
			         a kind of short notes that's all
			         </p>
			         	<div className="contact">
			         	    <span><FontAwesomeIcon icon={faPhone} />&nbsp; 123-456-789</span>
			         	    <span><FontAwesomeIcon icon={faEnvelope} />&nbsp; discitetech04@gmail.com</span>
			         	</div>
			         	<div className="socials">
			         	    <a href="#"><FontAwesomeIcon icon={faFacebook} className="facebook" /></a>
			         	    <a href="#"><FontAwesomeIcon icon={faGoogle} className="goo" /></a>
			         	    <a href="#"><FontAwesomeIcon icon={faInstagram} className="instagram" /></a>
			         	</div>
			         </div> 
			         <div className="footer-section link">
			            <h2>Quick Links</h2>
			            <ul>
			            <a href="#"><li>Events</li></a>
			            <a href="#"><li>Team</li></a>
			            <a href="#"><li>Mentores</li></a>
			            <a href="#"><li>Gallery</li></a>
			            <a href="#"><li>Terms and Condition</li></a>
			            <a href="#"><li>Organised</li></a>
			            </ul>
			         </div> 
			         <div className="footer-section contact-form">
			         <h2>Reviews</h2>
			         <form>
			         	<input type="text" name="username" placeholder="Your Name...." className="text-input contact-input" onChange={(event)=> {this.setState({name:event.target.value})}}/>
			            <input type="email" name="email" placeholder="Your Email Address...." className="text-input contact-input" onChange={(event)=> {this.setState({email:event.target.value})}}/>
			            <p>{this.state.emailError}</p>
			            <textarea name="message" className="text-input contact-input" placeholder="Your Message....." onChange={(event)=> {this.setState({message:event.target.value})}}></textarea>
			            <button type="submit" className="btn btn-big contact-btn"><FontAwesomeIcon icon={faEnvelope} onClick={this.clickHand} /> Send</button>
			         </form>
			         </div> 
			  </div>
			  <div className="footer-bottom">
			      &copy; discitetech.com | designed by four fox
			   </div>
			</div>


		 );
	}



}

export default Footer;

