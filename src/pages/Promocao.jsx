import { Link } from "react-router-dom"
import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"
import ProdutosExemplo from "../datas/ProdutosExemplo"



const ProdutosExemplo = [
  {
    codigo: "001",
    marca: "Marca",
    modelo: "Calça Masculina",
    preco: 180,
    descricao: "Uma calça confortável e estilosa...",
    imagens: [
      "https://i.ibb.co/qFPT70s3/cal-a3.webp",
      "https://i.ibb.co/zhJfL80d/cal-a1.webp",
      "https://i.ibb.co/prkx8Bjh/cal-a2.webp",
         
    ],
 promocao: false, 
},

  {
    codigo: "002",
    marca: "Marca",
    modelo: "Calça Feminina",
    preco: 180,
    descricao: "Uma calça confortável e estilosa...",
    imagens: [      
      "https://i.ibb.co/zhJfL80d/cal-a1.webp",
      "https://i.ibb.co/qFPT70s3/cal-a3.webp",
      "https://i.ibb.co/prkx8Bjh/cal-a2.webp",
       
    ],
     promocao: true, 
  },

    {
    codigo: "002",
    marca: "Marca",
    modelo: "Moletom Feminino",
    preco: 200,
    descricao: "Um moletom confortável. Perfeito para o inverno",
    imagens: [      
      "https://i.ibb.co/SXCsyFjg/Captura-de-tela-2026-05-31-142821.png",
      "https://i.ibb.co/60mjzFjJ/Captura-de-tela-2026-05-31-142855.png",
      "https://i.ibb.co/LdYpx7RW/Captura-de-tela-2026-05-31-142915.png",
       
    ],
     promocao: false, 
  },

    {
    codigo: "002",
    marca: "Marca",
    modelo: "Moletom Masculino",
    preco: 150,
    descricao: "Um moletom confortável e estiloso...",
    imagens: [      
    "https://i.ibb.co/QvtdKTgF/Captura-de-tela-2026-05-31-143026.png",
    "https://i.ibb.co/hRyd3JXK/Captura-de-tela-2026-05-31-143010.png",
    "https://i.ibb.co/7x0m6KXW/Captura-de-tela-2026-05-31-142954.png",
       
    ],
     promocao: true, 
  },

    {
    codigo: "002",
    marca: "Marca",
    modelo: "Blusa Masculina",
    preco: 150,
    descricao: "Uma blusa simples, confortável e estilosa...",
    imagens: [      
      "https://i.ibb.co/4nYHZPJQ/Captura-de-tela-2026-05-31-143109.png",
      "https://i.ibb.co/0ppXD8j6/Captura-de-tela-2026-05-31-143132.png",
      "https://i.ibb.co/5g0wz6gN/Captura-de-tela-2026-05-31-143212.png",
       
    ],
     promocao: true, 
  },

    {
    codigo: "002",
    marca: "Marca",
    modelo: "Camisa do Brasil Feminina",
    preco: 199.99,
    descricao: "Uma blusa estilosa perfeita para a Copa 2026",
    imagens: [      
      "https://i.ibb.co/nMkyr8Vq/Captura-de-tela-2026-05-31-143328.png",
      "https://i.ibb.co/QvC4PLX3/Captura-de-tela-2026-05-31-143345.png",
      "https://i.ibb.co/MDSnV3BS/Captura-de-tela-2026-05-31-143401.png",
       
    ],
     promocao: false, 
  },

    {
    codigo: "002",
    marca: "Cotton-on",
    modelo: "Regata rosa bebê",
    preco: 79.99,
    descricao: "Uma regata simples e confortavel",
    imagens: [      
      "https://i.ibb.co/0yJ6nh11/Captura-de-tela-2026-05-31-143448.png",
      "https://i.ibb.co/9mXjcgQP/Captura-de-tela-2026-05-31-143504.png",
      "https://i.ibb.co/YB7r6Qww/Captura-de-tela-2026-05-31-143516.png",      
    ],
     promocao: true,
  },

]

export default ProdutosExemplo

export default function Promocao() {
  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      {
        ProdutosExemplo.map(function(produto) {
          if (produto.promocao)
            return <Exibidor
              key={ produto.codigo }
              produto={ produto }/>
        })
      }
    </>
  )
}
