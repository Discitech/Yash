import React ,{Component} from'react';
import GoogleLoginBtn from 'react-facebook-login';

class LoginGoogle extends Component {

	constructor(props){
		super(props);
	}

	responseErrorGoogle = (response) => {
		console.log('facebook btn clicked');
	}

	responseSuccessGoogle = (response) => {
		console.log(response);
	
	}

	render(){
		
		return (

		<div>
	  <GoogleLoginBtn
    clientId="27380449493-6vk447h4cssm4692m9t941d5h7mih06f.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={this.responseSuccessGoogle}
    onFailure={this.responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
            />
    </div>

			);

	}

}

export default LoginGoogle;