import { useDispatch, useSelector } from 'react-redux';
import logo from './avatar.png';
import selectors from '../../redux/selectors';
import operations from '../../redux/operations';
import './UserMenu.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    display: 'block',
    letterSpacing: '1px',
    textTransform: 'none',
    fontSize: '14px',
  },
});

function UserMenu() {
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className="userMenu">
      <img src={logo} alt="" width="32" className="userAvatar" />
      <span className="userName">
        Welcome, <b>{name}</b> {` (${email})`}
      </span>
      <Button
        type="button"
        size="small"
        variant="contained"
        onClick={() => dispatch(operations.logOut())}
        className={classes.button}
      >
        Logout
      </Button>
    </div>
  );
}
export default UserMenu;
