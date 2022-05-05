import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/ProductsData.service';

// Product interface
export interface Product {
    productId: string;
    productName: string;
    cost: number;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: Array<Product> = [];

    constructor(private productService: ProductsDataService) { }

    ngOnInit(): void {
    }

    getProducts() {
        this.products = this.productService.getAllProducts();
    }

}
