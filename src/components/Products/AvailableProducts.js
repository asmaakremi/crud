import {Card} from '../UI';
import {ProductItem} from "./";
import classes from './AvailableProducts.module.css';
import { useState , useEffect } from 'react';
import { productService } from '../../services';
import {AiOutlineLoading3Quarters} from "react-icons/ai";



const AvailableProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError]=useState('');

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      await productService.fetchProducts(props.name, props.quantity, props.price).then(
        (response) => {
          setProducts(response.data.Product);
          setIsFetching(false);
        },
        (error) => {
          setError( error.response.data.message)
        }
      );
    }
    fetchProducts();
  }, [props.name, props.quantity, props.price]);


  const productsList = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      quantity={product.quantity}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
    {!isFetching ? (
      <Card>
        <ul>{productsList}</ul>
      </Card>
    ) : (
      <>
        {error ? (
          <p>{error}</p>
        ) : (
          <AiOutlineLoading3Quarters className={classes.icon} />
        )}
      </>
    )}
  </section>
  

      
  );
};

export default AvailableProducts;
