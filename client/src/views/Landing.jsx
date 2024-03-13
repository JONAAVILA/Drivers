import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allDrivers } from "../redux/Actions";


const Landing = ()=>{

    const dispatch = useDispatch();
    const state = useSelector(state => state.drivers)

    useEffect(()=>{
        dispatch(allDrivers())
    },[])

    console.log(state)
    return(
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

export default Landing;