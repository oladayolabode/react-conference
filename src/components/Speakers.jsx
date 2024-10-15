import styles from "./Speakers.module.css";
import lana from "../assets/pictures/lana.webp";
import rex from "../assets/pictures/rex.jpg";
import clairo from "../assets/pictures/clairo.webp";
import finneas from "../assets/pictures/finneas.jpeg";
import jmsn from "../assets/pictures/jmsn.jpg";
import phoebe from "../assets/pictures/phoebe.jpg";



export default function Speakers(){
    return (
        <div className={styles.container}>
            <div className={styles.speakers}>
                <div>
                    <img src={lana} alt="lana"/>
                    <h3>LANA DEL REY</h3>
                    <h3>SET Time - 8:00 - 8:30</h3>
                </div>
                <div>
                    <img src={rex} alt="rex"/>
                    <h3>REX COUNTY ORANGE</h3>
                    <h3>SET Time - 8:30 - 9:00 </h3>
                </div>
                <div>
                    <img src={clairo} alt="clairo"/>
                    <h3>CLAIRO</h3>
                    <h3>SET Time - 9:00 - 9:30</h3>
                </div>
            </div>
            <div className={styles.speakers}>
                <div>
                    <img src={finneas} alt="finneas"/>
                    <h3>FINNEAS</h3>
                    <h3>SET Time - 9:30 - 10:00</h3>
                </div>
                <div>
                    <img src={jmsn} alt="jmsn"/>
                    <h3>JMSN</h3>
                    <h3>SET Time - 10:00 - 10:30</h3>
                </div>
                <div>
                    <img src={phoebe} alt="phoebe"/>
                    <h3>PHOEBE BRIDGERS</h3>
                    <h3>SET Time - 10:30 - 11:00</h3>
                </div>
            </div>
        </div>
    )
}