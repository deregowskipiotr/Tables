import TableList from '../features/TableList';
import styles from './Home.module.scss';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>All Tables</h1>
      <TableList />
    </div>
    
  )
};

export default Home;