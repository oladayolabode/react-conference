import styles from "./Header.module.css"
export default function Header () {
    return (
        <div className={styles.header}>
            <p>WALLOWS LIVE IN CONCERT</p>
            <nav>
                <li>Home</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </nav>
        </div>
    )
}