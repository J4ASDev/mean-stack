import { Component, OnInit } from '@angular/core';

import { RegistersService } from '../services/registers.service';
import { Register } from '../interfaces/register';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css'],
  providers: [ RegistersService ]
})

export class CreateRegisterComponent implements OnInit {
  name: string = null;
  email: string = null;
  n: number = null;
  m: string = null;

  constructor(private registersService: RegistersService) { }

  ngOnInit() {
  }

  createRegisters() {
    this.registersService.register = {
      name: this.name,
      email: this.email,
      n: this.n,
      m: this.m
    };

    this.registersService.createRegisters(this.registersService.register)
      .subscribe(register => {
        this.registersService.register = register as Register;
      });
  }

  emptyTheRegister() {
    this.registersService.emptyTheRegister();
  }

  consultRegister() {
    console.log('Angular Consult:', this.registersService.register)
  }

}
