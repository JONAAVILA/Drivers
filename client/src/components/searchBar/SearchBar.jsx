import { useDispatch, useSelector } from 'react-redux'
import { orderDrivers, originDrivers, searchDrivers, teamDrivers } from '../../redux/Actions'
import { useState } from 'react'
import './SearchBar.css';

const SearchBar = ()=>{
    const [ inputValue, setInputValue ] = useState("")
    const drivers = useSelector(state => state.drivers)
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch()
    
    const handleSearch = ()=>{
        if(inputValue){
            const value = inputValue[0].toUpperCase() + inputValue.toLowerCase().slice(1)
            const driver = drivers.api.filter(d => d.name.forename === value)
            if(driver.length > 0){
                dispatch(searchDrivers(driver))
                setInputValue("")
            }else{
                window.alert(`Driver "${inputValue}" not found `)
                setInputValue("")
            }
        }
    }
    
    const handleInputSearch = (event)=>{
        setInputValue(event.target.value)
    }
    
    const handleOrder = (event)=>{
        dispatch(orderDrivers(event.target.value))
    }
    
    const handleOrigin = (event)=>{
        dispatch(originDrivers(event.target.value))
    }
    
    const handleTeams = (event)=>{
        dispatch(teamDrivers(event.target.value))
    }
    
    return(
        <div className='box_searchbar' >
            <div>
                <input placeholder='Enter a name' value={inputValue} onChange={handleInputSearch} type="text" /> 
                <button onClick={handleSearch} >search</button>
            </div>
            <select onChange={handleOrder} name="Order">
                <option value="Random">Random Order</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleOrigin} name="Origen">
                <option value="All">API and DB</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
            <select onChange={handleTeams} name="Teams">
                <option value="All">All Teams</option>
              {teams.map(team =>{
                    return(
                        <option key={team.id} value={team.name}>{team.name}</option>
                    )
              })} 
            </select>
        </div>
    )
}   

export default SearchBar;