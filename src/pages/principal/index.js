import React, { useState } from "react";
import { Content, Input, Output } from "./styles";

const Principal = () => {
  const [anos, setAnos] = useState("");
  const [meses, setMeses] = useState("");
  const [dias, setDias] = useState("");
  const [idade, setIdade] = useState("");

  function calcularClick(evt) {
    evt.preventDefault();
    let idadeDias = 0;
    idadeDias =
      parseInt(anos, 10) * 365 + parseInt(meses, 10) * 30 + parseInt(dias, 10);
    setIdade(idadeDias);
  }

  function limparClick(evt) {
    evt.preventDefault();
    setAnos("");
    setMeses("");
    setDias("");
    setIdade("");
  }

  function exemploClick(evt) {
    evt.preventDefault();
    let anosAleatrotios, mesesAleatorios, diasAleatorios;
    anosAleatrotios = parseInt(Math.random() * 100, 10);
    setAnos(anosAleatrotios);
    mesesAleatorios = parseInt(Math.random() * (12 - 1) + 1, 10);
    setMeses(mesesAleatorios);
    diasAleatorios = parseInt(Math.random() * (31 - 1) + 1, 10);
    setDias(diasAleatorios);
    setIdade("");
  }

  return (
    <Content>
      <form>
        <h1>Idade em Dias</h1>
        <Input>
          <input
            placeholder="Anos"
            type="number"
            value={anos}
            onChange={(e) => setAnos(e.target.value)}
          />
        </Input>

        <Input>
          <input
            placeholder="Meses"
            type="number"
            value={meses}
            onChange={(e) => setMeses(e.target.value)}
          />
        </Input>
        <Input>
          <input
            placeholder="Dias"
            type="number"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          />
        </Input>
        <Output>{idade && <div>dias totais {idade}</div>}</Output>
        <button onClick={(e) => calcularClick(e)}>Calcular</button>

        <button onClick={(e) => limparClick(e)}>Limpar</button>
        <button onClick={(e) => exemploClick(e)}>Exemplo</button>
      </form>
    </Content>
  );
};

export default Principal;
