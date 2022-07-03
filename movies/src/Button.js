import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const btnCLick = () => {
    console.log('You find me!');
  };
  return (
    <button className={styles.tomatoBtn} onClick={btnCLick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
