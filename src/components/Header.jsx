import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import logo from "../logo/5.png"
import { FaShop } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";


function Header() {
    const navigate = useNavigate()
    return (
        <div className="header">
            <Link to="/" className="header-item"><img className="header-image" src={logo} alt="BIR-HATA-OLUSTU" /></Link>
            <Link to="/" className="header-item">Home</Link>

            <a href="https://www.instagram.com/app.feast/" target="_blank" className="header-item">Socials</a>
            <Link to="/more" className="header-item">More</Link>
            <Link to="/crew" className="header-item">Crew</Link>

            <div className="header-item">
                <FaShop className="header-icons" 
                onClick={()=>{navigate("/comingsoon")}}
                />
                <IoSettingsSharp className="header-icons" />
                <FaKey className="header-icons" />
           
            </div>

        </div>
    )
}

export default Header