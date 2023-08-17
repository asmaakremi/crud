import classes from './HeaderCartButton.module.css';
import {IoIosAddCircle} from "react-icons/io";


const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <IoIosAddCircle />
      </span>
      <span>Add Product</span>
    </button>
  );
};

export default HeaderCartButton;
