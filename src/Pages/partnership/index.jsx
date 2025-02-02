import styles from "./index.module.css";
// import { Link } from "react-router-dom";

function Partnership() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Partnerships</h1>
      <div className={styles.img}>
        <img src="/handshake.png" alt="Dan" width={400} height={230} className={styles.dan} />
      </div>
      <h1 className={styles.description}>Tell me about your next project.</h1>

      <div className={styles.contacts}>
        <a href="mailto:G6K4o@example.com"><button className={styles.button}>Email Me</button></a>
        <a href="https://wa.me/254722789922"><button className={styles.button}>Whatsapp</button></a>
        <a href="tel:+254722789922"><button className={styles.button}>Call Me</button></a>
      </div>
    </div>
  )
}

export default Partnership