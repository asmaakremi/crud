import { Fragment } from 'react';

import {HeaderCartButton} from './';
import productImage from '../../assets/ee.avif';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Skincare Products</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={productImage} alt='products' />
      </div>
    </Fragment>
  );
};

export default Header;
