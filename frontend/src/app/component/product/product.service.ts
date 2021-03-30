import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

 // const baseUrl='http://localhost:3001/product'

  showMessage(msg:string):void{
    this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  //createProduto():Observable<Product>{
   // return this.http.('http://localhost:3001/product')
 // }
}
