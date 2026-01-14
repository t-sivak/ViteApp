import styles from "./ProductCard.module.scss";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const ProductCard = () => {
  return (
    <Box className={styles.cardBox}>
      <Box className={styles.buttonBox}>
        <Button className={styles.button} variant="outlined">
          {" "}
          add to cart{" "}
        </Button>
      </Box>
    </Box>
  );
};
