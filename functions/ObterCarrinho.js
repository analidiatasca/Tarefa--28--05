export default function ObterCarrinho() {
  const texto    = localStorage.getItem("carrinho")  // Passo 1
  const carrinho = JSON.parse(texto || "[]")          // Passo 2
  return carrinho                                     // Passo 3
}