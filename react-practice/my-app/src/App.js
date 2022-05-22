import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bio from './Pages/Bio'
import Home from './Pages/Home'
import Legacy from './Pages/Legacy'
import Links from './Pages/Links'
import Images from './Components/Images'

function App() {
  return (
    <div>
      <Header></Header>
      <Images></Images>
      <div class="text">
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/bio' element={<Bio />} />
              <Route path='/legacy' element={<Legacy />} />
              <Route path='/links' element={<Links />} />
          </Routes>
      </Router>
      </div>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
