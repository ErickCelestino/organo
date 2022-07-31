import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#d9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]
  
  const [usuarios,setUsuarios]=useState([])
  
  const aoNovoUsuarioAdcionado = (usuario) =>{
    debugger
    setUsuarios([...usuarios,usuario])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoUsuarioCadastrado={usuario =>aoNovoUsuarioAdcionado(usuario)}/>
      {times.map(time => <Time 
                              key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria}
                              corSecundaria={time.corSecundaria}
                              usuarios={usuarios.filter(usuario => usuario.time === time.nome)}
                              />)}
    </div>
  );
}

export default App;
