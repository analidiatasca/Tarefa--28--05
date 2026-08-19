export default function RemoverCarrinho(codigo) {
    const texto    = localStorage.getItem("carrinho")  // Passo 1
    const carrinho = JSON.parse(texto || "[]")          // Passo 2
    const novoCarrinho = carrinho.filter(function(item) {
        return item !== codigo
    })
    localStorage.setItem("carrinho",                    // Passo 3
        JSON.stringify(novo))
}