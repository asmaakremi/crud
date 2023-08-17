import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useState , useEffect } from 'react';
import productService from '../../services/product-service';
import Input from '../UI/Input';
import { inputs } from '../../constants';

const defaultFormInput ={
  'name':'',  
  'quantity':'',  
  'price':''
}
const Cart = (props) => {
  const [formErrors, setFormErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formInput,setFormInput]=useState(defaultFormInput);
  const [isValid , setIsValid]=useState(false)

  //prefill the formInput with existing product details if its in the editing mode
  useEffect(() => {
    if (props.product && props.action === 'Edit') {
      setFormInput((prev) => ({
        ...prev,
        name: props.product.name,
        quantity: props.product.quantity.toString(),
        price: props.product.price.toString(),
      }));
      setIsEditing(true); 
    }
  }, [props.product, props.action]);

  
  const handleAddProduct = (event) => {
    event.preventDefault();
      productService.addProduct(formInput)
    .then((response) => {
      setFormInput(defaultFormInput);
      props.onClose();
    })
    .catch((error) => {
      const message = error.response.data.errors;
      setFormErrors(message);
    })

    }

    const handleEditProduct =(event )=>{
      event.preventDefault();
      console.log("form input ",formInput);
      productService.editProduct(props.product.id, formInput)
    .then((response) => {
      // setFormInput(defaultFormInput);
      props.onClose();
    })
    .catch((error) => {
      const message = error.response.data.errors;
      console.log(message);
      setFormErrors(message);
    })
    }
    

    const onChange = (e) => {
      setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };
    
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={formInput[input.name]}
            onChange={onChange}
            formErrors={formErrors["name"]}
            />
        ))}
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {isEditing ? (
          <button className={classes.button} onClick={handleEditProduct}  >
            {props.action}
          </button>
        ) : (
          <button className={classes.button} onClick={handleAddProduct}>
            {props.action}
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
