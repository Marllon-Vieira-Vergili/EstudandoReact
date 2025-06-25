//Importando as customizações da tabela
import "./TabelaCustomizacao.css";
import logo from "./../image/avaliacao.png";
import { DadosTabela } from "./DadosTabela";
import { CabecalhoTabela } from "./CabecalhoTabela";
import { AdicionarNovaTarefa } from "./AdicionarNovaTarefa";
import { useState } from "react";

{/*Recebendo o prop "dados" do app.tsx */}
export const Tabela = ({dados, onRemover, onAdicionar}) => {
  //Constante para mostrarFormulario do componente filho "AdicionarNovaTarefa"
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const alternarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    //Criando a tabela
    <div className="container" id="container-principal">
      <div id="container-secundario" className="mb-5 mt-3">
        <div id="conteudo-formulario">
          <form
            id="formulario"
            className="card bg-primary border-2 shadow-lg p-3"
          >
            {/**LOGO/TíTULO */}
            <div
              id="logo"
              className="d-flex align-items-center rounded p-2 mb-3"
            >
              <img
                src={logo}
                width="80"
                height="70"
                alt="logo"
                className="me-3"
              />

              <h5 className=" fw-bold fst-italic text-white m-1 px-auto text-center">
                LISTA DE TAREFAS A FAZER
              </h5>
            </div>

            {/*Card Interno */}
            <div id="card-estilo" className="card">
              <table className="table table hover">
                {/*Header da tabela */}

                <CabecalhoTabela />

                {/**Corpo da tabela */}

                {/*Passando a variável "dados" para o dados tabela ler de props */}
                <DadosTabela dados={dados} onRemover={onRemover}/>
              </table>

              {/*Botão adicionar nova Tarefa */}
              <button
                className="btn btn-primary text-white mt-3 mb-0 justify-content-center"
                type="button"
                aria-label="Adicionar nova Tarefa"
                aria-expanded="false"
                aria-controls="active"
                onClick={alternarFormulario}
              >
                {/*Caso mostrar Formulario esteja aberto, fechar, senao.. mostrar mensagem adicionar */}
                {mostrarFormulario ? "Fechar" : "Adicionar nova Tarefa"}
              </button>

              {/*Animação quando clicar no button "Adicionar 
            Tarefa ele chama o outro component" */}

              {/*Div que vai colapsar, só vai chamar constante mostrar formulario se chamado, senao.. nao */}
              <div className={`collapse ${mostrarFormulario ? "show" : ""}`}>
                {/*Campo para adicionar nova tarefa */}
                <AdicionarNovaTarefa onAdicionar={onAdicionar}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
