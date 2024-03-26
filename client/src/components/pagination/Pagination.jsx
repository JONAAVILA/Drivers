import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Pagination.css';  
import { useEffect, useState } from "react";
import { originDrivers } from "../../redux/Actions";

const Pagination = ()=>{
    const [ currentPage, setCurrentPage ] = useState(1)
    const itemsPerPage = 12
    const startIndex = (currentPage -1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const drivers = useSelector(state => state.driversFiltered)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(originDrivers('All'))
    },[])
    
    const handlePrev = (event)=>{
        if(event && currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext  = ()=>{
        if(currentPage < 43 && drivers.length/itemsPerPage > 1 && currentPage < Math.ceil(drivers.length/itemsPerPage)){
            setCurrentPage(currentPage + 1)
        }
    }

    return( 
        <div className="conteiner_page" >
            <div className="box_page" >
               {drivers?.slice(startIndex,endIndex).map(driver => {
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
                                                                                                 stroke="currentColor">
                                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                                <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                                                <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                                                                                <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                                                                                <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                                                                                <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                                                                                                <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                                                                                            </svg>)}
                                <h1 key={driver.id} >{driver.name.forename}</h1>
                                <div className="box_teams">
                                    {typeof driver.teams === 'string' ? <p key={driver.id} >{driver.teams}</p> : <p key={driver.id} >{driver.teams.toString()}</p>}
                                </div>
                            </div>
                        </Link>
                    )
               })} 
            </div>
            <div className="box_button_handlers" >
                <div onClick={handlePrev} >
                    <svg xmlns="http://www.w3.org/2000/svg"  
                         width="25"  
                         height="25"  
                         viewBox="0 0 24 24"  
                         fill="none"  
                         stroke="currentColor"  
                         stroke-width="2"  
                         stroke-linecap="round"  
                         stroke-linejoin="round"  
                         class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </div>
                <p>{currentPage}</p>
                <div onClick={handleNext} >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="25"
                         height="25"
                         viewBox="0 0 24 24"  
                         fill="none"  
                         stroke="currentColor"  
                         stroke-width="2"  
                         stroke-linecap="round"  
                         stroke-linejoin="round"  
                         class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Pagination;