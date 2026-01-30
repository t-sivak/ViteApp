import * as styles from './Logo.modules.scss';
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
