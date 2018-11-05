ReactDOM.render(
	React.createElement(
		// Название элемента (компонента)
		'div',
		// Его props
		{
			id: 'wrapper',
			// Атрибуты style, class и for не доступны в JS под
			// своими именами 
			className: 'wrappers',
			// В style можно передавать только JS объект,
			// строку нельзя
			style: {
				width: '100%',
				backgroundColor: 'gold'
			}
		},
		// Его потомки
		[
			React.createElement('h1', null, ['React.createElement() method']),
			React.createElement(
				'p',
				{
					'data-text': 'This is text in data atr.',
					style: {
						fontSize: '35px',
						color: 'white'
					}	
				},
				['Это текст внутри параграфа.']
			)
		]
	),
	document.getElementById('root')
);