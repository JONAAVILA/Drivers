import { useDispatch } from "react-redux";
import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/searchBar/SearchBar";
import { useEffect } from "react";
import { originDrivers } from "../../redux/Actions";

const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(originDrivers("All"))
    })

    return(
        <div>
            <div>
                <h1>home</h1>
            </div>
            <div>
                <SearchBar/>
                <Pagination/>
            </div>
        </div>
    )
}

export default Home;{}