import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(usuarios => {
      console.log(usuarios)
    });
    // const promesa = new Promise((resolve, reject) => {
    //   if(false){
    //     resolve('Hola mundo')
    //   }else{
    //     reject('Algo salio mal')
    //   }

    // });

    // promesa.then(() => {
    //   console.log('Termine')
    // }).catch(error => {
    //   console.log('Error init promesa ', error)
    // })

    // console.log('Fin init')
  }

  getUsuario() {

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })

    return promesa;
  }

}
