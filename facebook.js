import React ,{Component} from'react';
import FacebookLoginBtn from 'react-facebook-login';

class LoginFacebook extends Component {

	constructor(props){
		super(props);
		this.state = {
			auth : false,
			picture : '',
			name : ''
		}
	}

	componentClicked = () => {
		console.log('facebook btn clicked');
	}

	responseFacebook = (response) => {
		console.log(response);
	}

	render(){
		let facebookData ;

		this.state.auth ? 
		       facebookData =(
		       	<div>
		       	 hi
		       	</div
		       	) : 
		       	facebookData = (
		       	 <FacebookLoginBtn
                    appId="296645504973675"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                    />);

		return (

		<div>
		{facebookData}
		</div>

			);

	}

}

export default LoginFacebook;