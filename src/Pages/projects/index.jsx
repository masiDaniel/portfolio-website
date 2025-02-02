import styles from './index.module.css'
import Sidebar from '../../Components/sidebar'

function Projects() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.body}>
        <div className={styles.content}>
          <h1 className={styles.name}>HomiGram.</h1>
          <hr />
          <div className={styles.description}>
            In stiller Nacht, so tief und klar,Wo Sterne leuchten, wunderbar,Erwacht ein Traum, so sanft, so rein,Von Frieden, Licht und Sonnenschein.
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>HomiGram.</h1>
          <hr />
          <div className={styles.description}>
            In stiller Nacht, so tief und klar,Wo Sterne leuchten, wunderbar,Erwacht ein Traum, so sanft, so rein,Von Frieden, Licht und Sonnenschein.
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>HomiGram.</h1>
          <hr />
          <div className={styles.description}>
            In stiller Nacht, so tief und klar,Wo Sterne leuchten, wunderbar,Erwacht ein Traum, so sanft, so rein,Von Frieden, Licht und Sonnenschein.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects