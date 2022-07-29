import './CampoTexto.css'

//Variaveis devem começar com maiusculas
//props -> Propriedades que o componente recebeu
//Mas props é apenas um nome de variavel
//Placeholder -> Parte cinza de dentro de um input

const CampoTexto = (props) =>{
    
    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>        
            <input placeholder={placeholderModificado}/>
        </div>
    )
    
}

export default CampoTexto