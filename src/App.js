import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from "./Components/Blog";
import {Routes, Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import Careers from './Components/Careers';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/about-us" element = {<AboutUs />}></Route>
        <Route path = "/blog" element = {<Blog />}></Route>
        <Route path = "/products" element = {<Products />}></Route>
        <Route path = "/careers" element = {<Careers />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
