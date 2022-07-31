import './Usuario.css'
//Para substituir o props podemos passar o objeto com os campos que desejamos deixando assim a passagem de parametros menor

const Usuario = ({nome,imagem,cargo, corDeFundo}) =>{
    const corDoFundo = {backgroundColor: corDeFundo}
    return (
        <div className='usuario'>
            <div className='cabecalho' style={corDoFundo} >
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )

}

export default Usuario