import "./pages.css"
import PersonCard from "../components/PersonCard"
import osmanImg from "../images/osman.jpg"
import eylulImg from "../images/eylul.jpg"
import baranImg from "../images/baran.jpg"
function Crew() {
    const text = "Crew"

    const crew = [
        { name: "Osman Yahya Akıncı", title: "Founder", desc: "2005 yılında İstanbul'da dünyaya gelmiştir. İstek Bilgekağan Fen Lisesi'nden sonra 2023 yılında İstanbul Teknik Üniversitesi'nde Bilgisayar Mühendisliği eğitimine başlamıştır.", img: osmanImg, linkedin: "https://www.linkedin.com/in/akincio/", insta: "https://www.instagram.com/oosmanyahya" },
        { name: "Eylül Gülbeyaz", title: "CoFounder", desc: "I am happy to share that I started my undergraduate education at Istanbul Technical University", img: eylulImg, linkedin: "https://www.linkedin.com/in/eylül-ebrar-gülbeyaz-b0757422b/", insta: "https://www.instagram.com/eylul_gulbeyaz" },
        { name: "Baran Sarak", title: "CoFounder", desc: "I am a computer engineering student in Istanbul Technical University", img: baranImg, linkedin: "https://www.linkedin.com/in/baransarak/", insta: "https://www.instagram.com/baransrkk" },
    ]



    return (
        <div className="crew-container">
            <p className="crew-title">{text}</p>
            <div className="crewcardholder">
            {
                crew.map((person)=>(
                    <PersonCard {...person} />

                ))
            }
            </div>

        </div>
    )
}

export default Crew
