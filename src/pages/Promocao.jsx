import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Navegacao from "../componentes/Navegacao"
import Exibidor from "../componentes/Exibidor"
//import ProdutosExemplo from "../data/ProdutosExemplo"
import { ObterPromocao } from "../../functions/RequisicaoServidor";

export default function Promocao() {
  const [promocao, definirPromocao] = useState([]);

  useEffect(function () {
    ObterPromocao()
      .then(function (resposta) {
        if (resposta.status === 200) {
          definirPromocao(resposta.data);
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      {promocao.length > 0 &&
        promocao.map(function (produto, indice) {
          if (produto.promocao === true) {
            return <Exibidor key={indice} produto={produto} />;
          }
        })}
    </>
  );
}