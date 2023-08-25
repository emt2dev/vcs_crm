import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { delay } from 'rxjs';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { GlossaryService } from 'src/app/services/glossary.service';
import { ProductService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  AllProducts: Array<ProductDTO> = [];
  // PopularProducts: Array<ProductDTO> = [];
  // NewProducts: Array<ProductDTO> = [];
  // AvailableProducts: Array<ProductDTO> = [];
  // TrainingProducts: Array<ProductDTO> = [];
  // OtherProducts: Array<ProductDTO> = [];

  constructor(public glossary: GlossaryService, public productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    await delay(5000);

    // Below does not implement pagination
    await this.productService.GetAllProductsNoPaging().subscribe(async(data: Array<ProductDTO>) => {
      this.AllProducts = data;
      await this.AllProducts;
    });

    // // Gets Popular Products
    // await this.productService.GetAllPopularNoPaging().subscribe(async (data: Array<ProductDTO>) => {
    //   this.PopularProducts = data;

    //   await this.PopularProducts;
    // });

    // // Gets New Products
    // await this.productService.GetNewNoPaging().subscribe(async (data: Array<ProductDTO>) => {
    //   this.NewProducts = data;

    //   await this.NewProducts;
    // });

    // // Gets PreOrderable Products
    // await this.productService.GetPreOrdersNoPaging().subscribe(async (data: Array<ProductDTO>) => {
    //   this.AvailableProducts = data;

    //   await this.AvailableProducts;
    // });

    // // Gets Training Products
    // await this.productService.GetTrainingProductsNoPaging().subscribe(async (data: Array<ProductDTO>) => {
    //   this.TrainingProducts = data;

    //   await this.TrainingProducts;
    // });

    // // Gets Other Products
    // await this.productService.GetOtherProductsNoPaging().subscribe(async (data: Array<ProductDTO>) => {
    //   this.OtherProducts = data;

    //   await this.OtherProducts;
    // });

  }
}
