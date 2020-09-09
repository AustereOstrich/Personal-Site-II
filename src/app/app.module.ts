import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FamiliarTechComponent } from './familiar-tech/familiar-tech.component';
import { AboutMeModalComponent } from './Modals/about-me-modal/about-me-modal.component';
import { AboutSchoolModalComponent } from './Modals/about-school-modal/about-school-modal.component';
import { AboutWorkModalComponent } from './Modals/about-work-modal/about-work-modal.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomePageComponent,
    ContactFormComponent,
    FamiliarTechComponent,
    AboutMeModalComponent,
    AboutSchoolModalComponent,
    AboutWorkModalComponent
  ],
    imports: [
        BrowserModule,
        ParticlesModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
