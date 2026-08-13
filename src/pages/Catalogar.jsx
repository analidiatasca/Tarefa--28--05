import { useState } from "react";
import Formulario from "../componentes/Formulario";
import ProdutoInicial from "../data/ProdutoInicial";
import { CatalogarProduto } from "../../functions/RequisicaoServidor";

export default function Catalogar() {
  const [produto, definirProduto] = useState(ProdutoInicial);

  // Atualiza qualquer campo de texto ou numero
  function MudarTexto(evento) {
    const valor = evento.target.value;
    const campo = evento.target.name;
    definirProduto({ ...produto, [campo]: valor });
  }

  // Atualiza o campo booleano promocao
  function MudarPromo(evento) {
    const valor = evento.target.checked;
    definirProduto({ ...produto, promocao: valor });
  }

  // Atualiza uma posicao do array imagens
  function MudarImagem(evento) {
    const indice = evento.target.id;
    const imagens = [...produto.imagens];
    imagens[indice] = evento.target.value;
    definirProduto({ ...produto, imagens: imagens });
  }

  // Envia o formulario ao servidor e reseta o estado
  function Catalogar(evento) {
    evento.preventDefault(); // bloqueia reload
    CatalogarProduto(produto); // envia ao servidor
    definirProduto(ProdutoInicial); // reseta campos
  }

  return (
    <Formulario onSubmit={Catalogar}>
      <input
        value={produto.codigo}
        onChange={MudarTexto}
        type="text"
        name="codigo"
        placeholder="Codigo do produto"
        required
      />

      <input
        value={produto.marca}
        onChange={MudarTexto}
        type="text"
        name="marca"
        placeholder="Marca do produto"
        required
      />

      <input
        value={produto.modelo}
        onChange={MudarTexto}
        type="text"
        name="modelo"
        placeholder="Modelo do produto"
        required
      />

      <input
        value={produto.preco}
        onChange={MudarTexto}
        type="number"
        name="preco"
        placeholder="R$ 1.000,00"
        required
      />

      {/* Adicionados neste slide: Entradas de Imagem */}
      <input
        value={produto.imagens[0]}
        onChange={MudarImagem}
        type="url"
        name="imagens"
        id="0"
        placeholder="Imagem 1 do produto"
        required
      />

      <input
        value={produto.imagens[1]}
        onChange={MudarImagem}
        type="url"
        name="imagens"
        id="1"
        placeholder="Imagem 2 do produto"
        required
      />

      <input
        value={produto.imagens[2]}
        onChange={MudarImagem}
        type="url"
        name="imagens"
        id="2"
        placeholder="Imagem 3 do produto"
        required
      />

      {/* Adicionado neste slide: Checkbox de Promoção */}
      <label htmlFor="promocao"> Promocao? </label>
      <input
        checked={produto.promocao}
        onChange={MudarPromo}
        type="checkbox"
        name="promocao"
        id="promocao"
      />

      <input type="submit" value="Catalogar" />
    </Formulario>
  );
}