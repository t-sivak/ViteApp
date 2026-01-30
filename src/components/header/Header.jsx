import styles from './Header.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from './logo/Logo.jsx';
import { ShoppingCart } from './shoppingCart/ShoppingCart.jsx';
import { Profile } from './profile/Profile.jsx';
import { Menu } from './menu/Menu.jsx';

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.headerBox}>
          <Logo />
          <Box className={styles.iconsGroupBox}>
            <ShoppingCart />
            <Profile />
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
