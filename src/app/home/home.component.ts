import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  properties = [
    {
      name: 'Ikeja Apartment',
      price: '120,000,000',
      location: 'Lekki',
      beds: 4,
      baths: 4,
      description: 'A luxurious apartment in the heart of Ikeja.',
      image: 'https://pictures-nigeria.jijistatic.net/176111110_MTIwMC0xNjAwLTNhOGU5YmQ2ZmY.webp'
    },
    {
      name: '5 bedroom Bungalow in Abuja',
      price: '120,000,000',
      location: 'Goshen estate, Abuja',
      beds: 5,
      baths: 6,
      description: 'Fully furnished, serene environment, reliable power supply.',
      image: 'https://pictures-nigeria.jijistatic.net/175019180_MTQ4OC0xNjAwLTgyMGRmMzRhOTk.webp'
    },

    {
    
      name: '5bdrm Bungalow in goshen estate ,Abuja',
      price: '120,000,000',
      location: 'goshen estate ,Abuja',
      beds: 5,
      baths: 6,
      image:'https://pictures-nigeria.jijistatic.net/175019180_MTQ4OC0xNjAwLTgyMGRmMzRhOTk.webp',
      description:'fully furnished,located in a serene environment, reliable power supply with backup generator,constant water supply,parking space'
    },

    {
      name: 'Ikeja Lodge',
      price: '1,000,000',
      location: 'Ikeja',
      beds: 1,
      baths: 1,
      image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645642762.jpg?k=46bec7c1caa1d746c339f5a1171247a427e636b97edb5e2fd9fbcd62067c4118&o',
      description:'24-hour electricity with a backup generator,Free on-site parking,free wifi,Air conditioning'
    },
    {
     name: 'Ajah Bungalow',
      price: '65,000,000',
      location: 'Ajah',
      beds: 2,
      baths: 2,
      image:'https://pictures-nigeria.jijistatic.net/164240528_MTYwMC0yMTMzLWRhMWQ4NmE3ZjM.webp',
      description:' 24-hour electricity with a backup generator, fully furnished,located in a secure and serene environment,'
    },
    {
      name: '4bedroom Fully Detached Duplex at Sangotedo',
      price: '120,000,000',
      location: 'Sangotedo',
      beds: 4,
      baths: 2,
      image:'https://pictures-nigeria.jijistatic.net/168033895_MTA4MC0xMzUwLTQyMjUwMGQwNzA.webp',
      description:'parking space,constant water supply  ,Fully furnished,located in a serene environment'
    }
  ];

  inquire(propertyName: string): void {
    alert(`Thanks for your interest in: ${propertyName}. We will get back to you shortly!`);
  }
}
