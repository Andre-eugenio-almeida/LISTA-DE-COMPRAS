import {useRef, useState} from 'react'
import {v4} from 'uuid'
//import { AddButton } from './styles.jsx'



function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()



  function cliqueiNoBotao() {
   setProdutos([{id:v4(), nome:inputRef.current.value}, ...produtos])
   
  }
  
  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  

  return (
    <div>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef}/>
      <button>Click={cliqueiNoBotao}Adicionar</button>

      {
        produtos.map((produto) => (
          <div key={produto.id}>
          <p> {produto.nome} </p>
          <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
          </div>
        ))
      }


    </div>
  )
}

export default Home
