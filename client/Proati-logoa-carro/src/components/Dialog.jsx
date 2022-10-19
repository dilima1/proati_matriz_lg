import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';
import context from '../context/MyContext';

export default function FormDialog() {
  const {
    setOpen,
    open,
    // values,
    // setValues,
    // dataBaseValues,
    filterEdicao,
  } = useContext(context);

  const [editValues, setEditValues] = useState({
    idpeople: filterEdicao[0].idpeople,
    name: filterEdicao[0].name,
    idade: filterEdicao[0].idade,
    nascimento: filterEdicao[0].nascimento,
    membro: filterEdicao[0].membro,
    cartaoMembro: filterEdicao[0].cartaoMembro,
    endereco: filterEdicao[0].endereco,
    bairro: filterEdicao[0].bairro,
    fone: filterEdicao[0].fone,
    celular: filterEdicao[0].celular,
    renda: filterEdicao[0].renda,
    trabalha: filterEdicao[0].trabalha,
    estadoCivil: filterEdicao[0].estadoCivil,
    acompanhante: filterEdicao[0].acompanhante,
    tipoSanguineo: filterEdicao[0].tipoSanguineo,
    fatorRH: filterEdicao[0].fatorRH,
    alergias: filterEdicao[0].alergias,
    pressaoAlta: filterEdicao[0].pressaoAlta,
    diabetes: filterEdicao[0].diabetes,
    medicacaoContinua: filterEdicao[0].medicacaoContinua,
    cartaoSUS: filterEdicao[0].cartaoSUS,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditComponent = () => {
    Axios.put('http://localhost:3001/edit', {
      idpeople: editValues.idpeople,
      name: editValues.name,
      idade: editValues.idade,
      nascimento: editValues.nascimento,
      membro: editValues.membro,
      cartaoMembro: editValues.cartaoMembro,
      endereco: editValues.endereco,
      bairro: editValues.bairro,
      fone: editValues.fone,
      celular: editValues.celular,
      renda: editValues.renda,
      trabalha: editValues.trabalha,
      estadoCivil: editValues.estadoCivil,
      acompanhante: editValues.acompanhante,
      tipoSanguineo: editValues.tipoSanguineo,
      fatorRH: editValues.fatorRH,
      alergias: editValues.alergias,
      pressaoAlta: editValues.pressaoAlta,
      diabetes: editValues.diabetes,
      medicacaoContinua: editValues.medicacaoContinua,
      cartaoSUS: editValues.cartaoSUS,
    });
    handleClose();
    document.location.reload();
  };

  const handleDeleteComponent = () => {
    Axios.delete(`http://localhost:3001/delete/${filterEdicao[0].idpeople}`);
    handleClose();
    document.location.reload();
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
    console.log(editValues);
  };

  // useEffect(() => {
  //   console.log('Dado Atulizado');
  // }, [open, filterEdicao]);

  return (
    <div>
      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>Editar Componente</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Componente"
            defaultValue={ filterEdicao[0].name }
            onChange={ handleChangeValues }
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="idade"
            label="Idade"
            defaultValue={ filterEdicao[0].idade }
            onChange={ handleChangeValues }
            type="idade"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="nascimento"
            label="Data de Nascimento"
            defaultValue={ filterEdicao[0].nascimento }
            onChange={ handleChangeValues }
            type="nascimento"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="membro"
            label="Membro"
            defaultValue={ filterEdicao[0].membro }
            onChange={ handleChangeValues }
            type="membro"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cartaoMembro"
            label="Cartão de Membro"
            defaultValue={ filterEdicao[0].cartaoMembro }
            onChange={ handleChangeValues }
            type="cartaoMembro"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="endereco"
            label="Endereço"
            defaultValue={ filterEdicao[0].endereco }
            onChange={ handleChangeValues }
            type="endereco"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="bairro"
            label="Bairro"
            defaultValue={ filterEdicao[0].bairro }
            onChange={ handleChangeValues }
            type="bairro"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="fone"
            label="Fone"
            defaultValue={ filterEdicao[0].fone }
            onChange={ handleChangeValues }
            type="fone"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="celular"
            label="Celular"
            defaultValue={ filterEdicao[0].celular }
            onChange={ handleChangeValues }
            type="celular"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="renda"
            label="Renda"
            defaultValue={ filterEdicao[0].renda }
            onChange={ handleChangeValues }
            type="renda"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="trabalha"
            label="Trabalha"
            defaultValue={ filterEdicao[0].trabalha }
            onChange={ handleChangeValues }
            type="trabalha"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="estadoCivil"
            label="Estado Civil"
            defaultValue={ filterEdicao[0].estadoCivil }
            onChange={ handleChangeValues }
            type="estadoCivil"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="acompanhante"
            label="Mora com Quem"
            defaultValue={ filterEdicao[0].acompanhante }
            onChange={ handleChangeValues }
            type="acompanhante"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="tipoSanguineo"
            label="Tipo Sanguineo"
            defaultValue={ filterEdicao[0].tipoSanguineo }
            onChange={ handleChangeValues }
            type="tipoSanguineo"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="fatorRH"
            label="Fator RH"
            defaultValue={ filterEdicao[0].fatorRH }
            onChange={ handleChangeValues }
            type="fatorRH"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="alergias"
            label="Alergias"
            defaultValue={ filterEdicao[0].alergias }
            onChange={ handleChangeValues }
            type="alergias"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="pressaoAlta"
            label="Pressão Alta"
            defaultValue={ filterEdicao[0].pressaoAlta }
            onChange={ handleChangeValues }
            type="pressaoAlta"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="diabetes"
            label="Diabetes"
            defaultValue={ filterEdicao[0].diabetes }
            onChange={ handleChangeValues }
            type="diabetes"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="medicacaoContinua"
            label="Uso de Medicação Continua"
            defaultValue={ filterEdicao[0].medicacaoContinua }
            onChange={ handleChangeValues }
            type="medicacaoContinua"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cartaoSus"
            label="Cartão do Sus"
            defaultValue={ filterEdicao[0].cartaoSUS }
            onChange={ handleChangeValues }
            type="cartaoSus"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
          <Button onClick={ handleDeleteComponent }>Excluir</Button>
          <Button onClick={ handleEditComponent }>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
