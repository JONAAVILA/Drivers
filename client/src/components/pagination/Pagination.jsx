import { useSelector } from "react-redux";


const Pagination = ()=>{
    const drivers = useSelector(state => state.drivers)
    
    return(
        <div>
            <div>
                
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