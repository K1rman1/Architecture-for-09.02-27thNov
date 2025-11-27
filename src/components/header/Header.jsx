import styles from './Header.module.css'
import Nav from './headerNav/HeaderNav'

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
            <h1>Header</h1>
          <Nav />
        </div>
      </header>
    );
  }
  
  export default Header