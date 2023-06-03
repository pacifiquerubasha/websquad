import React, {useEffect} from 'react'
import './App.css'
import './Media.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Jobs from './pages/Jobs';

function App() {

  useEffect(() => {
    AOS.init({once:true});
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<NewsDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/jobs' element={<Jobs/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
