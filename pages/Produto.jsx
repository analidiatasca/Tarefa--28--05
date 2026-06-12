import { Link, useParams } from "react-router-dom";
import Navegacao from "../componentes/Navegacao";
import Exibidor from "../componentes/Exibidor";
import ProdutosExemplo from "../datas/ProdutosExemplo";

export default function Produto() {
    const { codigo } = useParams();

    return(
        <>
        <Navegacao titulo="VITRINE" >
        <Link to="/">Inicio</Link>
        <Link to="/Promocao">Promoção</Link>
        <Link to="/Carrinho">Carrinho</Link>
        </Navegacao>

        <Exibidor produto={ProdutosExemplo.find((produto) => produto.codigo == codigo)}/>
        
        </>
    )
}
