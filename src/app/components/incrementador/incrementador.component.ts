import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 30;
  @Input() btnClass: string = 'btn-primary'

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }else if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }else{
      let progress = this.progreso + valor
      this.valorSalida.emit(progress);
      return this.progreso = progress ;
    }
    
  }

  onChange(event: any){
    if(this.progreso >= 100 && event >= 0){
      this.progreso = 100;
    }else if(this.progreso <= 0 && event < 0){
      this.progreso = 0;
    }else{
      this.progreso + event
    }

    this.valorSalida.emit(this.progreso);
  }

}
