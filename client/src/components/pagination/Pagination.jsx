import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Pagination.css';  
import { useEffect } from "react";
import { originDrivers } from "../../redux/Actions";


const Pagination = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(originDrivers("All"))
    },[])
    const drivers = useSelector(state => state.driversFiltered)
    
    return( 
        <div>
            <div className="box_page" >
               {drivers.api?.map(driver => {
                    return(
                        <Link to={`/detail/api/${driver.id}`} >
                            <div className="box_card" key={driver.id} >
                                <img src={driver.image.url} alt="" />
                                <h1>{driver.name.forename}</h1>
                                <p>{driver.teams}</p>
                            </div>
                        </Link>
                    )
               })} 
            </div>
            <div>
                <button>prev</button>
                <p>1</p>
                <button>next</button>
            </div>
        </div>
    )
}

export default Pagination;