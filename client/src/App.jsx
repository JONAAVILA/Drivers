import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allDrivers, allTeams } from './redux/Actions';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/Forma';
import Nav from './components/nav/Nav';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(()=>{
      dispatch(allDrivers())
      dispatch(allTeams())
  },[])

  return (
    <>
        {location.pathname != '/' && location.pathname != '*' ? <Nav /> : null}
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
