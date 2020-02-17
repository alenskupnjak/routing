import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detaljliste',
  templateUrl: './detaljliste.component.html',
  styleUrls: ['./detaljliste.component.css']
})
export class DetaljlisteComponent implements OnInit, OnDestroy {
  detalj: {id: number, name: string, status: string};
  paramsLista: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.detalj = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      status: this.route.snapshot.params['status']
    };

    this.paramsLista = this.route.params.subscribe(
      (params: Params) => {
          this.detalj.id = params['id'];
          this.detalj.name = params['name'];
          this.detalj.status = params ['status'];
    });
  }

    ngOnDestroy() {
      this.paramsLista.unsubscribe();
    }


}
