import { useState } from "react";
import "./App.css";
import { Tabela } from "./components/Tabela";

function App() {

  //No React, o componente que possui o useState é o responsável por mudar o estado.
  //Nossos valores iniciais
  const [valores,setarValores] = useState( [
    {id:1, descricao: 'Jogar o lixo pra fora', associado:'marllon'},
    {id:2, descricao: 'Estudar React', associado:'marllon'},
    {id:3, descricao: 'Passear', associado:'João'}
  ]
  );


   //Método para remover uma tarefa pelo ID em DadosTabela
  const removerTarefa =(id) =>{
    const novaLista = valores.filter((tarefa) => tarefa.id !== id);
    setarValores(novaLista);
  }

  //Método para adicionar uma tarefa em DadosTabela
  const adicionarNovaTarefa = (descricao,associado) =>{

    const novaTarefa ={
      id: valores.length + 1 ,//Gerando 1 id a mais
      descricao,
      associado,
    };
    //Adicionar a nova tarefa a lista, setar valores vai receber um
    //Novo array ... já com os valores, e vai add a nova tarefa
    setarValores([...valores,novaTarefa]);
  }


  return(
    //Chamada do método onRemover e onAdicionar agora para tabela
    <Tabela dados={valores} onRemover={removerTarefa} onAdicionar={adicionarNovaTarefa}/>
  );
}

export default App;
