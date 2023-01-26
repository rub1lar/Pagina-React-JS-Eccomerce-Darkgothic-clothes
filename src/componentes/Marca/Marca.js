import logo from "./marca.png";
import {Link} from "react-router-dom"
function NoMercy(){
    return (
   // eslint-disable-next-line jsx-a11y/anchor-is-valid
   <  Link to = { "/"}  className="navar">
     <img  src={logo} alt="" className="logo" /> </Link>

    )
    
    }
    export default NoMercy;