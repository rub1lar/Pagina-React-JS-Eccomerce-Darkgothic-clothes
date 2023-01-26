import Cart from  "../CartWidget/CartWidget";
import NoMercy from  "../Marca/Marca";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import Nav from 'react-bootstrap/Nav';
import {Link} from  "react-router-dom" 

function Navbarra () {
return (
<div> 
<div className="App bg-dark"> 
    <Navbar expand="lg">
      <Container fluid>
      <NoMercy/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
        <Nav 
            className="me-auto my-2 my-lg-0 mx-auto letra"
            style={{ maxHeight: '130px' }}
          > 
          
             <  Link to = { "/category/ropa"}  className="navar" >ROPA </Link>
             <  Link to = { "/category/zapatillas"}  className="navar" >ZAPATILLAS </Link>
             <  Link to = { "/category/accesorios"}  className="navar" >ACCESORIOS </Link>
             <  Link to = "/filtro"  className="navar" >BUSCAR </Link>          <Cart/>
           
            
          </Nav>
        
      

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
</div>


)

}

export default Navbarra;