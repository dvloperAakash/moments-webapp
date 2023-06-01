import { makeStyles } from "@material-ui/core";

export default  makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '87.4vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      position: 'relative',
    },
    buttonWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    },
    button: {
      color: '#ffffff',
      backgroundColor: '#3f51b5',
      padding: '12px 24px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      textTransform: 'uppercase',
    },
  }));