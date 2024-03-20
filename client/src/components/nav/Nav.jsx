import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ()=>{
    return(
        <div className='box_nav' >
            <div>
                <h1>DRIVERS AROUND THE WORD</h1>
            </div>
            <div>
             <Link to='/home' >
                <button>Home</button>
            </Link>
            <Link to='/form' >
                <button>Create</button>
            </Link>   
            </div>
            
        </div>
    )
}

export default Nav;