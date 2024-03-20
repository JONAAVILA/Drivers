import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Pagination.css';  
import { useEffect } from "react";
import { originDrivers } from "../../redux/Actions";


const Pagination = ()=>{
    const drivers = useSelector(state => state.driversFiltered)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(originDrivers("All"))
    },[])
    
    //arreglar cuando no hay una url
    return( 
        <div className="conteiner_page" >
            <div className="box_page" >
               {drivers?.map(driver => {
                    return(
                        <Link to={`/detail/api/${driver.id}`} >
                            <div className="box_card" key={driver.id}>
                                <div className="image_back_profile" style={{backgroundImage:`url(${driver.image.url})`,
                                                                            backgroundSize: 'cover',
                                                                            backgroundRepeat: 'no-repeat',
                                                                            backgroundPosition: 'center', 
                                                                        }} ></div>
                                {driver.image.url?(<img src={driver.image.url} alt="" />):(<svg  xmlns="http://www.w3.org/2000/svg"
                                                                                                 width="100" 
                                                                                                 height="100"
                                                                                                 viewBox="0 0 24 24"  
                                                                                                 fill="none"  
                                                                                                 stroke="currentColor"  
                                                                                                 stroke-width="2"    
                                                                                                 >
                                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                                <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                                                <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                                                                                <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                                                                                <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                                                                                <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                                                                                                <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                                                                                            </svg>)}
                                <h1>{driver.name.forename}</h1>
                                <div className="box_teams">
                                    <p>{driver.teams}</p>
                                </div>
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