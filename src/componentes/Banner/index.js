//Quando colocamos . antes do / dizemos que a partir de onde estamos siga o caminho
import './Banner.css'

function Banner() {
    return (
        //No react a classe class muda o nome por conta de a palavra class ser uma palavra reservada do java Script
        <hearder className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da págia do Organo"/>
        </hearder>
    )
}
export default Banner