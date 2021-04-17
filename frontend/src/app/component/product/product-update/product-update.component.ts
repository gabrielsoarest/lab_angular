import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router : Router,
    private route :ActivatedRoute
  ) { }

    product:Product ={
      name:'',
      price:null
    }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product=>{
    this.product=product})
  }
  update():void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Atualizado com sucesso!')
    })
  }


  cancel():void{
    this.router.navigate(['/product'])
  }
}
