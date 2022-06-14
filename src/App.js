import { Route, Routes } from 'react-router';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ContactsContainer from "./components/ContactsContainer/ContactsContainer"
import style from "./App.module.css"
function App() {
  return (

    <div className={style.app}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<ContactsContainer />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
