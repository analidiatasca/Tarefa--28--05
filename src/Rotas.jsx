import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vitrine from "./pages/Vitrine"
import Produto from "./pages/Produto"
import Promocao from "./pages/Promocao"
import Carrinho from "./pages/Carrinho"
import Catalogar from "./pages/Catalogar"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Vitrine/> }/>
        <Route path="/promocao" element={ <Promocao/> } />
        <Route path="/carrinho" element={ <Carrinho/> } />
        <Route path="/produto/:codigo" element={<Produto />} />
        <Route path="/catalogar" element={<Catalogar />} />

      </Routes>
    </BrowserRouter>
  )
}