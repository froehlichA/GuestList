import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { TypescriptComponent } from './+typescript/typescript.component';
import { HomeComponent } from './+home/home.component';
import { CalculatorComponent } from './+calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorService } from './+calculator/calculator-service.service';
import { GaestelisteComponent } from './+gaesteliste/gaesteliste.component';
import { GaestelisteService } from './+gaesteliste/gaesteliste.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    TypescriptComponent,
    GaestelisteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    CalculatorService,
    GaestelisteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
