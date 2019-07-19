import { Component, OnInit } from '@angular/core';
import { RegistersService } from '../services/registers.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ RegistersService ]
})
export class MenuComponent implements OnInit {

  constructor(private registersService: RegistersService) { }

  ngOnInit() {
  }

  emptyTheRegister() {
    this.registersService.emptyTheRegister();
  }
}
