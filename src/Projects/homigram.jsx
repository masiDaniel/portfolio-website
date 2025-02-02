import styles from "./homigram.module.css";


function Homigram() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Homigram</h1>
        <a><button className={styles.sourceCode}>Source Code</button></a>
      </div>

      <img src="/homie_gram.png" alt="Dan" width={'100%'} height={450} />

      <div className={styles.cards}>
        <div className={styles.landlords}>
          <h1 className={styles.cardName}>Landlords</h1>
          <p className={styles.cardDescription}>What can i say, you
            know it, i know it
            we all know it</p>
        </div>

        <div className={styles.tenants}>
          <h1 className={styles.tenantsName}>Tenants</h1>
          <p className={styles.tenantsDescription}>What can i say, you
            know it, i know it
            we all know it</p>
        </div>

        <div className={styles.landlords}>
          <h1 className={styles.cardName}>Landlords</h1>
          <p className={styles.cardDescription}>What can i say, you
            know it, i know it
            we all know it</p>
        </div>

        <div className={styles.description}>
          <p className={styles.descriptionText}>Developed by campus us for us.
            never get the feeling of frustration
          <br/><br/>
            call us today on 078000303. </p>
            <div className={styles.buttonContainer}>
            <button className={styles.button}>Get the app</button>
            </div>
        </div>
      </div>


    </div>
  );
}

export default Homigram;

