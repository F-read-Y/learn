class MultTable extends React.Component {
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td className='start_td'></td>
						{this.props.cols.map((col, col_index) => {
							return (
								<td key={col_index.toString()} className='gen_td'><div>{col}</div></td>
							);
						})}
					</tr>
					{this.props.rows.map((row, row_index) => {
						return (
							<tr key={row_index.toString()}>
								<td className="gen_td"><div>{this.props.rows[row_index]}</div></td>
								{this.props.cols.map((col, col_index) => {
									return (
										<td key={col_index.toString()}>
											<div>
												{col * row}
											</div>
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

let userRows = prompt('Введите содержимое Rows: ', '');
let userCols = prompt('Введите содержимое Cols: ', '');

ReactDOM.render(
	<MultTable rows={userRows.split(',')} cols={userCols.split(',')} />,
	document.getElementById('root')
);
