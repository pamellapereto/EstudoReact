import {useState, useEffect} from "react";

import Mensagem from "./Mensagem";
import Conteudo from "./Conteudo";

export default function Container() {
//Vamos criar o estado inicial dos produtos, ou seja,
//quais dados existem detnro do objeto produtos

const [produtos, setProdutos] = useState ([
  {
  id: "",
  nome: "",
  descricao: "",
  categoria: "",
  preco: "",
  msg: []
  }

]);


useEffect(() => {
  fetch("http://10.26.49.58:4000/api/services/produto/listar")
  .then((response) => response.json())
  .then((dados) => {
      setProdutos(dados.output);

  })
  .catch((erro) => console.error(`Erro ao carregar a API -> ${erro}`))


}, [])



  return (
    <div className="container">
      <Mensagem />
      <Conteudo dados = {produtos}/>
    </div>
  );
}
