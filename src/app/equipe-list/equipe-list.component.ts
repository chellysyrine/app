import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from 'src/app/equipe';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  equipes:Observable<Equipe[]>;

  constructor(private equipeservice:EquipeService, private router:Router) { }

  ngOnInit() {
    this.reloadData();

  }
  reloadData(){
    this.equipes=this.equipeservice.getEquipes();
}
deleteEquipe(id : number){
  this.equipeservice.deleteEquipe(id).subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
}


}
