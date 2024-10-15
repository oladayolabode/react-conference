import styles from "./About.module.css"
import wallows from "../assets/pictures/wallows.jpg"

export default function About (){
    return (
        <div className={styles.container}>
            <img src={wallows} alt="wallows"/>
            <p>Join The Wallows Live In Concert, Coming To A City Close To You</p>
            <div className={styles.button}>
                <button>Buy a Ticket</button>
            </div>
        </div>
    )
}