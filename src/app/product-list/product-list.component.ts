import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProdAddEditComponent } from '../prod-add-edit/prod-add-edit.component';
import { CoreService } from '../core/core.service';

interface filters {
  name: string;
  price: string;
  quantity: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'action'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _coreService: CoreService, private _prodService: ProductsService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this._prodService.getProductList().subscribe({
      next: (res) => {

        this.dataSource = new MatTableDataSource(res.Product);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event, filterField: string) {
    const filterValue = (event.target as HTMLInputElement).value;

    // Apply the filter based on the specified field
    if (filterField === 'name') {
      this.dataSource.filterPredicate = (data: Product, filter: string) => {
        return data.name.toLowerCase().includes(filter);
      };
    } else if (filterField === 'price') {
      this.dataSource.filterPredicate = (data: Product, filter: string) => {
        const filterNumber = parseFloat(filter);
        return parseFloat(data.price) >= filterNumber;
      };
    } else if (filterField === 'quantity') {
      this.dataSource.filterPredicate = (data: Product, filter: string) => {
        const filterNumber = parseFloat(filter);
        return parseFloat(data.quantity) >= filterNumber;
      };
    }

    // Set the filter value and apply it
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteProduct(id: number) {
    this._prodService.deleteProduct(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Product deleted!', 'done');
        this.getProductList();
      },
      error: console.log,
    });
  }

  openEditForm(data: Product) {
    const dialogRef = this._dialog.open(ProdAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
  }

}
