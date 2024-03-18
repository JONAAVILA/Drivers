import { useDispatch, useSelector } from 'react-redux'
import { allTeams, orderDrivers, originDrivers, searchDrivers, teamDrivers } from '../../redux/Actions'
import { useEffect, useState } from 'react'

const SearchBar = ()=>{
    const [ inputValue, setInputValue ] = useState("")
    const drivers = useSelector(state => state.drivers)
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch()
    
    const handleSearch = ()=>{
        const value = inputValue[0].toUpperCase() + inputValue.toLowerCase().slice(1)
        const driver = drivers.api.find(d => d.name.forename === value) 
        dispatch(searchDrivers(driver))
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
    const driversFiltered = useSelector(state => state.driversFiltered) // despues eliminar
    console.log(drivers)
    console.log(driversFiltered)
    return(
        <div>
            <div>
                <select onChange={handleOrder} name="Order">
                    <option value="Random">Random</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleOrigin} name="Origen">
                    <option value="All">All</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
                <select onChange={handleTeams} name="Teams">
                    <option value="All">All</option>
                  {teams.map(team =>{
                        return(
                            <option key={team.id} value={team.name}>{team.name}</option>
                        )
                  })} 
                </select>
                <input value={inputValue} onChange={handleInputSearch} type="text" /> 
                <button onClick={handleSearch} >search</button>
            </div>
        </div>
    )
}   

export default SearchBar;