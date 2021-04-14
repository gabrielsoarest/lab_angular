import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private router : Router
  ) { }

    product :Product


  ngOnInit(): void {
  }

  update():void{
    this.productService.readById("1").subscribe(()=>this.product)

  }

  cancel():void{
    this.router.navigate(['/product'])
  }
}
