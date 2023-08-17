<?php
namespace App\Http\Repositories;

use App\Models\Product;
use Illuminate\Support\Facades\DB;
use App\Http\Interfaces\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    public function storeProduct(array $productDetails ){
        return Product::create($productDetails);
    }
    public function fetchProducts($name, $price, $quantity)
{
    $query = Product::query();

    if (!is_null($name)) {
        $query->where('name', 'LIKE', "%{$name}%");
    }

    if (!is_null($price)) {
        $query->where('price', '>', $price);
    }

    if (!is_null($quantity)) {
        $query->where('quantity', '>', $quantity);
    }

    return $query->get();
}


    public function deleteProduct($id){
        Product::destroy($id);
    }
    public function fetchProductById($id){
      return   Product::where('id',$id)->get()->first(); 
    } 
     public function updateProduct($product,$updatedProductDetails)
    {
        $product->update($updatedProductDetails);
    }
   
}
