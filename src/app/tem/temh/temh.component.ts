import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {

  @Input() mensaje:string='';

  @Output() mensaje2 = new EventEmitter<string>();
  eventMensaje(){
    this.mensaje2.emit('Hola desde hijo');
  }

}
