import styled from "styled-components"

// Container principal — esconde overflow
const Modelo = styled.div`
  overflow: hidden;    /* Esconde scrollbars e conteúdo extra */
`

// Título grande centralizado
const ModeloTitulo = styled.div`
  font-size: 32pt;
  padding: 32px 0;
  text-align: center;
`

// Linha de links de navegação
const ModeloBotoes = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`

export default function Navegacao({ titulo, children }) {
  return (
    <Modelo>
      <ModeloTitulo>{titulo}</ModeloTitulo>
      <ModeloBotoes>{children}</ModeloBotoes>
    </Modelo>
  )
}