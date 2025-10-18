export default function LivroList() {
	return (
		<div className="container card p-0 mt-5">
			<div className="card-header">
				<h4>Livros no catálogo</h4>
			</div>
			<div className="card-body">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Título</th>
							<th>Páginas</th>
							<th>Categoria</th>
							<th>Descrição</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Livro</td>
							<td>123</td>
							<td>Teste</td>
							<td>Teste descrição</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
