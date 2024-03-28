import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import './Detail.css'

const Detail = ()=>{
    const drivers = useSelector(state => state.drivers)
    const pathname = useLocation()
    const from = pathname.pathname.split("/").find(path => path === "api")
    const { id } = useParams()
    const driverFound = drivers.api.find(driver => driver.id === parseInt(id))
    //cambiar modelo y stado del from de lasname -> name: {forename:"", surename:""}
    console.log(driverFound)
    if(driverFound){
        return(
            <div className="box_detail">
                <div className="box_info" >
                    <img src={driverFound.image.url} alt="" />
                    <h1>{driverFound.name.forename}</h1>
                    <h2>{driverFound.name.surname}</h2>
                </div>
                <div className="box_items">
                    <div className="item_left" >
                        <h2>escuderias</h2>
                        <h2>tems asdjasda</h2>
                    </div>
                    <div className="item_rigth" >
                        <h2>ferrari</h2>
                        <h2>sjdaskdjasdkas</h2>
                    </div>
                </div>
            </div>
        )
    }else{
        <div>
            <h1>Driver not found</h1>
        </div>
    }
}

export default Detail;