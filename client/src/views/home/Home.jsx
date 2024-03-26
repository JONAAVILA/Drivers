import { useDispatch } from "react-redux";
import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/searchBar/SearchBar";
import './Home.css';
import { useEffect } from "react";
import { allDrivers, allTeams, originDrivers } from "../../redux/Actions";

const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(allTeams())
        dispatch(allDrivers())
        dispatch(originDrivers('All'))
    })

    return(
        <div className="box_home" >
            <SearchBar/>
            <Pagination/>
        </div>
    )
}

export default Home;