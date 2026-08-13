import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navegacao from "../componentes/Navegacao";
import Principal from "../componentes/Principal";
// import ProdutosExemplo from "../data/ProdutosExemplo"
import { ObterProdutos } from "../../functions/RequisicaoServidor";

export default function Vitrine() {
  const [produtos, definirProdutos] = useState([]);

  useEffect(function() {
    ObterProdutos()
    .then(function(resposta) {
      if (resposta.status === 200) {
        definirProdutos(resposta.data);
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
  }, []);
    
  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Início </Link>
        <Link to="/promocao"> Promoção </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>
      
    {produtos.length > 0 && 
      <Principal produtos={produtos}/>
    }
    </>
  );
}