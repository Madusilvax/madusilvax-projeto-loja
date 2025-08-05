export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <main>
      <h2>Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id} style={{ marginBottom: '1rem' }}>
            {produto.nome} - R$ {produto.preco}
            <br />
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

```

```
//Carrinho.jsx

export default function Carrinho({ carrinho }) {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <main>
      <h2>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {item.preco}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> R$ {total}</p>
        </>
      )}
    </main>
  )
}