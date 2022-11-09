import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/modules/tareas';
import { TareasService } from 'src/app/shared/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  usuario: any;
  constructor(private tareasService: TareasService) { }
  nombreTarea = "";
  public tareas: Tareas[] = [];
  guardarTarea() {
    const nuevaTarea = new Tareas(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.tareasService.guardarTareas(this.tareas);
    this.obtenerTareas();
    // limpiar input
    this.nombreTarea = "";
  }
  eliminarTarea(indice: number) {
    const confirma = confirm("¿Quiere eliminar la tarea?");
    if (!confirma) {
      return;
    }
    this.tareas.splice(indice, 1);
    this.tareasService.guardarTareas(this.tareas);
  }
  cambiarEstadoDeTarea() {
    this.tareasService.guardarTareas(this.tareas);

  }
  obtenerTareas() {
    this.tareas = this.tareasService.obtenerTareas();

  }
  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
    this.obtenerTareas();
  }

}
