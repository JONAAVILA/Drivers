import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = ()=>{
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