import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      name: 'Mega888',
      image: '/images/mega888.png',

      downloads: [
        {
          name: 'Android Download',
          url: 'https://android-link.com'
        },
        {
          name: 'iOS Download',
          url: 'https://ios-link.com'
        }
      ]
    }
  ];

  selectedProduct: any = null;

  openModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
