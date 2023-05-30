import './App.css'
import { Footer , Features, Blog, Header, Possibility, WhatGPT3} from './Containers';
import {Navbar, Brand, Cta } from './Components'

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App
