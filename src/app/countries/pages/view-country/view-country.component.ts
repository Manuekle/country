import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Axios from "./../../../../Axios";

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent {

  array:any = [];
  id:string | null;
  translation:any = [];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    Axios()
      .get("alpha/" + this.id)
      .then(respuesta => {
        console.log(respuesta.data);
        this.array = respuesta.data;
        this.translation = this.array.translations;
      });
  }

}
