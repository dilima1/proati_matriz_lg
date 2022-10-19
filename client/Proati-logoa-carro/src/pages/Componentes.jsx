import React, { useContext, useState } from 'react';
import { titulosTabela } from '../constants/constants';
import context from '../context/MyContext';
import FormDialog from '../components/Dialog';

function Componentes() {
  const {
    dataBaseValues,
    setdataBaseValues,
    setOpen,
    filterEdicao,
    setFilterEdicao,
    goHome,
    goCadastro,
  } = useContext(context);

  const [searchComponent, setSearchComponent] = useState();

  const handleClickOpen = ({ target: { id } }) => {
    setOpen(true);

    const componenteEditar = dataBaseValues
      .filter((filter) => filter.idpeople === Number(id));

    setFilterEdicao(componenteEditar);
  };

  const handleSearch = () => {
    const returnSearch = dataBaseValues
      .filter((filter) => filter.name.includes(searchComponent));
    setdataBaseValues(returnSearch);
    console.log('Dado Atulizado', returnSearch);
  };

  const handleReset = () => {
    document.location.reload();
  };

  return (
    <>
      <h2>Componentes Proati Matriz</h2>
      <label htmlFor="search-form">
        <span className="sr-only">Pesquisar Componente: </span>
        <input
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Digite o componente"
          value={ searchComponent }
          onChange={ (e) => setSearchComponent(e.target.value) }
        />
      </label>

      <button
        type="button"
        onClick={ handleSearch }
      >
        Pesquisar Componente
      </button>

      <button
        type="button"
        onClick={ handleReset }
      >
        Limpar Pesquisa
      </button>
      <button
        type="button"
        onClick={ () => goHome() }
      >
        Voltar Inicio
      </button>

      <button
        type="button"
        onClick={ () => goCadastro() }
      >
        Cadastro
      </button>
      {
        typeof filterEdicao !== 'undefined'
          && <FormDialog
            idpeople={ filterEdicao.idpeople }
            name={ filterEdicao.name }
            idade={ filterEdicao.idade }
            nascimento={ filterEdicao.nascimento }
            membro={ filterEdicao.membro }
            cartaoMembro={ filterEdicao.cartaoMembro }
            endereco={ filterEdicao.endereco }
            bairro={ filterEdicao.bairro }
            fone={ filterEdicao.fone }
            celular={ filterEdicao.celular }
            renda={ filterEdicao.renda }
            trabalha={ filterEdicao.trabalha }
            estadoCivil={ filterEdicao.estadoCivil }
            acompanhante={ filterEdicao.acompanhante }
            tipoSanguineo={ filterEdicao.tipoSanguineo }
            fatorRH={ filterEdicao.fatorRH }
            alergias={ filterEdicao.alergias }
            pressaoAlta={ filterEdicao.pressaoAlta }
            diabetes={ filterEdicao.diabetes }
            medicacaoContinua={ filterEdicao.medicacaoContinua }
            cartaoSUS={ filterEdicao.cartaoSUS }
          />
      }

      <table border={ 1 }>
        <thead>
          <tr>
            { titulosTabela.map((titulo) => <th key={ titulo }>{titulo}</th>)}
          </tr>
        </thead>
        <tbody>

          {
            typeof dataBaseValues !== 'undefined'
            && dataBaseValues.map((data, index) => (
              <tr key={ index }>
                <td>{data.idpeople}</td>
                <td>{data.name}</td>
                <td>{data.idade}</td>
                <td>{data.nascimento}</td>
                <td>{data.membro}</td>
                <td>{data.cartaoMembro}</td>
                <td>{data.endereco}</td>
                <td>{data.bairro}</td>
                <td>{data.fone}</td>
                <td>{data.celular}</td>
                <td>{data.renda}</td>
                <td>{data.trabalha}</td>
                <td>{data.estadoCivil}</td>
                <td>{data.acompanhante}</td>
                <td>{data.tipoSanguineo}</td>
                <td>{data.fatorRH}</td>
                <td>{data.alergias}</td>
                <td>{data.pressaoAlta}</td>
                <td>{data.diabetes}</td>
                <td>{data.medicacaoContinua}</td>
                <td>{data.cartaoSUS}</td>
                <td>
                  <button
                    type="button"
                    id={ data.idpeople }
                    onClick={ handleClickOpen }
                  >
                    Editar
                  </button>
                </td>
              </tr>))
          }

        </tbody>
      </table>
    </>
  );
}

export default Componentes;
