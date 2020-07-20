import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];
    
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  update() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/client-list']);
  }

}
