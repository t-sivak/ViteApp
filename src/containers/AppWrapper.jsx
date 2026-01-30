import { useRecoilState } from 'recoil';
import { ProductsDataState } from '../states/ProductsDataState.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader.jsx';

function AppWrapper({ children }) {
  const [dataState, setDataState] = useRecoilState(ProductsDataState);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        let appData = [...response.data.products];
        setDataState(appData);
        setIsDataLoading(true);
      })
      .catch((error) => console.log('Error receiving data', error));
  }, []);

  return <> {isDataLoading ? children : <Loader />} </>;
}

export default AppWrapper;
