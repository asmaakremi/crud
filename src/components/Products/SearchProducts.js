import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import classes from "./SearchProduct.module.css";
const SearchProducts = (props) => {
    const [name , setName]=useState(''); 
    const [price , setPrice]=useState(''); 
    const [quantity , setQuantity]=useState(''); 
  const searchHandler=(event)=>{
    event.preventDefault();
    props.onSearch(name, price, quantity);
   
  }

  const clearSearch =()=>{
    setName(''); 
    setPrice(''); 
    setQuantity('');

  }
  return (
    <div className={classes.search} >
      <form
      onSubmit={searchHandler}
        className={classes.form}
      >
        <div className={classes.search__container}>
        <div className={classes.search__input}>
          <AiOutlineSearch className={classes.icon} />
            <input
            type="text"
            className=""
            placeholder="Search product's name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <AiOutlineCloseCircle className={classes.icon} />
        </div>

        <div className={classes.search__input}>
          <AiOutlineSearch className={classes.icon} />
          <input
            type="number"
            className=""
            placeholder="quantity"
            value={quantity}
            onChange={(e)=>{setQuantity(e.target.value)}}
          />
          <AiOutlineCloseCircle className={classes.icon} />
        </div>


        <div className={classes.search__input}>
          <AiOutlineSearch className={classes.icon} />
          <input
            type="number"
            className=""
            placeholder="price"
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
          />
          <AiOutlineCloseCircle className={classes.icon} />
        </div>

        </div>
       
        <div className={classes.buttons__container}>
        <button className={classes.button} >
          Search
        </button>
        <button  onClick={clearSearch} className={classes.button}>
          Clear All
        </button>
        </div>
        
      </form>

     
       
    </div>
  );
};

export default SearchProducts;