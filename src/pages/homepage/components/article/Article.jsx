import Section from '../section/section';
import styles from './Article.module.css'

function Article() {
    return (
      <div className={styles.article}>
        <div className={styles.container}>
            <h1>Article</h1>
          <Section/>
          <Section/>
          <Section/>
        </div>
      </div>
    );
  }
  
  export default Article