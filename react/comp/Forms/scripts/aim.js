class Form extends React.Component {
	constructor(props) {
		super(props),
		// 1
		this.state = {
			checkbox: true,
			number: 12,
			// 2
			select: 'orange',
		}
	}

	// 3
	handleFormFields = event => {
		const target = event.target;
		if (target.type === 'checkbox') {
			this.setState({
				checkbox: target.checked,
			});
		} else {
			const name = (target.type === 'number') ? 'number' : 'select';
			this.setState({
				// 4
				[name]: target.value,
			});
		}
	}

	handleFormSubmit = event => {
		// 5
		event.preventDefault();
		alert('Check is: ' + this.state.checkbox + '\n' +
					'Number is: ' + this.state.number + '\n' +
					'Select is: ' + this.state.select);
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<label>
					Checkbox
					<input type="checkbox"
									// 3
								 onChange={this.handleFormFields}
								 checked={this.state.checkbox} />
				</label>
				<label>
					Number
					<input type="number"
								 onChange={this.handleFormFields}
								 value={this.state.number} />
				</label>
				<label>
				// 6
					<select value={this.state.select}
									onChange={this.handleFormFields}>
						<option value='apple'>apple</option>
						<option value='orange'>orange</option>
						<option value='mango'>mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

ReactDOM.render(
	<Form />,
	document.getElementById('root')
);
