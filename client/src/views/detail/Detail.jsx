import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Detail = ()=>{
    const drivers = useSelector(state => state.drivers)
    const pathname = useLocation()
    const from = pathname.pathname.split("/").find(path => path === "api")
    const { id } = useParams()
    const driverFound = drivers.api.find(driver => driver.id === parseInt(id))

    if(driverFound){
        return(
            <div>
                <h1>{driverFound.name.forename}</h1>
            </div>
        )
    }else{
        <div>
            <h1>Driver not found</h1>
        </div>
    }
}

export default Detail;