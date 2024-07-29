import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  cartItems = this.cartService.getItems();
  totalAmount = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    this.calculateTotalAmount();
  }

  get name() {
    return this.orderForm.get('name');
  }

  get address() {
    return this.orderForm.get('address');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  placeOrder() {
    if (this.orderForm.valid) {
      const orderData = {
        ...this.orderForm.value,
        cartItems: this.cartItems,
        totalAmount: this.totalAmount
      };

      this.orderService.placeOrder(orderData).subscribe(
        response => {
          if (response) {
            console.log('Order placed!', response);
            alert('Order placed successfully!');
            this.cartService.clearCart();
            this.orderForm.reset();
            this.calculateTotalAmount(); // Recalculate totalAmount
          } else {
            alert('Failed to place order. Please try again.');
          }
        },
        error => {
          console.error('Error placing order', error);
          alert('Failed to place order. Please try again.');
        }
      );
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  private calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
