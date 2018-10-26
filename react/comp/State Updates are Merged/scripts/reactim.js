class Element extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values_1: [],
			values_2: []
		}
	}

	// Вариант мёржа со стрелочной функцией
	values_1Plus(value) {
		this.setState((state, props) => {
			return {
				values_1: state.values_1.concat(value)
			}
		});
	}

	// Вариант мёржа с простой, анонимной функцией
	values_2Plus(value) {
		this.setState(function(state, props) {
			return {
				values_2: state.values_2.concat(value)
			}
		})
	}

	// В момент 'монтирования' компонента делаем три мёржа
	componentDidMount() {
		this.values_1Plus('str_1');
		this.values_1Plus('str_2');
		this.values_2Plus('str_3');
	}

	render() {
		return (
			<div>
				<p>Values#1 count: {this.state.values_1.length}</p>
				<p>Values#2 count: {this.state.values_2.length}</p>
			</div>
		);
	}	
}

ReactDOM.render(
	<Element />,
	document.getElementById('root')
);