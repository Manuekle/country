import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import Axios from "./../../../Axios";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  
  activeRegion: string = '';
  countries: Country[] = [];
  name = 'colombia';

  getCssClass(region: string): string {
    return region === this.activeRegion
      ? 'region__btn-active'
      : 'region__btn-nonactive';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    console.log(this.activeRegion);

    Axios()
      .get("region/" + this.activeRegion)
      .then(respuesta => {
        console.log(respuesta.data);
        this.countries = respuesta.data;
      });
  }
}
