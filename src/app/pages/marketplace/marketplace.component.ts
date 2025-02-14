import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent {
  // Dados fictícios para os créditos
  credits = [
    {
      image: 'assets/images/marketplace/faz08.jpg',
      amount: '10,000 tons',
      pricePerTon: '$0.50 per ton',
      totalPrice: '$5,000',
    },
    {
      image: 'assets/images/marketplace/faz01.jpg',
      amount: '20,000 tons',
      pricePerTon: '$0.60 per ton',
      totalPrice: '$12,000',
    },
    {
      image: 'assets/images/marketplace/faz02.jpg',
      amount: '30,000 tons',
      pricePerTon: '$0.70 per ton',
      totalPrice: '$21,000',
    },
    {
      image: 'assets/images/marketplace/faz03.jpg',
      amount: '15,000 tons',
      pricePerTon: '$0.55 per ton',
      totalPrice: '$8,250',
    },
    {
      image: 'assets/images/marketplace/faz04.jpg',
      amount: '25,000 tons',
      pricePerTon: '$0.65 per ton',
      totalPrice: '$16,250',
    },
    {
      image: 'assets/images/marketplace/faz05.jpg',
      amount: '40,000 tons',
      pricePerTon: '$0.75 per ton',
      totalPrice: '$30,000',
    },
    {
      image: 'assets/images/marketplace/faz06.jpg',
      amount: '5,000 tons',
      pricePerTon: '$0.45 per ton',
      totalPrice: '$2,250',
    },
    {
      image: 'assets/images/marketplace/faz07.jpg',
      amount: '12,000 tons',
      pricePerTon: '$0.50 per ton',
      totalPrice: '$6,000',
    },
    {
      image: 'assets/images/marketplace/faz08.jpg',
      amount: '10,000 tons',
      pricePerTon: '$0.50 per ton',
      totalPrice: '$5,000',
    },
    {
      image: 'assets/images/marketplace/faz01.jpg',
      amount: '20,000 tons',
      pricePerTon: '$0.60 per ton',
      totalPrice: '$12,000',
    },
    {
      image: 'assets/images/marketplace/faz13.jpg',
      amount: '30,000 tons',
      pricePerTon: '$0.70 per ton',
      totalPrice: '$21,000',
    },
    {
      image: 'assets/images/marketplace/faz12.jpg',
      amount: '15,000 tons',
      pricePerTon: '$0.55 per ton',
      totalPrice: '$8,250',
    },
    {
      image: 'assets/images/marketplace/faz04.jpg',
      amount: '25,000 tons',
      pricePerTon: '$0.65 per ton',
      totalPrice: '$16,250',
    },
    {
      image: 'assets/images/marketplace/faz12.jpg',
      amount: '5,000 tons',
      pricePerTon: '$0.45 per ton',
      totalPrice: '$2,250',
    },
    {
      image: 'assets/images/marketplace/faz07.jpg',
      amount: '12,000 tons',
      pricePerTon: '$0.50 per ton',
      totalPrice: '$6,000',
    },
  ];

  // Função para comprar créditos
  purchaseCredits(credit: any): void {
    console.log('Purchasing credits:', credit);
    // Adicione a lógica de compra aqui
  }

  // Função para limpar o carrinho
  clearCart(): void {
    console.log('Cart cleared');
  }

  // Função para finalizar a compra
  checkout(): void {
    console.log('Checkout completed');
  }
}
