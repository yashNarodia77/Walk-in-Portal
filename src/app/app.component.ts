import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
// import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    // ListingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class AppComponent {
  title = 'walk-in-portal';
}
