import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdAddEditComponent } from '../prod-add-edit/prod-add-edit.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _dialog :MatDialog){
    
  }
  openAddEditForm(){
    this._dialog.open(ProdAddEditComponent);
  }
}
