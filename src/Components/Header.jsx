
import '../Components/Style.css';
import { Link } from 'react-router-dom';

function Header(){

      return(
       <div className="header">
          <Link to="/">Home</Link>
          <Link to="/Education">Education</Link>
          <Link to ="/About"> AboutMe</Link>
       </div>
       

      )

}
export default Header