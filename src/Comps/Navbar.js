import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <div className='app-title'>
                <Link to="/">Inventori</Link>
            </div>
            <ul>
                <li>
                    <Link to="/"><span className="material-icons md-light">home</span>Home</Link>
                </li>
                <li>
                    <Link to="/CreateItem"><span className="material-icons md-light">add_circle</span>Add Items</Link>
                </li>
                <li>
                    <Link to="/About"><span className="material-icons md-light">help</span>About us</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;