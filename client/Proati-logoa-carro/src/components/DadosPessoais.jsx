import React, { useContext } from 'react';
import context from '../context/MyContext';

function DadosPessoais() {
  const {
    handleChangeValues,
  } = useContext(context);

  return (
    <>
      <label htmlFor="name" className="register--input">
        Nome:
        <input type="text" name="name" id="name" onChange={ handleChangeValues } />
      </label>
      <label htmlFor="idade" className="register--input">
        Idade:
        <input type="text" name="idade" id="name" onChange={ handleChangeValues } />
      </label>
      <label htmlFor="nascimento" className="register--input">
        Data de Nascimento:
        <input
          type="date"
          name="nascimento"
          id="nascimento"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="membro" className="register--input">
        Membro:
        <label htmlFor="sim" className="inputs--select">
          <input
            type="radio"
            id="sim"
            value="SIM"
            name="membro"
            onChange={ handleChangeValues }
          />
          SIM
        </label>
        <label htmlFor="nao">
          <input
            type="radio"
            name="membro"
            id="nao"
            value="NÃO"
            onChange={ handleChangeValues }
          />
          NÃO
        </label>
      </label>
      <label htmlFor="cartaoMembro" className="register--input">
        Cartão de Membro:
        <input
          type="text"
          name="cartaoMembro"
          id="cartao-membro"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="endereco" className="register--input">
        Endereço:
        <input
          type="text"
          name="endereco"
          id="endereco"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="bairro" className="register--input">
        Bairro:
        <input
          type="text"
          name="bairro"
          id="bairro"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="fone" className="register--input">
        Fone:
        <input
          type="text"
          name="fone"
          id="fone"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="celular" className="register--input">
        Celular:
        <input
          type="text"
          name="celular"
          id="celular"
          onChange={ handleChangeValues }
        />
      </label>
      <label htmlFor="renda" className="register--input">
        Possui Alguma Renda?:
        <label htmlFor="sim" className="inputs--select">
          <input
            type="radio"
            name="renda"
            id="sim"
            value="SIM"
            onChange={ handleChangeValues }
          />
          SIM
        </label>
        <label htmlFor="nao">
          <input
            type="radio"
            name="renda"
            id="nao"
            value="NÃO"
            onChange={ handleChangeValues }
          />
          NÃO
        </label>
      </label>
      <label htmlFor="trabalho" className="register--input">
        Realiza algum trabalho?
        <label htmlFor="sim" className="inputs--select">
          <input
            type="radio"
            name="trabalho"
            id="sim"
            value="SIM"
            onChange={ handleChangeValues }
          />
          SIM
        </label>
        <label htmlFor="nao">
          <input
            type="radio"
            name="trabalho"
            id="nao"
            value="NÃO"
            onChange={ handleChangeValues }
          />
          NÃO
        </label>
      </label>
      <label htmlFor="estadoCivil" className="register--input">
        Estado Civil:
        <label htmlFor="solteiro" className="inputs--select">
          <input
            type="radio"
            id="solteiro"
            value="solteiro"
            name="estadoCivil"
            onChange={ handleChangeValues }
          />
          Solteiro
        </label>
        <label htmlFor="casado">
          <input
            type="radio"
            name="estadoCivil"
            id="casado"
            value="casado"
            onChange={ handleChangeValues }
          />
          Casado
        </label>
        <label htmlFor="viuvo" className="inputs--select">
          <input
            type="radio"
            name="estadoCivil"
            id="viuvo"
            value="viuvo"
            onChange={ handleChangeValues }
          />
          Viúvo
        </label>
        <label htmlFor="outros" className="inputs--select">
          <input
            type="radio"
            name="estadoCivil"
            id="outros"
            value="OUTROS"
            onChange={ handleChangeValues }
          />
          Outros
        </label>
      </label>
      <label htmlFor="acompanhante" className="register--input">
        Com que Mora:
        <input
          type="text"
          name="acompanhante"
          id="acompanhante"
          onChange={ handleChangeValues }
        />
      </label>

    </>
  );
}

export default DadosPessoais;
