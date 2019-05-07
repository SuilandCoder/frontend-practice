import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  list:string[] = [];
  constructor() { }

  append(str:string){
    this.list.push(str);
  }
}
