import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/itemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido'/>
    </>
  )
}

export default App;
