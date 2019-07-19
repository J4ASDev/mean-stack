import { Component, OnInit } from '@angular/core';

import { RegistersService } from '../services/registers.service';
import { Register } from '../interfaces/register';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css'],
  providers: [ RegistersService ]
})

export class RegistersComponent implements OnInit {

  constructor(private registersService: RegistersService) { }

  ngOnInit() {
    this.getListRegisters();
  }

  getListRegisters () {
    this.registersService.getListRegisters()
      .subscribe(register => {
        this.registersService.listRegisters = register as Register[];
      });
  }

}
