import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Medecin } from 'src/app/medecin';
import { MedecinService } from 'src/app/medecin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-med',
  templateUrl: './recherche-med.component.html',
  styleUrls: ['./recherche-med.component.css']
})
export class RechercheMedComponent implements OnInit {


  specialite: string;

  medecins: Observable<Medecin[]>;

  constructor(private medService: MedecinService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.medecins = this.medService.getMedecinsBySpec(this.specialite);
   // window.location.reload();
  }


delete(id: number) {
  this.medService.deleteMedecin(id)
    .subscribe(
      data => {
        console.log(data);
        this.medecins = this.medService.getMedecinList();
      },
      error => console.log(error));
}

consulte(id: number){
  this.router.navigate(['consulte-medecin', id]);
}

update(id: number){
  this.router.navigate(['update-medecin', id]);

}


}
