import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Tables Application</h1>
      <p className={styles.subtitle}>Find free table</p>
    </div>
    
  )
}

export default Home;