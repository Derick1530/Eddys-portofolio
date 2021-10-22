import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  container: {
    margin: " 0 auto",
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px',
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      border: '2px solid red',
      fontSize: '14px'
    }
  },
  navlink: {
    // width: '100%',
    display: 'inline-block',
    // margin: '0 auto'
    fontFamily: "'Josephin',sans-serif",

  },
  hireme: {
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    },
  },
  elemLink: {
    padding: '0 12px',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      color: 'red',
      margin: '0 2px',
    }



  },

}));
