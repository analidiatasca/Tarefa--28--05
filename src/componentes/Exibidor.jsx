import styled from "styled-components"
import SalvarCarrinho from "../../functions/SalvarCarrinho"

// Container principal que une imagens e dados lado a lado
const Modelo = styled.div`
  background: #fff;
  display: flex;
  margin: 32px 0;
  overflow: hidden;
`
// Galeria horizontal rolavel — ate 480px de largura
const ModeloImagens = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 480px;
`

// Coluna com informacoes do produto — gap de 16px entre cada item
const ModeloDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
export default function Exibidor(props) {
  return props.produto && Object.keys(props.produto).length > 0 
    ? <Modelo>

        <ModeloImagens>
            <img
              src={ props.produto.imagens[0] }
              alt="Foto do Produto"
              height={ 450 }/>
            <img
              src={ props.produto.imagens[1] }
              alt="Foto do Produto"
              height={ 450 }/>
            <img
              src={ props.produto.imagens[2] }
              alt="Foto do Produto"
              height={ 450 }/>

        </ModeloImagens>

        <ModeloDados>
          <div> { props.produto.marca } </div>
          <div> { props.produto.modelo } </div>
          <div> R$ { props.produto.preco },00 </div>
          <div> { props.produto.descricao } </div>
          
          <button 
            onClick={() => {
              SalvarCarrinho(props.produto.codigo)
              alert("Produto adicionado ao carrinho com sucesso!")
            }}
          >
            Adicionar ao Carrinho
          </button>

        </ModeloDados>
      </Modelo>

    // Produto nao encontrado
    : <Modelo>
        <ModeloDados>Produto Não Encontrado </ModeloDados>
      </Modelo>
  }