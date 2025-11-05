import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function LivroList() {
	const [livros, setLivros] = useState([]);

	useEffect(() => {
		carregarLivros();
	}, []);

	const carregarLivros = async () => {
		const response = await api.get("/");
		setLivros(response.data);
	};

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
						{livros.map((livro) => (
							<tr key={livro.id}>
								<td>{livro.id}</td>
								<td>{livro.titulo}</td>
								<td>{livro.paginas}</td>
								<td>{livro.genero}</td>
								<td>{livro.descricao}</td>
								<td>
									<Link to={`/editar/${livro.id}`} className="btn btn-primary btn-sm">
										Editar
									</Link>
									<button className="btn btn-danger btn-sm ms-2">Excluir</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
