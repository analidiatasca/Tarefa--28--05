import React, {useState, useEffect} from "react"
import Navegacao from "../componentes/Navegacao"
import Janela from "../componentes/Janela"
import ProdutosExemplo from "../data/ProdutosExemplo"
import ObterCarrinho from "../../functions/ObterCarrinho"
import Pagamento from "../../functions/Pagamento"



export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([])
  const [preco, setPreco] = useState(0)

  useEffect(function() {
    const carrinho = ObterCarrinho() // lê o carrinho do localStorage
    setCarrinho(carrinho)     //preenche o carrinho com os dados do localStorage
  }, [])

  const produtosMap = Object.fromEntries(
  ProdutosExemplo.map(p => [p.codigo, p])
)

// Calcular o preço total do carrinho
useEffect(function() {
  const produtosMap = Object.fromEntries(
    ProdutosExemplo.map(p => [p.codigo, p])
  )
  var total = 0
  carrinho.map(function(codigo) {
    const produto = produtosMap[codigo]
    if (produto) total += Number(produto.preco)  // preserva centavos
  })
  setPreco(total)
}, [carrinho])   // recalcula sempre que carrinho mudar


  return (
    <>
      <Navegacao titulo="VITRINE">
        <a href="/"> Inicio </a>
        <a href="/promocao"> Promocao </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Janela>
        <table width="100%">
            <tbody>
              {carrinho.map(function(codigo, i) {
                const produto = produtosMap[codigo]
                if (!produto) return null                  
                return (
                  <tr key={ produto.codigo }>              
                    <td> { produto.codigo } </td>
                    <td> { produto.modelo } </td>
                    <td> { produto.preco.toLocaleString('pt-BR',
                              { style:'currency', currency:'BRL' }) } </td>
                  </tr>
                )
              })}
            </tbody>
            </table>

        <h1> 
          {preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
        </h1>

        <button onClick={ Pagamento }>
          Pagamento por Pix
        </button>


      </Janela>
    </>
  )
}