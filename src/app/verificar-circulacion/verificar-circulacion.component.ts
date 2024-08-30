import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioHttpService } from '../servicio-http.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verificar-circulacion',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './verificar-circulacion.component.html',
  styleUrl: './verificar-circulacion.component.css'
})
export class VerificarCirculacionComponent {

  matricula: string = "";
  fechaActual: string = "";
  resultado: string = "";
  error: string = "";

constructor(private servicioHttp: ServicioHttpService){}

verificarCirculacion() {
  this.servicioHttp.puedeCircular(this.matricula, this.fechaActual).subscribe({
    next: (response) => {
      this.resultado = response;
      this.error = '';
    },
    error: (err) => {
      this.resultado = '';
      this.error = '' + err.error;
    }
  });
}
}


