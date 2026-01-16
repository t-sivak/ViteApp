import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <SearchIcon />
      <InputBase defaultValue="Search your apartment..." />
    </div>
  );
}
