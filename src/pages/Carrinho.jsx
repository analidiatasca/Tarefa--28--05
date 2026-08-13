import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navegacao from "../componentes/Navegacao";
import Janela from "../componentes/Janela";
import ObterCarrinho from "../../functions/ObterCarrinho";
import Pagamento from "../../functions/Pagamento";
import { ObterProdutos } from "../../functions/RequisicaoServidor";

export default function Carrinho() {
  const [produtos, definirProdutos] = useState([]);

  // 1. Carrega o carrinho diretamente na inicialização do estado
  const [carrinho] = useState(() => ObterCarrinho());

  // 2. Busca os produtos do servidor (requisição assíncrona)
  useEffect(function () {
    ObterProdutos()
      .then(function (resposta) {
        if (resposta.status === 200) {
          definirProdutos(resposta.data);
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }, []);

  // 3. Cálculo derivado do preço (executa automaticamente a cada render)
  var preco = 0;
  for (const codigo of carrinho) {
    for (const produto of produtos) {
      if (produto.codigo == codigo) {
        preco += Number(produto.preco);
      }
    }
  }

  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      <Janela>
        <table width="100%">
          <tbody>
            {carrinho.map(function (codigo, indice) {
              const produto = produtos.find((p) => p.codigo == codigo);
              if (!produto) return null;

              return (
                <tr key={indice}>
                  <td> {produto.codigo} </td>
                  <td> {produto.modelo} </td>
                  <td>
                    {Number(produto.preco).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h1>
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>

        <button onClick={Pagamento}>Pagamento por Pix</button>
      </Janela>
    </>
  );
}