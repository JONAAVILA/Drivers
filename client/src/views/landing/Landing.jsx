import { Link } from "react-router-dom";

const Landing = ()=>{
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