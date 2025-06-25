export const DadosTabela = ({ dados, onRemover }) => {
  return (
    //Componente Filho que mostrará os dados da nossa tabela

    <tbody id="corpo-tabela" className="text-body">
      {/*Usando map para percorrer todos os meus dados e fazer a lista */}
      {dados.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.descricao}</td>
          <td>{item.associado}</td>



          <td className="bg-light">
            {/*Botão de REMOVER */}
            <button
              className="btn btn-sm btn-danger rounded"
              onClick={() => onRemover(item.id)}
              title="Excluir Tarefa"
            >
              Remover
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
