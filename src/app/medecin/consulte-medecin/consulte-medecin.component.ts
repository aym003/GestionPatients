import { Component, OnInit } from '@angular/core';

import { Medecin } from 'src/app/medecin';
import { Router , ActivatedRoute} from '@angular/router';
import { MedecinService } from 'src/app/medecin.service';



@Component({
  selector: 'app-consulte-medecin',
  templateUrl: './consulte-medecin.component.html',
  styleUrls: ['./consulte-medecin.component.css']
})
export class ConsulteMedecinComponent implements OnInit {

 
  id: number;
  medecin: Medecin;

  constructor(private route: ActivatedRoute,private router: Router,
    private medService: MedecinService) { }

  ngOnInit() {
    this.medecin = new Medecin();

    this.id = this.route.snapshot.params['id'];
    
    this.medService.getMedecin(this.id)
      .subscribe(data => {
        console.log(data)
        this.medecin = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['medecin-list']);
  }


}
