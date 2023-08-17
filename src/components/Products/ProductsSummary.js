import classes from './ProductsSummary.module.css';
import Typed from 'react-typed';

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>       <Typed strings={['Nourish', 'Renew', 'Glow']} typeSpeed={80} loop /></h2>
      <p>
      we are committed to transforming your skincare routine into a blissful journey towards radiant and healthy-looking skin.
      </p>
      <p>
      With a passion for innovation and the highest quality ingredients, we bring you a range of skincare products designed to meet the unique needs of your skin.
      </p>
    </section>
  );
};

export default ProductsSummary;
