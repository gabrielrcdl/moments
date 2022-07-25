import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = ""

  constructor() { }



  clear(){
    this.message = "";
  }

  add(message: string){
    this.message = message

    setTimeout(() => {
      this.clear()
    }, 5000)
  }
}



