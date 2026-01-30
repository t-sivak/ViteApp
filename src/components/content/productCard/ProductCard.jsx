import styles from './ProductCard.module.scss';
import Box from '@mui/material/Box';
import { AddToCartButton } from './addToCartButton/AddToCardButton.jsx';

export const ProductCard = (props) => {
  const productImgUrl = Array.isArray(props.product.images)
    ? props.product.images[0]
    : props.product.images;
  return (
    <Box className={styles.cardBox}>
      <div>{props.product.title}</div>
      <img alt="img" src={productImgUrl}></img>
      <div className={styles.cardDescription}>{props.product.description}</div>
      <AddToCartButton />
    </Box>
  );
};
