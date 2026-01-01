import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonial-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCard {
 clients = [
    {
      name: "Alex Miner",
      role: "Bitcoin Mining Expert",
      feedback: "The Antminer S19 Pro has transformed my mining operations. Exceptional hash rates and energy efficiency make it unbeatable.",
      image: "https://t3.ftcdn.net/jpg/02/22/36/14/360_F_222361406_FRccMrRh1v67wwzcGM8LyeALADwc5JwB.jpg"
    },
    {
      name: "Jessica Riggs",
      role: "GPU Mining Specialist",
      feedback: "Using Nvidia RTX 4090 GPUs in my rigs significantly boosted my mining profits. High-end performance with low downtime.",
      image: "https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg"
    },
    {
      name: "Carlos Vega",
      role: "Kadena Miner",
      feedback: "GoldShell KD6 is the best for Kadena mining. Reliable, efficient, and the build quality is excellent for 24/7 operation.",
      image: "https://thumbs.dreamstime.com/b/passport-document-id-photo-business-man-portrait-concept-young-handsome-stylish-guy-formal-wear-white-background-119717703.jpg"
    },
    {
      name: "Sophie Lin",
      role: "Crypto Enthusiast & Trader",
      feedback: "Whatsminer M30S+ provides stable and consistent mining results. It’s a solid choice for anyone serious about crypto mining.",
      image: "https://t4.ftcdn.net/jpg/07/57/61/23/360_F_757612374_09Q9dyxOKbynCiT3hMUyk3iEuoR1RgJy.jpg"
    }
  ];
}

