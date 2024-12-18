import CamperList from '../../components/CamperList/CamperList';
import Filters from '../../components/Filters/Filters';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={styles.catalogPage}>
      <Filters />
      <CamperList />
    </section>
  );
};

export default CatalogPage;
