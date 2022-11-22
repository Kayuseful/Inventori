import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <div className='app-title'>
                <Link to="/">Inventori</Link>
            </div>
            <ul>
                <li title='Home'>
                    <Link to="/"><span className="material-icons md-light" >home</span></Link>
                </li>
                <li title="Add Items">
                    <Link to="/CreateItem"><span className="material-icons md-light">add_circle</span></Link>
                </li>
                <li title="About Inventori">
                    <Link to="/About"><span className="material-icons md-light">help</span></Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;