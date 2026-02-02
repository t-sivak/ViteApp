import styles from './AddToCardButton.module.scss';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { ShoppingCartState } from '../../../../states/ShoppingCartState.jsx';
import { useRecoilState } from 'recoil';

export const AddToCartButton = ({ id, name, description, price }) => {
  const [addedProduct, setAddedProduct] = useRecoilState(ShoppingCartState);

  const addProductOnClick = () => {
    setAddedProduct([...addedProduct, { id, name, description, price }]);
  };

  return (
    <Box className={styles.buttonBox}>
      <Button onClick={addProductOnClick} size="small" variant="outlined">
        add to cart
      </Button>
    </Box>
  );
};
