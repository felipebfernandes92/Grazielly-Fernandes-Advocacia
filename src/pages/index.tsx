import { useState } from "react"

export default function Home() {
  const [ count, setCount ] = useState(0);

  function adicionar() {
    setCount(count + 1);
  }

  function remover() {
    setCount(count - 1);
  }

  function zerar() {
    setCount(0);
  }

  const isDisabled = (count <= 0);

  return (
    <>
      <h1>!!! HOMOLOGAÇÃO!!!</h1>
      <p>Hello World!</p>
      <p>Contador { count }</p>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={remover} disabled={isDisabled}>Remover</button>
      <button onClick={zerar} disabled={isDisabled}>Zerar</button>
    </>
  )
}