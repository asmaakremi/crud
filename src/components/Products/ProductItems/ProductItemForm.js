import classes from './ProductItemForm.module.css';
import { useState  } from 'react';
import { Cart  } from '../../Cart';
import { productService } from '../../../services';


const ProductItemForm = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    event.preventDefault();
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const handleDeleteProduct = () => {
    productService.deleteProduct(props.product.id).then(
      (response) => { },
      (error) => {
        console.log("error :", error.response);
      }
    );  
  alert("product deleted successfully ") ;
};

    
  return (
    <>
        {cartIsShown && <Cart onClose={hideCartHandler} action="Edit" product={props.product} />}
          <form className={classes.form} >
            <button onClick={handleDeleteProduct}>Delete </button>
            <button onClick={showCartHandler}>Edit </button>
           
         </form>         
    </>
   
  );
};

export default ProductItemForm;
