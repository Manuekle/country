import { Component }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import axios from 'axios';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent {

  array:any = [];
  id:string | null;
  translation:any = [];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    axios.get("https://restcountries.com/v2/alpha/" + this.id).then((respuesta) => {      
      this.array = respuesta.data;
      console.log(this.array);

      this.translation = this.array.translations;
      //console.log(this.translation);
    });
  }
 }
