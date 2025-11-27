import styles from './Footer.module.css'
import Nav from './nav/Nav'

function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
            <h1>Footer</h1>
          <Nav />
        </div>
      </footer>
    );
  }
  
  export default Footer