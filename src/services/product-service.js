import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/products/";
const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
const fetchProducts = (name, quantity , price) => {
  console.log(name, quantity , price);
  return axios.post(
    API_URL + "filter",
    {
        name, quantity , price
    },
    config
  );
};

const getProductDetails = (id) => {
  return axios.get(API_URL + id, config);
};
const addProduct = ({name, quantity , price}) => {
    return axios.post(
      API_URL,
      {
          name, quantity , price
      },
      config
    );
  };


  const editProduct = (id,{name, quantity , price}) => {
    console.log({id ,name, quantity , price});
    return axios.put(
      API_URL+id,
      {
          id ,name, quantity , price
      },
      config
    );
  };

  const deleteProduct = (id) => {
    return axios.delete(API_URL + id, config);
  };

  
const productService = {
    getProductDetails,
    fetchProducts,
    deleteProduct,
    addProduct, 
    editProduct,
};

export default productService;