import Usuario from '../Usuario'
import './Time.css'

//Na primeira parte do return eu falo que só irá aparecer os times que tem usuários
const Time = (props) =>{
    const cssBackGround = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}

    return (
        (props.usuarios.length > 0) && <section className='time' style={cssBackGround}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='usuarios'>
            {props.usuarios.map(usuario => <Usuario corDeFundo={props.corPrimaria} key={usuario.nome} nome={usuario.nome} cargo={usuario.cargo} imagem={usuario.imagem}/>)}
            </div>
        </section>
    )
}

export default Time