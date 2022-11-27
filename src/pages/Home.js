import NavBar from "../components/NavBar";
import { AiFillInstagram, AiOutlineWhatsApp, AiOutlineIdcard, AiOutlineDeploymentUnit, AiFillHeart, AiFillCalendar } from "react-icons/ai";
function Home() {
    return ( 
        <section className="contHome">
            <NavBar/>
            <div className="contBody">
                <div className="contInfo">
                    <div className="contTitle">
                        <span>Web development</span>
                    </div>
                    <div className="contCard">
                        <div className="card">
                            
                        </div>
                    </div>
                </div>
            </div>
            <section className="contContent">
                <div className="contLeft">
                    <div className="contBody">
                        <AiOutlineIdcard className="icon"/>
                    </div>
                </div>
                <div className="contCard">
                    <div className="contImg">
                    </div>
                    <div className="contCardInfo">
                        <b>Rafael Aguirre</b>
                        <p>Desarrollador de Software de Mision Riqueza</p>
                        <div className="contBar">
                            <p><AiFillInstagram className="icon"/>
                                <AiOutlineWhatsApp className="icon"/>
                            </p> 
                        </div>
                    </div>
                    <div className="contBtns">
                        <AiFillHeart className="iconBtn"/>
                        <AiFillCalendar className="iconBtn t" />
                    </div>
                </div>
                <div className="contRight">
                    <div className="contBody">
                        <AiOutlineDeploymentUnit className="icon" />
                        <div className="contContect">
                            
                        </div>
                        <div className="contContect">
                            
                        </div>
                        <div className="contContect">
                            
                        </div>
                        <div className="contContect">
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className="contFooter">
                
            </div>
        </section>
     );
}

export default Home;