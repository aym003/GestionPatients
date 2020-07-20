import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Medecin } from 'src/app/medecin';
import { MedecinService } from 'src/app/medecin.service';



@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {


  medecins: Observable<Medecin[]>;

constructor(private medService: MedecinService,
private router: Router) {}

ngOnInit() {
  this.medecins = this.medService.getMedecinList();
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
