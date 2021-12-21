import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  constructor() { }

  getProfessionnel(){
    return of(0);
  }

  getIdUser(){
    return of(0);
  }

  evaluate(body:any){
    return of(0);
  }
}
