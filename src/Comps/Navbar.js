import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <Link to="/CreateUser">CreateUser</Link>
                </li>
                <li>
                    <Link to="/CreateItem">CreateItem</Link>
                </li>
                <li>
                    <a href="/">Inv Mgt</a>
                </li>
                <li>
                    <a href="/">About us</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;