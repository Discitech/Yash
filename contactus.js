import React ,{Component} from'react';
import "./contactus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab,faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';



class Contact extends Component{

	constructor(props){

		super(props);

		this.state={
			name: "",
			email:"",
			emailError:""
		}
		this.clickHandler = this.clickHandler.bind(this);
	}

clickHandler()
	{
		if(validator.isEmail({this.state.email})){
			alert('your reviews get submitted')
		}
		else{
			this.setState({emailError: "invalid Email"});
		}
	}

	render(){

		return (
			<div>
			<h3>Contact Us</h3>
			<p>We’d love to hear from you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div className="main-container-1">
			      <div className="section-1">
			             <input type="text" name="username" placeholder="Your Name...." className="text-input-1" onChange={(event)=> {this.setState({name:event.target.value})}}/>
			             <input type="email" name="email" placeholder="Your Email Address...." className="text-input-1" onChange={(event)=> {this.setState({email:event.target.value})}}/>
			             <p>{this.state.emailError}</p>
			      </div>
			      <div className="sectiom-2">
			             <textarea name="message" className="text-input-1 contact-input-1" placeholder="Your Message....."></textarea>
			             <button type="submit" className="contact-btn-1" onClick={this.clickHandler}><FontAwesomeIcon icon={faEnvelope} /> Send</button>
			      </div>       
			</div>
			<div className="main-container-2">
			<div className="size-1">
			<h3>Other ways to reach us</h3>
			<p>You can also get in touch lorem ipsum dolor sit amet. Donec ut massa consequat, bibendum metus pellentesque, pellentesque arcu.</p>
			</div>
			      <div className="contact-social">
			           
			                 <div className="envolope">
			                   <span  className="logo-color"><FontAwesomeIcon icon={faEnvelope}/></span>
			                   <a href="#">discitetech04@gmail.com</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color"><FontAwesomeIcon icon={faPhone} /></span>
			                   <a href="#">123-456-789</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color"><FontAwesomeIcon icon={faFacebook} /></span>
			                   <a href="#">some kind of url</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color"><FontAwesomeIcon icon={faGoogle}/></span>
			                   <a href="#">some kind of url</a>
			                 </div>
			                 <div className="envolope">
			                   <span  className="logo-color"><FontAwesomeIcon icon={faInstagram} /></span>
			                   <a href="#">some kind of url</a>
			                 </div>
			              
			      </div>


	        </div>
			</div>
			);
	}

}

export default Contact;