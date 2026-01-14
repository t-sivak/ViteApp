import styles from "./Header.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Header() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar className={styles.headerBox}>
                    <Box className={styles.logoBox}>
                        logo
                    </Box>
                    <Box className={styles.iconsGroupBox}>
                        <IconButton>
                            <PermIdentityIcon/>
                        </IconButton>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
