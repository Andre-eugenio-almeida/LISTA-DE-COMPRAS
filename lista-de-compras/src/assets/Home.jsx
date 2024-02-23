import {useRef} from 'react'
import {v4} from 'uuid'
import { AddButton } from './styles.jsx'



function Home() {
  const inputRef = useRef()



  function cliqueiNoBotao() {
   //setProdutos([{id:v4(), nome:inputRef.current.value}, ...produtos])
console.log(inputRef)
  }
  
  //function deletarProduto(id) {
    //setProdutos(produtos.filter(produto => produto.id !== id))
  //}
  

  return (
    <div>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef}/>
      <button>Click={cliqueiNoBotao}Adicionar</button>



    </div>
  )
}

//export default Home
