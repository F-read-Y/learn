class LifeTextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			string: '',
			className: 'zero'
		}
	}

	setString = (event) => {
		this.setState({
			string: event.target.value
		});

		if (event.target.value.length === 0) {
			this.setState({
				className: 'zero'
			});
		} else {
			this.setState({
				className: ''
			});
		}
	}

	render() {
		return (
			<div className='tablo'>
				<textarea onChange={this.setString}></textarea>
				<p className={this.state.className}>{this.state.string.length}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<LifeTextArea />,
	document.getElementById('root')
);