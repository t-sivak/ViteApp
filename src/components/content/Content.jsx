import Box from '@mui/material/Box';
import { ProductCard } from './productCard/ProductCard.jsx';
import styles from './Content.module.scss';
import { useRecoilValue } from 'recoil';
import { ProductsDataState } from '../../states/ProductsDataState.jsx';

export const Content = () => {
  const products = useRecoilValue(ProductsDataState);

  return (
    <Box className={styles.contentContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};
