import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/global.css';
// import Routing from './Routing'
import SiteNavbar from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home/index';
import AboutUs from './pages/about/index';
// import About from './pages/home/about';
import Career from './pages/career/index';
import Completed from './pages/projects/Completed';
import Contact from './pages/contact/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Routing/>
    // </div>
    <div className="App">
      <SiteNavbar/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/completed' element={<Completed/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
