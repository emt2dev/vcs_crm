import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Product: ProductDTO | undefined;
  TestParams: Number;
  /**
   *
   */
  constructor(public productService: ProductService, public route: ActivatedRoute) {}

  ngOnInit() {
    let parameters = this.route.snapshot.paramMap;
    let productId = Number(parameters.get("productId"));

    this.TestParams = productId;
    this.productService.GetProductDetails(productId).subscribe(async(data: ProductDTO) => {
      this.Product = data;
      await this.Product;
    });

  }

}
