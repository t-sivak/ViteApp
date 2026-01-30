import styles from './AddToCardButton.module.scss';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export const AddToCartButton = () => {
  return (
    <Box className={styles.buttonBox}>
      <Button size="small" variant="outlined">
        add to cart
      </Button>
    </Box>
  );
};
