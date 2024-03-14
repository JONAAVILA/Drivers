import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allDrivers } from './redux/Actions';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/Forma';
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(allDrivers())
  },[])

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
