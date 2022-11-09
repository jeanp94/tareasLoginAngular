import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public miform!:FormGroup;
  constructor(private fb: FormBuilder, private loginProvider:AutenticacionService) {

  }

  ngOnInit(): void {
    this.miform = this.iniForm();
  }
  private iniForm(): FormGroup {
    return this.fb.group({
      usuario: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }
  public submitForm(){
    if(this.miform.invalid){
      Object.values(this.miform.controls).forEach(control =>{
          control.markAllAsTouched();
      });
      return;
    }
    if(!this.loginProvider.ingresarAplicacion(this.miform.value)){
      alert('Usuario invalido');
  }
    console.log(this.miform.value);
  }
  public get f():any {
    return this.miform.controls;
  }
}
