import styles from './ProductCard.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export const ProductCard = (props) => {
  console.log(props);

  return (
    <Box className={styles.cardBox}>
      <Box className={styles.buttonBox}>
        <div>{props.title}</div>
        <Button className={styles.button} variant="outlined">
          {' '}
          add to cart{' '}
        </Button>
      </Box>
    </Box>
  );
};
