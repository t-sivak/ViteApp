import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.scss';
import { Box } from '@mui/material';

function Loader() {
  return (
    <Box className={styles.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </Box>
  );
}

export default Loader;
