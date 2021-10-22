import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    container: {
        position: 'relative',
        height: '93vh',
        width: '80%',
        margin: '0 auto',
        backgroundColor: 'red',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    imageHeader: {
        position: 'absolute',
        left: '100px',
        top: '50px',
        width: '400px',
    }

}));
