import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { seccionprincipal1Component } from './seccionprincipal1/seccionprincipal1.component';
import { seccionprincipal2Component } from './seccionprincipal2/seccionprincipal2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,seccionprincipal1Component,seccionprincipal2Component]
})
export class AppComponent {
  title = 'academicaMente';
}
