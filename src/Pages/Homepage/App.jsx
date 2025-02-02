import styles from './app.module.css'
import { Link } from 'react-router-dom'

function App() {
  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.name}>Daniel Masi.</h1>
      <h2 className={styles.jobTitle} >Software Engineer.</h2>
      <h3 className={styles.description}>Building the future, one line of code at a time.</h3>
      <div className={styles.socials}>
        <img src="/instagram.png" alt="Instagram" width={20} height={20} />
        <img src="/linkedIn.png" alt="Linkedin" width={20} height={20} />
        <img src="/twitter.png" alt="Twitter" width={20} height={20} />
      </div>
    </div>
    <div className={styles.image}>
      <div className={styles.links}>
        <Link to="/aboutme" >About Me</Link>
        <Link>Projects</Link>
        <Link>Services</Link>
        <Link>Partnership</Link>
        <Link>Resume</Link>
      </div>

      <img src="/dan.png" alt="Dan" width={800} height={770} className={styles.dan} />
    </div>
  </div>
  )
}

export default App
