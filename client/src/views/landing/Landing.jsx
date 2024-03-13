import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { allDrivers } from "../../redux/Actions";
import { Link } from "react-router-dom";


const Landing = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allDrivers())
    },[])

    return(
        <div>
            <h1>Welcome</h1>
            <Link to='/home' >
                <button>enter</button>
            </Link>
        </div>
    )
}

export default Landing;