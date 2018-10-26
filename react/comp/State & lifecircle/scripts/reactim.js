// Добавление состояния в компонент
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	// Сработает в момент инициализации компонента
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	// Сработает в момент удаления компонента
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello state!</h1>
				<h2>Now is: {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);
