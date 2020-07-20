import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  clients: Observable<Client[]>;

  constructor(private clientService: ClientService,
  private router: Router) {}
  
  ngOnInit() {
    this.clients = this.clientService.getClientList();
  }
  
  
  delete(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.clients = this.clientService.getClientList();
        },
        error => console.log(error));
  }
  
  consulte(id: number){
    this.router.navigate(['consulte-client', id]);
  }
  
  update(id: number){
    this.router.navigate(['update-client', id]);
  
  }

}
