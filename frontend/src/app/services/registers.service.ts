import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Register } from '../interfaces/register';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegistersService {
  API_URL = 'http://localhost:4000/api/register';

  listRegisters: Register[];
  register: Register = null;

  constructor(private http: HttpClient) { }

  getListRegisters() {
    return this.http.get(this.API_URL);
  }

  createRegisters(register: Register) {
    return this.http.post(this.API_URL, register, httpOptions)
  }

  emptyTheRegister() {
    return this.register = null;
  }
}
