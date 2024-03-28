import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allDrivers, allTeams, originDrivers } from './redux/Actions';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import Nav from './components/nav/Nav';
import './App.css'
import Error404 from './views/404/404';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(allTeams())
        dispatch(allDrivers())
        dispatch(originDrivers('All'))
    })

  return (
    <>
        {location.pathname != '/' && location.pathname != '*' ? <Nav /> : null}
      <Routes>
        <Route path='*' element={<Error404/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/db/:id' element={<Detail/>} />
        <Route path='/detail/api/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App
