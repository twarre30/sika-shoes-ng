import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  error = false
  ngOnInit() {
    // Get products here
  }
}
