import { useState, useEffect } from "react"
import {Link, useParams} from 'react-router-dom';
import Navegacao from '../componentes/Navegacao';
import Exibidor from '../componentes/Exibidor';
//import ProdutosExemplo from '../data/ProdutosExemplo';

import { ObterProdutoCodigo } from "../../functions/RequisicaoServidor"


export default function Produto() {
    const { codigo } = useParams();
    
    const [produto, definirProduto] = useState({});

    useEffect(function () {

      ObterProdutoCodigo(codigo)
        .then(function (resposta) {

          if (resposta.status === 200) {
            definirProduto(resposta.data);
          }
        })
        .catch(function (erro) {
          console.log(erro);
        });
    }, 
    [codigo]);

    return (
        <>
        <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      <Exibidor produto={produto} />
    </>
  );
}