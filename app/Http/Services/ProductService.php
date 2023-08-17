<?php
namespace App\Http\Services;
use Exception;

use Illuminate\Support\Facades\DB;
use App\Http\Interfaces\ProductRepositoryInterface;

        
class ProductService
{
    private ProductRepositoryInterface $productRepository ;  
    public function __construct(ProductRepositoryInterface $productRepo ){
        $this->productRepository=$productRepo ;
    }
    public function createNewProduct(array $productDetails  ){
        DB::beginTransaction();
            $this->productRepository->storeProduct($productDetails); 
        DB::commit();
    }
    public function getAllProducts($name, $price ,$quantity){
            $products=$this->productRepository->fetchProducts($name, $price ,$quantity);
        return $products->isNotEmpty() ? $products:throw new Exception('No Product Found ');      
    }
    public function getProductById($id){
        $product=$this->productRepository->fetchProductById($id);
        return !is_null($product) ? $product:throw new Exception('Product Not Found ');  
    }

    public function updateProduct($id, array $updatedProductDetails){
        $product=$this->getProductById($id);
        DB::beginTransaction();
        $this->productRepository->updateProduct($product,$updatedProductDetails);
        DB::commit();
    }
    public function deleteProduct($id){
        $product=$this->getProductById($id);
        DB::beginTransaction();
       $this->productRepository->deleteProduct($id);
        DB::commit();
    }


}