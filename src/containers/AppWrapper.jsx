import { useRecoilState } from 'recoil';
import { ProductsDataState } from '../states/ProductsDataState.jsx';
import { useEffect } from 'react';
import axios from 'axios';

function AppWrapper({ children }) {
  const [dataState, setDataState] = useRecoilState(ProductsDataState);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        let appData = [...response.data.products];
        setDataState(appData);
      })
      .catch((error) => console.log('Error receiving data', error));
  }, []);

  return <>{children}</>;
}

export default AppWrapper;
