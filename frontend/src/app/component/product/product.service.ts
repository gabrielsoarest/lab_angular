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

 baseUrl='http://localhost:3001/product'

  showMessage(msg:string):void{
    this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create (product:Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:String):Observable<Product>{
    console.log("entrou")
    const url =`${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  
  update():Observable<Product>{
    return null;
  }
}
