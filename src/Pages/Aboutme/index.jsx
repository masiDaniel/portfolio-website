import styles from './index.module.css'
import Sidebar from '../../Components/sidebar'
function Aboutme() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.body}>
      <div className={styles.content}>
        I'm Daniel Masi, a passionate software developer and problem solver with expertise in Flutter, Django, Python, and AI.<br /><br />

        I enjoy building innovative tech solutions, from mobile and web applications to machine learning models and ERP systems.<br /><br />

        Currently, I serve as the Chief Technology Officer (CTO) at a medical company, where I design, develop, and maintain software solutions that enhance healthcare services. My experience includes working on projects in fintech, e-commerce, real estate, and AI-driven applications.
        <br /><br />
        Beyond coding, I love tackling real-world challenges, mentoring aspiring developers, and exploring cutting-edge technologies like AI, cloud computing, and cybersecurity.
        <br /><br />
        My goal is to create impactful, scalable, and sustainable software solutions that drive meaningful change.
        <br /><br />
        Let’s connect and build something great together!
      </div>

      <div className={styles.company}>
        <h1 className={styles.title}>I have worked with:</h1>
        <div className={styles.images}>
            <img src='src/assets/CIC_GROUP.png' alt="CIC" width={125} height={125} />
            <img src='src/assets/AdhereMED.png' alt="CIC" width={125} height={125} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Aboutme