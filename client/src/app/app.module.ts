import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PlanService} from "./shared/plan/plan.service";
import { PlanListComponent } from './plan-list/plan-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbar,
  MatToolbarModule
} from "@angular/material";
import { PlanEditComponent } from './plan-edit/plan-edit.component';
import {GiphyService} from "./shared/giphy/giphy.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


const appRoutes = [
  {path: '', redirectTo: 'plan-list',pathMatch:'full'},
  {
    path: 'plan-list',
    component: PlanListComponent
  },
  {
    path:'plan-add',
    component: PlanEditComponent
  },
  {
    path:'plan-edit/:id',
    component:PlanEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PlanListComponent,
    PlanEditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlanService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
