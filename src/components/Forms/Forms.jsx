import React from 'react'
import "./forms.scss"

const Forms = () => {
  return (
    <div className="formsContainer">
        <div className="formItems">
            <div className="name" >
                <h1>Nome:</h1>
                <input type="text" placeholder="Informe seu Nome" required />
            </div>
            <div className="emailnumber" >
                <div className="email">
                    <h1>E-mail:</h1>
                    <input type="email" placeholder="Informe seu E-mail" required  />
                </div>
                <div className="number">
                    <h1>Telefone:</h1>
                    <input type="text" placeholder="(__)_____-____" required  />  
                </div> 
            </div>
            <div className="message" >
                <h1>Mensagem:</h1>
                <input type="text" placeholder="Escreva aqui" required />
            </div>
        </div>
        <button className='button'>ENVIAR</button>
    </div>
  )
}

export default Forms