import "./PersonCard.css"
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


function PersonCard({ name, img, title, desc ,  linkedin, insta }) {
    console.log('name, img, linkedin, insta : ', name, img, linkedin, insta);

    return (

        <div className="outerCard">
            <div className="contents">
            <img className="cardimg" src={img} alt={`${name}'s profile`} />
            <p className="cardname">{name}</p>
            <p className="cardtitle">{title}</p>
            <p className="carddesc">{desc}</p>

            </div>


            <div className="iconContainer">
            
            <a style={{color : "white"}} href={linkedin} target="_blank"><FaLinkedin className="cardicons" /></a>
            <a style={{color : "white"}} href={insta} target="_blank"><AiFillInstagram className="cardicons" /></a>
            


            </div>
            
        </div>
    )
}

export default PersonCard