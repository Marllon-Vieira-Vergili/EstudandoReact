import { useState } from "react";

export const AdicionarNovaTarefa = ({onAdicionar}) => {
  //Componente para adicionar nova Descrição e novo associado

  const [descricao,setDescricao] = useState("");
  const [associado, setAssociado] = useState("");

  //Método Enviar nova Tarefa
  //Constante enviar vai receber um novo evento, tal que.. esse evento
  const enviar = (e) =>{
    e.preventDefault();
    if(descricao && associado){
        onAdicionar(descricao,associado);
        setDescricao(""); //Limpa o campo após inserido
        setAssociado(""); //Limpa o campo após inserido
    }
  };

  return (
    //Container da nova tabela para adicionar nova Descrição e Associado
    <div className="container-fluid mt-5">
      {/**Criando nova tabela com borda */}
      <table className="table table-bordered">
        
          <span className="font-monospace">Descrição</span>

          <textarea
            rows={4}
            className=" form-control shadow"
            placeholder="Digite a descrição"
            value={descricao}
            onChange={(e)=> setDescricao(e.target.value)}
          ></textarea>

          <span className="font-monospace">Associado</span>
          <input
            placeholder="Nome do Associado"
            type="text"
            className="form-control shadow"
            value={associado}
            onChange={(e) =>setAssociado(e.target.value)}
          ></input>

            {/*Botão para inserir nova tarefa */}
          <button type="button" onClick={enviar}
          className="btn btn-primary shadow border mt-3"
          >
            Inserir nova Tarefa
          </button>
        
      </table>
    </div>
  );
};
