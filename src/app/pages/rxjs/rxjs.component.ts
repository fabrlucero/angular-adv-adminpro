import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;



  constructor() {

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs: ', valor),
    //   err => console.warn('Error:', err),
    //   () => console.log('Obs Terminado')
    // );

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(
        console.log
      );
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  retornaIntervalo(): Observable<number> {
    const interval$ = interval(500)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
        take(10),
      );

    return interval$;
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i)

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('Llego a 2')
        }

      }, 1000)
    });
  }

}
