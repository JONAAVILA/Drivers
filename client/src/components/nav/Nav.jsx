import { Link } from 'react-router-dom'

const Nav = ()=>{
    return(
        <div>
            <Link to='/home' >
                <button>Home</button>
            </Link>
            <Link to='/form' >
                <button>Create</button>
            </Link>
        </div>
    )
}

export default Nav;