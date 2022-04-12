import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './sites/country/country.component';
import { RegionComponent } from './sites/region/region.component';
import { CapitalComponent } from './sites/capital/capital.component';
import { SeeCountryComponent } from './sites/see-country/see-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    RegionComponent,
    CapitalComponent,
    SeeCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, RouterModule]
})
export class AppModule { }
