import React, { useContext } from 'react';
import { tiposSanguineos } from '../constants/constants';
import context from '../context/MyContext';

function Emergencias() {
  const {
    handleChangeValues,
  } = useContext(context);

  return (
    <div>
      <label htmlFor="tiposSanguineos">
        Tipo Sanguíneo:
        <select
          name="tiposSanguineos"
          id="tiposSanguineos"
          onChange={ handleChangeValues }
        >
          {
            tiposSanguineos.map((tipo) => (
              <option value={ tipo } key={ tipo }>
                {tipo}
                {' '}
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="fatorRH" className="register--input">
        Fator RH:
        <input
          type="text"
          name="fatorRH"
          id="fatorRH"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="alergia" className="register--input">
        Alergias:
        <input
          type="text"
          name="alergia"
          id="alergia"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="pressaoAlta" className="register--input">
        Pressão Alta:
        <input
          type="text"
          name="pressaoAlta"
          id="pressaoAlta"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="diabetes" className="register--input">
        Diabetes:
        <input
          type="text"
          name="diabetes"
          id="diabetes"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="medicacaoContinua" className="register--input">
        Medicação uso Contínua:
        <input
          type="text"
          name="medicacaoContinua"
          id="medicacaoContinua"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="cartaoSUS" className="register--input">
        Cartao SUS:
        <input
          type="text"
          name="cartaoSUS"
          id="cartaoSUS"
          onChange={ handleChangeValues }
        />
      </label>

    </div>
  );
}

export default Emergencias;
