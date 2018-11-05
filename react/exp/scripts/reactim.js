class LifeTextArea extends React.Component {
	constructor(props) {
		super(props),
		this.state = {
			value: '',
		}
	}

	applyValue = event => {
		this.setState({
			value: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<textarea onChange={this.applyValue}></textarea>
				<p>{this.state.value.length}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<LifeTextArea />,
	document.getElementById('root')
);
