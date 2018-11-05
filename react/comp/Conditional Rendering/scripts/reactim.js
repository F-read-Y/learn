class Greeting extends React.Component {
	render() {
		if (this.props.isLogin) {
			return <h1>Welcome back!</h1>
		} else {
			return <h1>Please, log in!</h1>
		}
	}
}

class LoginButton extends React.Component {
	render() {
		return <button onClick={this.props.onClick}>Login</button>
	}
}

class LogoutButton extends React.Component {
	render() {
		return <button onClick={this.props.onClick}>Logout</button>
	}
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false
		}
	}

	handleLogin = () => {
		this.setState({
			isLogin: true
		});
	}

	handleLogout = () => {
		this.setState({
			isLogin: false
		});
	}

	render() {
		let button;

		if (this.state.isLogin) {
			button = <LogoutButton onClick={this.handleLogout} />
		} else {
			button = <LoginButton onClick={this.handleLogin} />
		}

		return (
			<div>
				<Greeting isLogin={this.state.isLogin} />
				{button}
			</div>
		);
	}
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById('root')
);