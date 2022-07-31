import './ListaSuspensa.css'

//Para cada item ele retorna algo
//maps() -> Cria um loop circula o array inteiro e devolte um array tratada
//Criando um dropBox na mão

const ListaSuspensa = (props) =>{
    return (
        <div className = "lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item =>{ 
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}
export default ListaSuspensa