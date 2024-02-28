import {useRef, useState } from 'react'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  

  function cliqueiNoBotao() {
    setProdutos([inputRef.current.value, ...produtos])

  }
  

  return (
    

      <div>
        <h1>Lista de Compras</h1>
        <input placeholder="produto..." ref={inputRef}/>
        <button onClick={cliqueiNoBotao}>Adicionar</button>

        {
          produtos.map((produto) => (
          <div> {produto} </div>
        ))}

      </div>
      
  )
}

export default Home
