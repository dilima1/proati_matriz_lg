import { useHistory } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const history = useHistory();

  const getCadastro = () => {
    history.push('/cadastro');
  };

  const getComponentes = () => {
    history.push('/componentes');
  };

  return (

    <div>
      <button
        type="button"
        onClick={ getCadastro }
      >
        Cadastrar Componentes
      </button>

      <button
        type="button"
        onClick={ getComponentes }
      >
        Componentes
      </button>
    </div>

  );
}

export default Home;
