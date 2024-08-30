import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerificarCirculacionComponent } from "./verificar-circulacion/verificar-circulacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerificarCirculacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matricula-app';
}
