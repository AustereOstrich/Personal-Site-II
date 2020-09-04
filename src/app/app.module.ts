import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FamiliarTechComponent } from './familiar-tech/familiar-tech.component';
import { AboutMeModalComponent } from './Modals/about-me-modal/about-me-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomePageComponent,
    ContactFormComponent,
    FamiliarTechComponent,
    AboutMeModalComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
