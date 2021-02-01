import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Incaltaminte',
      expanded: true,
      boot: [
        { id: 0, name: 'Bocanci 35-37', price: '35' },
        { id: 1, name: 'Bocanci 42-45', price: '40' },
        { id: 2, name: 'Bocanci 36-38', price: '36' },
        { id: 3, name: 'Bocanci 37-39', price: '37' },
        { id: 4, name: 'Bocanci 39-41', price: '39' }
      ]
    },
    {
      category: 'Manusi',
      expanded: true,
      glove: [
        { id: 5, name: 'Manusi', price: '7' },
        { id: 6, name: 'Manusi', price: '7' },
        { id: 7, name: 'Manusi', price: '7' },
        { id: 8, name: 'Manusi', price: '7' }
      ]
    },
    {
      category: 'Fesuri',
      expanded: true,
      hat: [
        { id: 9, name: 'Fes', price: '10' },
        { id: 10, name: 'Fes', price: '10' },
        { id: 11, name: 'Fes', price: '10' }
      ]
    },
    {
      category: 'Snowboarduri',
      expanded: true,
      snowboard: [
        { id: 12, name: 'Snowboard', price: '50' },
        { id: 13, name: 'Snowboard', price: '60' },
        { id: 14, name: 'Snowboard', price: '55' },
        { id: 15, name: 'Snowboard', price: '100' },
        { id: 16, name: 'Snowboard', price: '85' }
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
