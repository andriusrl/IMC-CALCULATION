import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonCustom = styled.button`
  margin-top: 3%;
`

function App() {
  const [inputWeight,setInputWeight] = useState("")
  const [inputHeight,setInputHeight] = useState("")


  const handleInputWeight = (e)=>{
    setInputWeight(e.target.value)
  }
  const handleInputHeight = (e)=>{
    setInputHeight(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <Main onSubmit={handleSubmit}>
      <header>
        <h2>Calculo do IMC</h2>
      </header>
      <Forms>
        <h4>Digite sua altura:</h4>
        <input type="text" value={inputWeight} onChange={handleInputWeight} />
        <h4>Digite seu peso:</h4>
        <input type="text" value={inputHeight} onChange={handleInputHeight} />
      </Forms>
      <ButtonCustom type="submit" >Calcular</ButtonCustom>
    </Main>
  );
}

export default App;
