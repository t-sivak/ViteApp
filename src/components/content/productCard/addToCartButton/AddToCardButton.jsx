import styles from './AddToCardButton.module.scss';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { ShoppingCartState } from '../../../../states/ShoppingCartState.jsx';
import { useRecoilState } from 'recoil';

export const AddToCartButton = ({ product }) => {
  const [addedProduct, setAddedProduct] = useRecoilState(ShoppingCartState);

  const { id, name, description, price } = product;

  const addProductOnClick = () => {
    setAddedProduct([...addedProduct, { id, name, description, price }]);

    const currentStoredItems =
      JSON.parse(localStorage.getItem('products')) || [];

    currentStoredItems.push({ id, name, description, price });
    localStorage.setItem('products', JSON.stringify(currentStoredItems));
  };

  return (
    <Box className={styles.buttonBox}>
      <Button onClick={addProductOnClick} size="small" variant="outlined">
        add to cart
      </Button>
    </Box>
  );
};
