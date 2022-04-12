import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './sites/country/country.component';
import { CapitalComponent } from './sites/capital/capital.component';
import { RegionComponent } from './sites/region/region.component';
import { SeeCountryComponent } from './sites/see-country/see-country.component';

const routes: Routes = [
  {
    path: '', 
    component: CountryComponent,
    pathMatch: 'full',
  }, 
  {
    path: 'country/:id',
    component: SeeCountryComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: '**', redirectTo: 'country',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
