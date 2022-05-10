import {Component} from "@angular/core";
import {Product} from "../product.model"

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  error = false;
  ngOnInit() {
    // Get product here
  }
}
