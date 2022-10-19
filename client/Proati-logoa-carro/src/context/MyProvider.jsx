import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import MyContext from './MyContext';

function Provider({ children }) {
  const [values, setValues] = useState();
  const [dataBaseValues, setdataBaseValues] = useState();
  const [open, setOpen] = useState(false);
  const [filterEdicao, setFilterEdicao] = useState();
  const history = useHistory();

  const handleChangeValues = ({ target: { name, value } }) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClickButton = () => {
    // setValues({ id: Number(id) + 1 });
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      idade: values.idade,
      nascimento: values.nascimento,
      membro: values.membro,
      cartaoMembro: values.cartaoMembro,
      endereco: values.endereco,
      bairro: values.bairro,
      cep: values.cep,
      fone: values.fone,
      celular: values.celular,
      renda: values.renda,
      trabalha: values.trabalho,
      estadoCivil: values.estadoCivil,
      acompanhante: values.acompanhante,
      // atividadesGostariaFazer: values.atividadesGostariaFazer,
      tipoSanguineo: values.tiposSanguineos,
      fatorRH: values.fatorRH,
      alergias: values.alergia,
      pressaoAlta: values.pressaoAlta,
      diabetes: values.diabetes,
      foneContato: values.foneContato,
      medicacaoContinua: values.medicacaoContinua,
      cartaoSus: values.cartaoSUS,

    }).then((response) => {
      console.log(response);
    });
    document.location.reload();
  };

  const handleClearCampos = () => {
    document.location.reload();
  };

  const goHome = () => {
    history.push('/');
  };

  const goComponent = () => {
    history.push('/componentes');
  };

  const goCadastro = () => {
    history.push('/cadastro');
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getCards').then((response) => {
      setdataBaseValues(response.data);
    });
  }, []);

  // const contextValue = useMemo(() => ({
  //   values,
  //   dataBaseValues,
  //   setdataBaseValues,
  //   setValues,
  //   handleChangeValues,
  //   handleClickButton,
  //   handleClearCampos,
  //   open,
  //   setOpen,
  //   filterEdicao,
  //   setFilterEdicao,
  //   goHome,
  //   goComponent,
  //   goCadastro,
  // }), []);

  const contextValue = {
    values,
    dataBaseValues,
    setdataBaseValues,
    setValues,
    handleChangeValues,
    handleClickButton,
    handleClearCampos,
    open,
    setOpen,
    filterEdicao,
    setFilterEdicao,
    goHome,
    goComponent,
    goCadastro,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
