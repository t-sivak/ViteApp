import styles from './ProductCard.module.scss';
import Box from '@mui/material/Box';
import { AddToCartButton } from './addToCartButton/AddToCardButton.jsx';

export const ProductCard = ({ product }) => {
  const productImgUrl = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

  const { id, title, description, price } = product;

  return (
    <Box className={styles.productBox} id={id}>
      <Box>{title}</Box>
      <img alt="img" src={productImgUrl}></img>
      <Box className={styles.productDescription}>{description}</Box>
      <Box className={styles.productPrice}>price: {price}$</Box>
      <AddToCartButton product={product} />
    </Box>
  );
};
