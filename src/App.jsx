import Header from './components/header/Header.jsx';
import { Content } from './components/content/Content.jsx';
import Footer from './components/footer/Footer.jsx';
import './main.scss';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
