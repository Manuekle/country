import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';


const routes: Routes = [
  {
    path: '',
    children:[
      { path: '', component: CountryComponent },
      { path: 'country/:id', component: ViewCountryComponent },
      { path: 'region', component: RegionComponent },
      { path: 'capital', component: CapitalComponent },
      { path: '**', redirectTo: '' },
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
