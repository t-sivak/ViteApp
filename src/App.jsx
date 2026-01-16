import Header from './components/header/Header.jsx';
import { Content } from './components/content/Content.jsx';
import Footer from './components/footer/Footer.jsx';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
