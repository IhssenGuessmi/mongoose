import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import AddContact from './component/AddContact';
import NotFound from './component/NotFound';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Contacts from './component/Contacts';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/contacts' element={<Contacts/>} />
    <Route path='/addContact' element={<AddContact/>} />
    <Route path='/*' element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
