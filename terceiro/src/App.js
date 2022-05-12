import { useState } from "react";

function App() {
  const [produto, setProduto] = useState([
    {
      id: 500,
      nome: "Teclado",
      categoria: "Informática",
      preco: 50.5,
    },
    {
      id: 501,
      nome: "Mouse",
      categoria: "Informática",
      preco: 150.9,
    },
  ]);
  return (
    <div>
      <button
        onClick={() => {
          let id = prompt("Entre com o id do produto");
          let nome = prompt("Entre com o nome do produto");
          let categoria = prompt("Entre com a categoria do produto");
          let preco = prompt("Entre com o preço do produto");
          setProduto(
            produto.concat({
              id: id,
              nome: nome,
              categoria: categoria,
              preco: preco,
            })
          );
        }}
      >
        Adicionar novo produto
      </button>
      <h2>Produtos Cadastrados</h2>
      {produto.map((item, index) => (
        <div key={index}>
          <h3>{item.nome}</h3>
          <ul>
            <li>Código do produto: {item.id}</li>
            <li>Categoria do produto: {item.categoria}</li>
            <li>Preço do produto: {item.preco}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
