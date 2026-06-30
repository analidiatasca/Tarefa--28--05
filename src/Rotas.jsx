import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vitrine from "./pages/Vitrine"
import Carrinho from "./pages/Carrinho"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Vitrine/> }/>
        <Route path="/carrinho" element={ <Carrinho /> } />
      </Routes>
    </BrowserRouter>
  )
}
