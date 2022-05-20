import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  product?: Product;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  id = Number(this.route.snapshot.paramMap.get("id"));
  ngOnInit() {
    this.getProduct()
  }

  getProduct() {
    this.productService.getProductsById(this.id)
      .subscribe(response => this.product = response)
  }


}
