import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  showMessage():void{
    this.productService.showMessage('Produto salvo')
  }

  salvarProduto():void{
    this.productService.salvarProduto()
  }

}
