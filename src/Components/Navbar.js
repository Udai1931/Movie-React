import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AuthContext} from '../Context/AuthProvider';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft:'40px',
    marginTop:'10px'
  },
}));

export default function Navbar({uid}) {
  const classes = useStyles();
  const {logout} = useContext(AuthContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{textDecoration:'none',color:'white'}} to="/"><h2>Movie DB</h2></Link>
          <Typography variant="h6" className={classes.title}>
          <Link style={{textDecoration:'none',color:'white'}} to={`/favourite/${uid}`}><h5>Favourites</h5></Link>
          </Typography>
          <Button color="inherit"onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
