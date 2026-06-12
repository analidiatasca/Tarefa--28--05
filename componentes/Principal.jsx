import styled from "styled-components"

// Grid responsivo de produtos
const Modelo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 32px 0;
`

// Card individual do produto
const Produto = styled.div`
  background: #fff;
  padding: 8px;
  transition: 0.2s;

  &:hover {
    transform: rotateZ(2deg) scale(1.1);
    transition: 0.2s;
    }
  
`

// Imagem quadrada com recorte inteligente
const ProdutoImagem = styled.img`
  height: 220px;
  object-fit: cover;
  width: 220px;
`

// Textos centralizados abaixo da imagem
const ProdutoDados = styled.div`
  text-align: center;
`

export default function Principal({ produtos }) {
  return (
    <Modelo>
        {produtos.map((produto) => (
        <Produto key={produto.codigo}>
          <ProdutoImagem
            src={produto.imagens[0]}
            alt="Foto do Produto"
          />
          <ProdutoDados>
            <div>{produto.modelo}</div>
            <div>R$ {produto.preco}</div>
          </ProdutoDados>
        </Produto>
      ))}
    </Modelo>
  )
}

