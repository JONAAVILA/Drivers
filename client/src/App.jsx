import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/Forma';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App
