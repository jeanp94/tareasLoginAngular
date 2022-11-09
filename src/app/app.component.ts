import { Component } from '@angular/core';
import { AutenticacionService } from './shared/services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tareas';

  constructor(private loginProvider:AutenticacionService){

  }
  public visualizarTareas():boolean{
      return this.loginProvider.habilitarLogeo();
  }

  ngOnInit() {

  }
}
