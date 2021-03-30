import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  
  product: Product = {
    name:'',
    price:null
  }
  constructor(private productService:ProductService, ) { }

  ngOnInit(): void {
  }

  showMessage():void{
    this.productService.showMessage('Produto salvo')
  }

  salvarProduto():void{
  //  this.productService.createProduto(this.product).subscribe()
  }

}
