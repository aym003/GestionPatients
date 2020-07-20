import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Medecin } from 'src/app/medecin';
import { MedecinService } from 'src/app/medecin.service';



@Component({
  selector: 'app-create-medecin',
  templateUrl: './create-medecin.component.html',
  styleUrls: ['./create-medecin.component.css']
})
export class CreateMedecinComponent implements OnInit {

  medecin: Medecin;


  ngOnInit() {
this.medecin = new Medecin();
  }

constructor(private medService: MedecinService,
    private router: Router) { }


  save() {
    this.medService.createMedecin(this.medecin)
      .subscribe
      (data => console.log(data),
       error => console.log(error));
    this.medecin = new Medecin();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/medecin-list']);
  }

}
