import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{
  public titulo: string = '';

  public tituloSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    //console.log(route.snapshot.children[0].data)

    this.tituloSubs$ = this.getArgumentoRuta().subscribe(({ titulo }) => {
                            this.titulo = titulo
                            document.title = `AdminPro - ${titulo}`
                          });

  }
  ngOnDestroy(): void {
    document.title = `AdminPro`
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

}
