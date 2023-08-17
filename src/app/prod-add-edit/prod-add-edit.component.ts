import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-prod-add-edit',
  templateUrl: './prod-add-edit.component.html',
  styleUrls: ['./prod-add-edit.component.css']
})
export class ProdAddEditComponent implements OnInit {
  productForm :FormGroup;
  constructor(private _coreService:CoreService, private _fb :FormBuilder , private _prodService :ProductsService , private _dialogRef :MatDialogRef<ProdAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any){
    this.productForm=this._fb.group(new Product('','',''));
  }
  ngOnInit(): void {
    this.productForm.patchValue(this.data)
  }
  onFormSubmit(){
    if(this.productForm.valid){
      if(this.data){
        this._prodService.updateProduct(this.data.id,this.productForm.value).subscribe({
          next:(val :any)=>{
              this._coreService.openSnackBar("product updated !") 
               this._dialogRef.close(true);
          }, 
          error:(err :any)=>{
            console.error(err)
            
          }
        })
      }
      else{ this._prodService.addProduct(this.productForm.value).subscribe({
        next:(val :any)=>{
          this._coreService.openSnackBar("product added successfully") 
             this._dialogRef.close(true);
        }, 
        error:(err :any)=>{
          console.error(err)
          
        }
      })}
     
    }
  }
}
