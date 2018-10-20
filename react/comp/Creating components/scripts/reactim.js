/*Создание компонентов в React*/

// Функциональный способ
function FuncComponent(props) {
	return <h1>This is new function component named {props.name}</h1>
}

var funcComp = <FuncComponent name="Good Function Component" />

ReactDOM.render(
	funcComp,
	document.getElementById('func_comp')
);

// Классовый способ
class ClassComponent extends React.Component {
	render() {
		return <h1>This is new class component named {this.props.name}</h1>
	}
}

var classComp = <ClassComponent name="Good Class Component" />

ReactDOM.render(
	classComp,
	document.getElementById('class_comp')
);

/**
Уточнения:
1. Названия компонентов должны начинаться с большой буквы
так как React считает оценивает компоненты написанные с маленькой
как теги.

2.
*/