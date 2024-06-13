import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { CustomerScreenComponent } from './Components/Customers/customer-screen/customer-screen.component';
import { OrderProduct } from './Models/order-product';
import { OrderDetailComponent } from './Components/Orders/order-detail/order-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainScreenComponent,CustomerScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // constructor(private router: Router){}
  
  // navigateToProducts(){
  //   this.router.navigate(['/customers'])
  // }
}