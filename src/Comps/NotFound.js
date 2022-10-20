import {Link} from 'react-router-dom';
const NotFound = ()=>{
    return(
        <div className="not-found info">
            We're sorry, the page you entered cannot be found. Kindly recheck the address or <Link to="/">return to homepage</Link>
        </div>
    )
}
export default NotFound;