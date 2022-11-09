import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private ingresar:boolean =false;
  constructor() { }

  public ingresarAplicacion(obj: any):boolean{
      this.ingresar=obj.usuario == 'test01' && obj.password == 'test01';
      localStorage.setItem('usuario', obj.usuario);
      return this.ingresar;
  }
  public habilitarLogeo(){
    return this.ingresar;
  }
}
