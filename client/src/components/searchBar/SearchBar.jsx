import { useSelector } from 'react-redux'

const SearchBar = ()=>{

    const state = useSelector(state => state.drivers)

    const handleSearch = (event)=>{
        const name = event.target.value
        const driverMatch = state.filter(d => {
            d.name === name
        })
        if(!driverMatch) return window.alert('Driver not found')

    }

    return(
        <div>
            <div>
                <select name="Order" id="">
                    <option value="Random">Random</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="Filter" id="">
                    <option value="Team">Team</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
                <input type="text" /> 
                <button onClick={handleSearch} >search</button>
            </div>
        </div>
    )
}

export default SearchBar;