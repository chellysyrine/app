import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/equipe';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent implements OnInit {

  equipe : Equipe = new Equipe();
  submitted=false;
  constructor(private equipeService : EquipeService, private router :Router) { }

  ngOnInit(): void {
  }

  newEquipe() : void {
    this.submitted=false;
    this.equipe=new Equipe();
  }
  save() {
    this.equipeService.createEquipe(this.equipe).subscribe(data => console.log(data), error => console.log(error));

    this.equipe= new Equipe();
    this.gotoList();
  
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/equipes']);
  }
}
