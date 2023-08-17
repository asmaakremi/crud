<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\ProductService;

class ProductController extends Controller
{
    private ProductService $productService ;  
    public function __construct(ProductService $productService){
        $this->productService=$productService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
       
        try {
            $products= $this->productService->getAllProducts($request->name,$request->price,$request->quantity);
           
            return response([
             'success'=>true,  
             'Product'=>$products,
            ],200);
         } catch (\Exception $exception) {
             return response([
                 'success'=>false ,  
                 'message'=>$exception->getMessage(),
             ],404);
         }  
          }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|unique:products|min:4',
            'price'=>'required',  
            'quantity'=>'required',
        ]);
        try{
            $this->productService->createNewProduct([
                'name'=>$request->name,
                'price'=>$request->price, 
                'quantity'=>$request->quantity,
          
            ]);
            return response([
                'success'=>true, 
                'message'=>'Product Added successfully', 
            ],200);
        }
        catch(\Exception $exception){
            return response([
                'success'=>false,
                'message'=>'Try Again',
            ],500);
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $product= $this->productService->getProductById($id); 
            return response([
             'success'=>true,  
             'post'=>$product,
            ],200);
         } catch (\Exception $exception) {
             return response([
                 'success'=>false ,  
                 'message'=>$exception->getMessage(),
             ],404);
         } 
         }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|unique:products,name,' . $id,
            'price'=>'required',  
            'quantity'=>'required',
            
        ]);
       
        try{
           $this->productService->updateProduct(
            $id,
            [
                'name'=>$request->name,
                'price'=>$request->price, 
                'quantity'=>$request->quantity,
                
            ]);
            return response([
                'success'=>true, 
                'message'=>'Product Updated', 
            ],200);
        }
        catch(\Exception $exception){
            return response([
                'success'=>false,
                'message'=>$exception->getMessage(),
            ]);
        }
            }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->productService->deleteProduct($id);
            return response([
                'success'=>true, 
                'message'=>'Product deleted',
            ],200);
        }catch(\Exception $exception){
            return response([
                'success'=>false,
                'message'=>$exception->getMessage(),
            ],500);
        } 
 }
}