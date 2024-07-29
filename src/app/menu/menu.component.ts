import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  vegItems = [
    { name: 'Veg Burger', description: 'A delicious veggie burger', price: 250, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg' },
    { name: 'Paneer Tikka', description: 'Spicy paneer tikka', price: 300, image: 'https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2024/1/3/paneer-tikka.jpg' },
    { name: 'Vegetable Briyani', description: 'Good Aroma and healthy ', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6HgRVScYa5FcYAoLCdWgngYMZmglM1z7Aw&s.jpg' },
  { name: 'Curd Rice', description: 'Tasty Curd Rice ', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYsV-7pB3mHfIIHhNWKNFf-J0GMHoHdMTbw&s.jpg' }
  // Add more items here
    // Add more veg items here with image paths
  ];

  nonVegItems = [
    { name: 'Chicken Burger', description: 'A delicious chicken burger', price: 350, image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg' },
    { name: 'Fish Fry', description: 'Crispy fish fry', price: 150, image: 'https://nishkitchen.com/wp-content/uploads/2015/04/Chettinad-fish-fry-1B.jpg' },
    { name: 'Grill Chicken', description: 'Spicy Grill', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqW-tziZKZnFC-NQfOqgJ3ggw12gcuKihbyw&s.jpg' },
    { name: 'Mutton Chukka', description: 'Yummy Chukka', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuO9kLCIcpDtB8TieqkYXznIK__Srbc7hag&s.jpg' }
    // Add more non-veg items here with image paths
  ];

  constructor(private router: Router, private cartService: CartService) {}

  addToCart(item: any) {
    const cartItem = { ...item, quantity: 1 };
    this.cartService.addToCart(cartItem);
    this.router.navigate(['/cart']);
  }
}
