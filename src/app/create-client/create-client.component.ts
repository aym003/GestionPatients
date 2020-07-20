import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  
  client: Client = new Client();


  ngOnInit() {
this.client = new Client();
  }

constructor(private clientService: ClientService,
    private router: Router) { }

  newClient(): void {
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/client-list']);
  }

}
