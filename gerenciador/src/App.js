import './App.css';
import Opa from './components/Opa';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
 
  return (
    <div className="App">
      <Opa />
      <SayMyName nome="Roberto" />
      <Pessoa 
        nome="Roberto"
        idade="42" 
        profissao="Alfaiateiro"
        foto="https://s2.glbimg.com/qa6F3rMoH20EIKYDa9NCWWP175s=/0x0:1024x677/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/x/jC8DO1TvANhrARtQX0hQ/robertocarlosleoaversa.jpg" 
      />
      <List/>
    </div>
  );
}

export default App;
