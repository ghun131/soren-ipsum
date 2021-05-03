import { makeStyles } from '@material-ui/core/styles';
import border19th from '../assets/19th_border.jpeg';

export const useStyles = () => makeStyles({
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 25,
  },
  buttonGroupsContainer: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  imgStyle: {
    borderRadius: '50%',
    display: 'block',
    margin: '0 auto',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 20,
  },
  excerptWords: {
    fontSize: 20,
    width: '80%',
    margin: '30px auto',
  },
  excerptSentences: {
    fontSize: 20,
    width: '80%',
    margin: '30px auto',

    '&:first-letter': {
      fontSize: '250%',
    },
  },
  buttonContainer: {
    backgroundImage: `url(${border19th})`,
    width: 114,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
  },
  inputStyle: {
    fontSize: '20px !important',
    width: 30,
    margin: '0 7px',
  },
  selectStyle: {
    fontSize: 20,
  },
});
