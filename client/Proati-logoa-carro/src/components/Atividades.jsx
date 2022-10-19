import React, { useContext } from 'react';
import { atividades } from '../constants/constants';
import context from '../context/MyContext';

function Atividades() {
  const {
    handleChangeValues,
  } = useContext(context);

  return (
    <div>
      {
        atividades.map((atividade) => (
          <label key={ atividade } htmlFor={ atividade } className="register--input">
            {atividade}
            <input
              type="checkbox"
              id={ atividade }
              name={ atividade }
              onChange={ handleChangeValues }
            />
          </label>
        ))
      }

    </div>
  );
}

export default Atividades;
