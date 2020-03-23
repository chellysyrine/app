import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipeListComponent } from 'src/app/equipe-list/equipe-list.component';
import { CreateEquipeComponent } from 'src/app/create-equipe/create-equipe.component';
import { UpdateEquipeComponent } from 'src/app/update-equipe/update-equipe.component';


const routes: Routes = [
{path : '' , redirectTo:'equipe', pathMatch:'full'},
{path : 'equipes' , component:EquipeListComponent},
{path : 'add' ,component:CreateEquipeComponent },
{path : 'update/:id' ,component :UpdateEquipeComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
