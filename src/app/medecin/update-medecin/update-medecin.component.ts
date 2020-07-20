import { Component, OnInit } from '@angular/core';

import { Medecin } from 'src/app/medecin';
import { Router, ActivatedRoute } from '@angular/router';
import { MedecinService } from 'src/app/medecin.service';


@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {


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

  update() {
    this.medService.updateMedecin(this.id, this.medecin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medecin = new Medecin();
    this.gotoList();
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/medecin-list']);
  }


}
