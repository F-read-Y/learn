class UserGreeting extends React.Component {
	render() {
		return <h1>Hello {this.props.name}</h1>
	}
}

var person = <UserGreeting name="Charly" />

ReactDOM.render(
	person,
	document.getElementById('root')
);
