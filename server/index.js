const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const dataBase = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '03062011Ec*',
  database: 'peopleslagoacarro',
})

app.use(cors());
app.use(express.json());

app.post("/register", (request, result) => {
  const { name, idade, nascimento, membro, cartaoMembro, endereco, bairro, fone, celular, renda, trabalha, estadoCivil, acompanhante, tipoSanguineo, fatorRH, alergias, pressaoAlta, diabetes, medicacaoContinua, cartaoSus } = request.body;

let SQL = "INSERT INTO people (name, idade, nascimento, membro, cartaoMembro, endereco, bairro, fone, celular, renda, trabalha, estadoCivil, acompanhante, tipoSanguineo, fatorRH, alergias, pressaoAlta, diabetes, medicacaoContinua, cartaoSus) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

dataBase.query(SQL, [name, idade, nascimento, membro, cartaoMembro, endereco, bairro, fone, celular, renda, trabalha, estadoCivil, acompanhante, tipoSanguineo, fatorRH, alergias, pressaoAlta, diabetes, medicacaoContinua, cartaoSus ], (err, result) => {
  console.log(err);
})
})

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * from people";

  dataBase.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result)
  });
});

app.put("/edit", (req, res) => {
  const { idpeople, name, idade, nascimento, membro, cartaoMembro, endereco, bairro, fone, celular, renda, trabalha, estadoCivil, acompanhante, tipoSanguineo, fatorRH, alergias, pressaoAlta, diabetes, medicacaoContinua, cartaoSUS } = req.body;

  let SQL = "UPDATE people SET name = ?, idade = ?, nascimento = ?, membro = ?, cartaoMembro = ?, endereco = ?, bairro = ?, fone = ?, celular = ?, renda = ?, trabalha = ?, estadoCivil = ?, acompanhante = ?, tipoSanguineo = ?, fatorRH = ?, alergias = ?, pressaoAlta = ?, diabetes = ?, medicacaoContinua = ?, cartaoSUS = ? WHERE idpeople = ?";

  dataBase.query(SQL, [name, idade, nascimento, membro, cartaoMembro, endereco, bairro, fone, celular, renda, trabalha, estadoCivil, acompanhante, tipoSanguineo, fatorRH, alergias, pressaoAlta, diabetes, medicacaoContinua, cartaoSUS, idpeople ], (err, result) => {
    if (err) console.log(err);
    else res.send(result)
  });
});

app.delete("/delete/:idpeople", (req, res) => {
  const { idpeople } = req.params;
  console.log(idpeople);

  let SQL = "DELETE FROM people WHERE idpeople = ?";

  dataBase.query(SQL, [idpeople], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
    console.log(idpeople);
  });
});

// app.get("/", (request, result) => {

//   dataBase.query(SQL, (err, result) => {
//     console.log(err);
//   })
// })

// app.get('/', (request, result) => {
//   result.send('Hello')
// })
app.listen(3001, () => {
  console.log('rodando servidor')
})