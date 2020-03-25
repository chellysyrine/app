import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from 'src/app/equipe';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import{Equipes}from 'src/app/equipes'

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  equipes:any ;
  

  constructor(private equipeservice:EquipeService, private router:Router) { }

  ngOnInit() {
    this.reloadData();

  }
  reloadData(){
    this.equipeservice.getEquipes().subscribe((data:Equipes )=>{
      this.equipes=data;
    console.log(this.equipes);},
  error=>{
    console.log(error);
  });
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
