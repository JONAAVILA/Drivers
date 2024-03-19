import { Link } from "react-router-dom";
import './Landing.css';

const Landing = ()=>{
    return(
        <div className="box_landing" >
            <div className="box_tittle_landing" >
            <h1>Welcome</h1>
                <Link to='/home' >
                  <button>enter</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;