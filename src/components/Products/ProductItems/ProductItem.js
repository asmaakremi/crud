import {ProductItemForm} from "./";
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const product={id:props.id,
                  name:props.name, 
                  quantity:props.quantity, 
                  price:props.price}
  return (
    <li className={classes.product}>
      <div className='product__details'>
        <h3>{product.name}</h3>
        <div className={classes.quantity}>{product.quantity}</div>
        <div className={classes.price}>{product.price} $</div>
      </div>
      <div>
        <ProductItemForm product={product}/>
      </div>
    </li>
  );
};

export default ProductItem;
