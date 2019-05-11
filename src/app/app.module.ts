import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NovelasComponent } from './components/novelas/novelas.component';
import { NovelaDetailComponent } from './components/novelas/novela-detail/novela-detail.component';
import { NovelaEditComponent } from './components/novelas/novela-edit/novela-edit.component';
import { CardComponent } from './shared/components/card/card.component';
import { CarrouselComponent } from './shared/components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NovelasComponent,
    NovelaDetailComponent,
    NovelaEditComponent,
    CardComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
