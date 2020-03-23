import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEquipeComponent } from './create-equipe/create-equipe.component';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEquipeComponent,
    EquipeListComponent,
    UpdateEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
