import { Box, Link } from '@mui/material';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <Box className={styles.footerBox}>
      <Link className={styles.footer}>contact us</Link>
    </Box>
  );
}
