// Решение привязки события к контексту через bind
class ButtonWithBind extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOn: true
		}

		this.triggerHandle = this.triggerHandle.bind(this);
	}

	triggerHandle(e) {
		// Отмена дефолтного поведения
		e.preventDefault();

		this.setState(state => {
			return {
				isOn: !state.isOn
			}
		});
	}

	render() {
		return (
			<button onClick={this.triggerHandle}>
				Button With Bind {(this.state.isOn) ? 'ON' : 'OFF'}
			</button>
		);
	}
}

// Решение с использованием Public Class Fields Syntax
class ButtonWithPCFS extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOn: true
		}
	}

	triggerHandle = (e) => {
		e.preventDefault();

		this.setState(state => {
			return {
				isOn: !state.isOn
			}
		});
	}

	render() {
		return (
			<button onClick={this.triggerHandle}>
				Button With PCFS {(this.state.isOn) ? 'ON' : 'OFF'}
			</button>
		);
	}
}

// Решение с использованием анонимной функции внутри JSX
class ButtonWithJSX extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOn: true
		}
	}

	triggerHandle(e) {
		e.preventDefault();

		this.setState(state => {
			return {
				isOn: !state.isOn
			}
		});
	}

	render() {
		return (
			<button onClick={(e) => {this.triggerHandle(e)}}>
				Button With JSX {(this.state.isOn) ? 'ON' : 'OFF'}
			</button>
		);
	}
}

ReactDOM.render(
	<div>
		<ButtonWithBind /><br />
		<ButtonWithPCFS /><br />
		<ButtonWithJSX />
	</div>,
	document.getElementById('root')
);