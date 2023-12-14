import { LOGO_URL } from "../Utlis/contants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header=()=>{
   const[btnLogin,setBtnLogin]=useState("login")
    return(
       <div className="header">
          <div className="log-container">
             <img className="log" src={LOGO_URL}/>
          </div>
          <div className="nav-items">
                  <ul className="nav-container">
                     <li>
                     <Link to="/">Home</Link>
                     </li>
                   <li>
                     <Link to="/about">About Us</Link> 
                     </li>
                   <li>
                     <Link to="/contact">Contact Us</Link>
                     </li>
                   <li><a>Cart</a></li>
                  <button className="btn-login"
                   onClick={()=>setBtnLogin(btnLogin==="login"?"logout":"login")}>
                     {btnLogin}</button>
                  </ul>
          </div>
          
       </div>
    )
 }

 export default Header;