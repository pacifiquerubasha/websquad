import React, {useEffect} from 'react'
import './App.css'
import './Media.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = React.lazy(()=>import('./pages/Home'));
const About = React.lazy(()=>import('./pages/About'));
const Contact = React.lazy(()=>import('./pages/Contact'));
const News = React.lazy(()=>import('./pages/News'));
const NewsDetails = React.lazy(()=>import('./pages/NewsDetails'));
const Jobs = React.lazy(()=>import('./pages/Jobs'));
const Visualisations = React.lazy(()=>import('./pages/Visualisations'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const Matching = React.lazy(()=>import('./pages/Matching'));
const Loading = React.lazy(()=>import('./components/Loading'));

function App() {

  useEffect(() => {
    AOS.init({once:true});
  }, [])

  return (

    <React.Suspense fallback={<Loading isMain={true}/>}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/news/:id' element={<NewsDetails/>}/>
          <Route path='/matching' element={<Matching/>}/>
          <Route path='/visualisations' element={<Visualisations/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>

    </React.Suspense>
  )
}

export default App
