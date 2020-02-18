import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers']);
    // this.router.navigate(['servers'], {relativeTo: this.route});
    // this.router.navigate(['servers']);

  }
  onReloadEdit() {
    // this.router.navigate(['/edit']);
    this.router.navigate(['servers'], {relativeTo: this.route});
  }


}
