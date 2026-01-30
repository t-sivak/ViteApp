import styles from './Logo.module.scss';
import Box from '@mui/material/Box';

export const Logo = () => {
  return (
    <Box
      component="img"
      className={styles.logoBox}
      src="src/assets/topShopLogo.png"
    ></Box>
  );
};
