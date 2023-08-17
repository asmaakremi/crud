const inputs=[
    {
    id:1 , 
    name:"name", 
    type:"text",
    placeholder:"product name" ,  
    label :" Name", 
    pattern: "^[a-zA-Z0-9]{4,16}$",
    errorMessage: "Product name should be 4-16 characters and shouldn't include any special character",
    required:true,
  },
    {
    id:2 , 
    name:"quantity", 
    type:"number",
    placeholder:"product quantity" ,  
    label :" Quantity",
    pattern:"^[1-9][0-9]*$",
    errorMessage:"The product quantity must be positif integers only, starting from 1. Quantities like 1, 10, 100, etc.",
    required:true,
    min: 1, 
    step: 1,

    },
    {
      id:3 , 
      name:"price", 
      type:"number",
      placeholder:"Product price" ,  
      label :" Price", 
      pattern:"^(?!0(\\.0{1,2})?$)^[0-9]+(?:\\.[0-9]{1,2})?$",
      errorMessage:"The product price must be positive decimal numbers greater than 0 with up to 2 decimal places ",
      required:true,
      min:1,
      step: 0.5
    }
  ]
  export {inputs }