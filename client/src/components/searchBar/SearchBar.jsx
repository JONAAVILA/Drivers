import { useDispatch, useSelector } from 'react-redux'
import { searchDrivers } from '../../redux/Actions'
import { useState } from 'react'

const SearchBar = ()=>{
    const [ inputValue, setInputValue ] = useState("")
    const state = useSelector(state => state.drivers)
    const dispatch = useDispatch()

    const handleSearch = ()=>{
        const value = inputValue[0].toUpperCase() + inputValue.toLowerCase().slice(1)
        const driver = state.api.find(d => d.name.forename === value) 
        dispatch(searchDrivers(driver))
    }

    const handleInputSearch = (event)=>{
        setInputValue(event.target.value)
    }

    return(
        <div>
            <div>
                <select name="Order" id="">
                    <option value="Random">Random</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="Origen" id="">
                    <option value="All">All</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
                <select name="Teams" id="">
                  // mapear desde state teams todas las opciones  
                </select>
                <input value={inputValue} onChange={handleInputSearch} type="text" /> 
                <button onClick={handleSearch} >search</button>
            </div>
        </div>
    )
}   

export default SearchBar;