import { Content } from './components/content/Content.jsx';
import { ShoppingCartPage } from './components/layout/header/shoppingCart/shoppingCartPage/shoppingCartPage.jsx';
import './main.scss';
import { Route, Routes } from 'react-router';
import { Layout } from './components/layout/Layout.jsx';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="shoppingCartPage" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
