import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  
  products:Product[]
  
  displayedColumns = ['id', 'name','price','acoes'];
  
  constructor(private produtoService:ProductService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe( products=>{
      this.products=products
      console.log(products)
    })
  }

  read():void{
    console.log("entrou no read")
  }

}
