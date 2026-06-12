
import { Link } from "react-router-dom"
import Navegacao from "../componentes/Navegacao";
import Principal from "../componentes/Principal";
import ProdutosExemplo from "../datas/ProdutosExemplo";

export default function Vitrine() {
  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Início </Link>
        <Link to="/produto/1234"> Promoção </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      <Principal produtos={ProdutosExemplo} />
    </>
  )
}

