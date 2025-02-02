import styles from './index.module.css'

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.description}>I am a software developer, programmer, data scientist and machine learning engineer.
        with a proven track record in academic and commercial record in the tech field, i can be
        a valuable addition to your team.</p>

      <div  className={styles.body}>
        <div className={styles.content}>
          <h1 className={styles.name} >Software
            development</h1>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name} >Data 
          Analytics</h1>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name} >Artificial 
          intelligence.</h1>
        </div>
      </div>
    </div>
  )
}

export default Services