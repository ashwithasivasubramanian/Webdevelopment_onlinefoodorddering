import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = this.cartService.getItems();
  availableDishes = [
    { name: 'Veg Burger', price: 250 },
    { name: 'Paneer Tikka', price: 300 },
    { name: 'Chicken Burger', price: 350 },
    { name: 'Fish Fry', price: 150 }
  ];
  selectedDish = this.availableDishes[0];

  constructor(private cartService: CartService, private router: Router) {}

  getTotalAmount() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
  }

  proceedToCheckout() {
    this.router.navigate(['/order']);
  }

  addDish() {
    this.cartService.addToCart({ ...this.selectedDish, quantity: 1 });
    this.cartItems = this.cartService.getItems();
  }
}
