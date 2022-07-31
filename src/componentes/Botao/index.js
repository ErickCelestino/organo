import './Botao.css'

//Passando coisas para dentro do componente Além de texto
const Botao = (props) =>
{
    return (
        <button className = "botao">
            {props.children}
        </button>
    )

}

export default Botao