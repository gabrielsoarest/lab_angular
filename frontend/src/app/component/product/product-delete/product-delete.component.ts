import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService : ProductService, private route :ActivatedRoute, private router: Router) { }

 product : Product = new Product();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  delete():void{
    
    this.productService.deleteProduct(this.product).subscribe(() => {
      this.productService.showMessage("Produto Excluido")
      this.router.navigate(['/product'])
    } 
    )

  }

}
