import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Boots',
      expanded: true,
      boot: [
        { id: 0, name: 'Boots1', price: '33' },
        { id: 1, name: 'Boots2', price: '33' },
        { id: 2, name: 'Boots3', price: '33' },
        { id: 3, name: 'Boots4', price: '33' },
        { id: 4, name: 'Boots5', price: '33' }
      ]
    },
    {
      category: 'Gloves',
      expanded: true,
      glove: [
        { id: 5, name: 'Glove1', price: '12' },
        { id: 6, name: 'Glove2', price: '12' },
        { id: 7, name: 'Glove3', price: '12' },
        { id: 8, name: 'Glove4', price: '12' }
      ]
    },
    {
      category: 'Hats',
      expanded: true,
      hat: [
        { id: 9, name: 'Hat1', price: '11' },
        { id: 10, name: 'Hat2', price: '11' },
        { id: 11, name: 'Hat3', price: '11' }
      ]
    },
    {
      category: 'Snowboards',
      expanded: true,
      snowboard: [
        { id: 12, name: 'Snowboard1', price: '22' },
        { id: 13, name: 'Snowboard2', price: '22' },
        { id: 14, name: 'Snowboard3', price: '22' },
        { id: 15, name: 'Snowboard4', price: '22' },
        { id: 16, name: 'Snowboard5', price: '22' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
