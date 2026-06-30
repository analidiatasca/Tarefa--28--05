export default function SalvarCarrinho(codigo) {
  const texto    = localStorage.getItem("carrinho")  // Passo 1
  const carrinho = JSON.parse(texto || "[]")          // Passo 2
  carrinho.push(codigo)                               // Passo 3
  localStorage.setItem("carrinho",                    // Passo 4
    JSON.stringify(carrinho))
}