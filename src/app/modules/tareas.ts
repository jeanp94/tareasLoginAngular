export class Tareas{
  public nombre: string
  public terminada: boolean
  constructor(nombre: string, terminada?: boolean) {
      this.terminada = terminada ? terminada : false;
      this.nombre = nombre;
  }
}
