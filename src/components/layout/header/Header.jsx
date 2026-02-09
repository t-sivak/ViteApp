import styles from './Header.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from './logo/Logo.jsx';
import { ShoppingCart } from './shoppingCart/ShoppingCart.jsx';
import { Profile } from './profile/Profile.jsx';
import { Menu } from './menu/Menu.jsx';
import { Link } from 'react-router';

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.headerBox}>
          <Link to="/">
            <Logo />
          </Link>
          <Box className={styles.iconsGroupBox}>
            <Link to="/shoppingCartPage">
              <ShoppingCart />
            </Link>
            <Profile />
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
