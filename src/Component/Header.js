import { LOGO_URL } from "../Utlis/contants";
import { useState } from "react";
const Header=()=>{
   const[btnLogin,setBtnLogin]=useState("login")
    return(
       <div className="header">
          <div className="log-container">
             <img className="log" src={LOGO_URL}/>
          </div>
          <div className="nav-items">
                  <ul className="nav-container">
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                   <li>Cart</li>
                  <button className="btn-login"
                   onClick={()=>setBtnLogin(btnLogin==="login"?"logout":"login")}>
                     {btnLogin}</button>
                  </ul>
          </div>
          
       </div>
    )
 }

 export default Header;