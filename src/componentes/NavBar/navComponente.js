import Cart from  "../CartWidget/CartWidget";
import NoMercy from  "../Marca/Marca";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import Nav from 'react-bootstrap/Nav';
import {Link} from  "react-router-dom" 

function Navbarra () {
return (
<div> 
<div className="bg-dark"> 
    <Navbar expand="md">
      <Container fluid>
      <NoMercy/>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          
        <Nav className="nav"
          /*   className="me-auto my-2 my-lg-0 mx-auto letra"
            style={{ maxHeight: '130px' }} */
          > 
               <Cart/>
             <  Link to = { "/categoria/ropa"} className="navar" >ROPA </Link>
             <  Link to = { "/categoria/zapatillas"}  className="navar" >ZAPATILLAS </Link>
             <  Link to = { "/categoria/accesorios"}  className="navar" >ACCESORIOS </Link>
             <  Link to = "/filtro"  className="navar" >BUSCAR </Link>        

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
</div>
)
}
export default Navbarra;