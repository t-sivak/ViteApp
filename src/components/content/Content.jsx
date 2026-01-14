import Box from "@mui/material/Box";
import {ProductCard} from "./searchForm/ProductCard.jsx";
import styles from "./Content.module.scss";

export const Content = () => {
    return (
        <Box className={styles.contentContainer}>
            <ProductCard/>
        </Box>
    );
};
