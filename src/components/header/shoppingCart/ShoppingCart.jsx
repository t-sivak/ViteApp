import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ShoppingCartState } from '../../../states/ShoppingCartState.jsx';
import { useRecoilValue } from 'recoil';

export const ShoppingCart = () => {
  const count = useRecoilValue(ShoppingCartState);

  return (
    <IconButton>
      <Badge badgeContent={count.length} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
