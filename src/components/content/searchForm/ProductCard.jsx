import styles from './ProductCard.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export const ProductCard = (props) => {
  //console.log(props.product);
  return (
    <Box className={styles.cardBox}>
      <div>{props.product.title}</div>
      <img alt="img" src={props.product.images}></img>
      <div className={styles.cardDescription}>{props.product.description}</div>
      <Box className={styles.buttonBox}>
        <Button size="small" className={styles.button} variant="outlined">
          {' '}
          add to cart{' '}
        </Button>
      </Box>
    </Box>
  );
};
