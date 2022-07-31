import './CampoTexto.css'
import { useState } from "react";

//Variaveis devem começar com maiusculas
//props -> Propriedades que o componente recebeu
//Mas props é apenas um nome de variavel
//Placeholder -> Parte cinza de dentro de um input

const CampoTexto = (props) =>{
    
    const placeholderModificado = `${props.placeholder}...`

    //let valor = 'Erick da Silva Celestino'
    //Para garantir o estado dentro de uma função
    const [valor,setValor] = useState('')

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>        
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
    
}

export default CampoTexto