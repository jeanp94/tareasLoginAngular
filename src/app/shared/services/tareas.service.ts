import { Injectable } from '@angular/core';
import { Tareas } from 'src/app/modules/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  CLAVE_LOCAL_STORAGE = "tareas_angular"
  constructor() { }
  obtenerTareas(): Tareas[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
  guardarTareas(tareas: Tareas[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }
}
