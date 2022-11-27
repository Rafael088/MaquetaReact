import { NavLink } from "react-router-dom";

function NavBar() {
    return ( 
        <div className="contNavBar">
            <div className="contLog">
                <h1>Model</h1>
            </div>
            <div className="contBtns">
                <NavLink className="btns" to="/" >Home</NavLink>
                <NavLink className="btns" to="/about" >About</NavLink>
                <NavLink className="btns" to="/contact" >Contact</NavLink>
            </div>
        </div>
     );
}

export default NavBar;