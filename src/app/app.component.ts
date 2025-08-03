import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'house-project';
  properties=[
    { name: 'ikeja Apartment', 
      price: '120,000,000',
       location: 'Lekki',
       beds: 4,
       baths: 4,
       image:'https://pictures-nigeria.jijistatic.net/176111110_MTIwMC0xNjAwLTNhOGU5YmQ2ZmY.webp'
    },
    { name: 'Ikeja Duplex',
      price: '95,000,000',
      location: 'Ikeja',
      beds: 3,
      baths: 3,
      image:'https://pictures-nigeria.jijistatic.net/178962767_MTIwMC0xNjAwLTE5MzQxZGUwZmE.webp'
    },
    { name: 'Ajah Bungalow',
      price: '65,000,000',
      location: 'Ajah',
      beds: 2,
      baths: 2,
      image:'https://pictures-nigeria.jijistatic.net/164240528_MTYwMC0yMTMzLWRhMWQ4NmE3ZjM.webp'
    },
    { name: 'Ikeja Lodge',
      price: '1,000,000',
      location: 'Ikeja',
      beds: 1,
      baths: 1,
      image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645642762.jpg?k=46bec7c1caa1d746c339f5a1171247a427e636b97edb5e2fd9fbcd62067c4118&o'
    },
    { name: '5bdrm Bungalow in Ajah Lekki',
      price: '120,000,000',
      location: 'Ajah Lekki',
      beds: 5,
      baths: 6,
      image:'https://pictures-nigeria.jijistatic.net/168033895_MTA4MC0xMzUwLTQyMjUwMGQwNzA.webp'
    },
    { name: '5bdrm Bungalow in goshen estate ,Abuja',
      price: '120,000,000',
      location: 'goshen estate ,Abuja',
      beds: 5,
      baths: 6,
      image:'https://pictures-nigeria.jijistatic.net/175019180_MTQ4OC0xNjAwLTgyMGRmMzRhOTk.webp'
    }
  ];
  inquire(propertyName: string): void {
    alert(`thanks for your interest in : ${propertyName}. we will get back to you shortly`);
  }
}
