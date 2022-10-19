import { useContext } from 'react';
// import Atividades from '../components/Atividades';
import DadosPessoais from '../components/DadosPessoais';
import Emergencias from '../components/Emergencias';
import context from '../context/MyContext';
import '../styles/Home.css';

function Cadastro() {
  const {
    handleClickButton,
    handleClearCampos,
    goHome,
    goComponent,
  } = useContext(context);

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Cadastro de Componentes</h1>
        <DadosPessoais />

        {/* <h3 className="register--title">Atividades que gostaria de fazer</h3>
        <Atividades /> */}

        <h3 className="register--title">Emergências</h3>
        <Emergencias />

        <button
          type="button"
          onClick={ () => handleClickButton() }
        >
          Cadastrar
        </button>

        <button
          type="button"
          onClick={ () => handleClearCampos() }
        >
          Limpar Campos
        </button>

        <button
          type="button"
          onClick={ () => goHome() }
        >
          Voltar Inicio
        </button>

        <button
          type="button"
          onClick={ () => goComponent() }
        >
          Componentes
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
