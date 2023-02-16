//import { faker } from "@faker-js/faker";

const { faker } = require("@faker-js/faker");

const express = require("express");
const app = express();
const port = 8000;

class Usuario {
  constructor() {
    this.id = faker.random.alpha();
    this.primerNombre = faker.name.firstName();
    this.apellido = faker.name.lastName();

    this.telefono = faker.phone.number();
    this.email = faker.internet.email();
    this.contrasenha = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.id = faker.random.numeric();
    this.nombre = faker.company.name();
    this.direccion = [
      {
        calle: faker.address.street(),
        ciudad: faker.address.country(),
        estado: faker.address.state(),
        codigo_postal: faker.address.countryCode(),
        pais: faker.address.country(),
      },
    ];
  }
}

// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api/usuario/new", (req, res) => {
  res.json(new Usuario());
});

app.get("/api/empresa/new", (req, res) => {
  res.json(new Empresa());
});

app.get("/api/usuario/empresa/new", (req, res) => {
  res.json([
    {
      Usuario: new Usuario(),
      Empresa: new Empresa(),
    },
  ]);
});

// esto tiene que estar debajo de los otros bloques de código
app.listen(port, () => console.log(`Listening on port: ${port}`));
