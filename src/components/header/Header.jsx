import styles from './Header.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Logo } from './logo/Logo.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.headerBox}>
          <Logo />
          <Box className={styles.iconsGroupBox}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <PermIdentityIcon />
            </IconButton>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
