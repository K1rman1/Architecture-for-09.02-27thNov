import Article from '../article/article';
import Aside from '../aside/aside';
import styles from './MainSection.module.css'

function MainSection() {
    return (
      <div className={styles.mainsection}>
        <div className={styles.container}>
            <h1>MainSection</h1>
            <div className={styles.containerVisCont}>
            <Article/>
            <Aside/>
              </div>
        </div>
      </div>
    );
  }
  
  export default MainSection