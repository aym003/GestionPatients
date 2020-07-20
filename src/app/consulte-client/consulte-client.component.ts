import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-consulte-client',
  templateUrl: './consulte-client.component.html',
  styleUrls: ['./consulte-client.component.css']
})
export class ConsulteClientComponent implements OnInit {


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

  list(){
    this.router.navigate(['client-list']);
  }


}
