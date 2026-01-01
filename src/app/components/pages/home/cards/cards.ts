import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrls: ['./cards.css']
})  
export class Cards {

  searchText: String = "";

  cards = [
    { title: 'Antminer S19 Pro', description: 'Powerful Bitcoin mineing machine delivering exceptional hash.', image: 'https://mineshop.eu/storage/product/nc/2022/12/AntminerS19-100ths1.webp', price: '840,000.00', rating: '★★★★☆' },
    { title: 'Nvidia RTX 4090', description: 'High-end GPU optimized for crypto mining and advanced.', image: 'https://microzaib.com/wp-content/uploads/2024/06/Untitled-1-4.png', price: '504,000.00', rating: '★★★★★' },
    { title: 'GoldShell KD6', description: 'Premium Kadena miner offering impressive efficiency.', image: 'https://www.asicprices.com/img/miners/Goldshell.png', price: '1,176,000.00', rating: '★★★★☆' },
    { title: 'Whatsminer M30S+', description: 'Durable SHA-256 mining machine with stable long-term output.', image: 'https://aws-microbt-com-bucket.s3.us-west-2.amazonaws.com/WhatsMineronlineM30S%2B.png', price: '868,000.00', rating: '★★★☆☆' },
    { title: 'Antminer L7', description: 'One of the most powerful Scrypt miners for LTC & DOGE.', image: 'https://onlybestminers.com/wp-content/uploads/2021/06/IMG_7890.png', price: '2,380,000.00', rating: '★★★★★' },
    { title: 'Intel ARC A770', description: 'A budget-friendly GPU with reliable mining performance.', image: 'https://pg.asrock.com/Graphics-Card/photo/Intel%20Arc%20A770%20Phantom%20Gaming%2016GB%20OC(L1).png', price: '154,000.00', rating: '★★★☆☆' },
    { title: 'Jasminer X4-1U', description: 'Ultra-efficient ETC mining machine with lowest energy usage.', image: 'https://cdn.minetheasic.com/miner-picture/png/36797.png', price: '658,000.00', rating: '★★★★☆' },
    { title: 'Innosilicon A11 Pro', description: 'High-performance ETH/ETC miner for serious operations.', image: 'https://ae01.alicdn.com/kf/S8a95d272da8445099e2946782fcd17b8x.png', price: '1,848,000.00', rating: '★★★★★' }
  ];

  get filteredCards() {

    if (!this.searchText)
      return this.cards;

    const txt = this.searchText.toLowerCase();

    return this.cards.filter(data => {

      return (data.title || '').toLowerCase().includes(txt) ||
             (data.description || '').toLowerCase().includes(txt);

    });

  }
}
  