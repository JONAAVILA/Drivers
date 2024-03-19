import { Link } from "react-router-dom";
import './Landing.css';

const Landing = ()=>{
    return(
        <div className="box_landing" >
            <h1>Welcome</h1>
            <Link to='/home' >
                <button>enter</button>
            </Link>
        </div>
    )
}

export default Landing;