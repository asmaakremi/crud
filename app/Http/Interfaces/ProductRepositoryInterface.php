<?php
namespace App\Http\Interfaces;
interface ProductRepositoryInterface 
{
    public function storeProduct(array $productDetails );
    public function fetchProducts($name,$price , $quantity);  
    public function fetchProductById($id);  
    public function updateProduct($product, array $updatedProductDetails);  
    public function deleteProduct($id);
}