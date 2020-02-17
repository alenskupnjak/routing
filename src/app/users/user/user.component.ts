import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscriotion: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    console.log(this.user);
    console.log(this.user.id);
    console.log(this.user.name);

    this.paramsSubscriotion = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        console.log(params['id']);
        console.log(params['name']);
        console.log('stigao');
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscriotion.unsubscribe();
    console.log('izasao');
  }

}
