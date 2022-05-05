
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Home from './Home/Home';

import MealDetail from './MealDetail/MealDetail';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound';
import Contact from './Shop/Contact';
import Shop from './Shop/Shop';

function App() {
  return (
    <div className="App">
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
   
    <Route path="/about" element={<About/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/mymeal" element={<MealDetail/>}/>
    <Route path="/mymeal/:id" element={<MealDetail/>}>
    </Route>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
    </div>
  );
}

export default App;
