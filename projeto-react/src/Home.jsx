import { useRef, useState } from 'react'
import { v4 } from 'uuid'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()



  function cliqueiNoBotao() {

    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])

  }

  function deletarProduto(id) {
    produtos.filter(produto => produto.id !== id) 

  }


  return (


    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      
        {produtos.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
          </div>
        ))}

    </div>
  )
}

export default Home
