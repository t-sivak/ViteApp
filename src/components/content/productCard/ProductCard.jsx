import styles from './ProductCard.module.scss';
import Box from '@mui/material/Box';
import { AddToCartButton } from './addToCartButton/AddToCardButton.jsx';

export const ProductCard = ({ product }) => {
  const productImgUrl = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

  const productId = product.id;
  const productName = product.title;
  const productDescription = product.description;
  const productPrice = product.price;

  return (
    <Box className={styles.productBox} id={productId}>
      <Box>{productName}</Box>
      <img alt="img" src={productImgUrl}></img>
      <Box className={styles.productDescription}>{productDescription}</Box>
      <Box className={styles.productPrice}>price: {productPrice}$</Box>
      <AddToCartButton
        id={productId}
        name={productName}
        description={productDescription}
        price={productPrice}
      />
    </Box>
  );
};
