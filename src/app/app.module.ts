import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './third-section/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { SixthSectionComponent } from './sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './seventh-section/seventh-section.component';
import { EigthSectionComponent } from './eigth-section/eigth-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { Bootstrap } from 'node_modules/bootstrap';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    SixthSectionComponent,
    SeventhSectionComponent,
    EigthSectionComponent,
    SingleReferenceComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
