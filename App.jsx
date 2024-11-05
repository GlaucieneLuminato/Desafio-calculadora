import React, {useState} from "react";
import style from "style.scss";

function App() {
  
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [ resultado, setResultado] = useState()
  

   const capturandoPrimeiroValor = (e) => {
        setPrimeiroValor(Number(e.target.value))
    }

    const capturandoSegundoValor = (e) => {
      setSegundoValor(Number(e.target.value))
    }

    const Soma = () => {
        setResultado(primeiroValor + segundoValor)
        console.log(resultado)
    }

    const Subtracao = ()=> {
      setResultado(primeiroValor - segundoValor)
    }

    const Multiplicacao = () => {
      setResultado(primeiroValor * segundoValor)
    }

    const Divisao = () => {
      setResultado(primeiroValor / segundoValor)
    }

  return (
    
    <Main>
      <h1>Calculadora</h1>

      <Input placeholder="Insira um número" onChange={capturandoPrimeiroValor}/>
      <Input placeholder="Insira um número" onChange={capturandoSegundoValor} />
      <section>
      <Btn onClick={Soma}>+</Btn>
      <Btn onClick={Subtracao}>-</Btn>
      <Btn onClick={Multiplicacao}>x</Btn>
      <Btn onClick={Divisao}>/</Btn>
      </section>
      <Resultado>{resultado}</Resultado>
    </Main>
  )
}
export default App;
