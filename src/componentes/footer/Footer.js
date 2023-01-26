import React from "react"
import imagenfoo from "./footer.png"
import imagenfoo2 from "./666.webp"
import {Link} from  "react-router-dom" 


const Footer = () => <footer className="page-footer font-small  ">

  
    <div className="container-fluid text-center text-md-left bg-dark text-white ">
        <div className="d-flex flex-column" > <img src ={imagenfoo2} alt=""></img> </div>
           
        <div className="row">
            <div className="col-md-6 mt-md-0">
                <h5 className="text-uppercase pt-3">NoMercy</h5>
                <p>La Mejor Ropa Dark Gothic Esta Aca!</p>
                <div > 
            <img className="w-20" src ={imagenfoo} alt=""></img>

                </div>
            </div>
 
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0">
                <h5 className="text-uppercase  pt-3">Que Buscas?</h5>
                <ul className="list-unstyled text-decoration-none "> 
                    <li>  <  Link to = { `/categoria/ropa`}  className="navar" >ROPA </Link></li>
                    <li> <  Link to = { `/categoria/zapatillas`}  className="navar" >ZAPATILLAS </Link></li>
                    <li><  Link to = { "/categoria/accesorios"}  className="navar" >ACCESORIOS </Link></li>
                    <li>  <  Link to = "/filtro"  className="navar" >BUSCAR </Link>  </li>
                </ul>

            </div>
       

        </div>
    </div>

    <div className=" text-center py-3 bg-dark text-white">© 2022 Copyright:
        <p >   Desarrollado Por: Sebastian Ariel </p>
    </div>

</footer>

export default Footer