import { Component } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import Axios from "./../../../../Axios";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  
  array:any = [];
  count:any = [];
  name:string = '';

  async searchCountry(event:any){
    this.name = event.target.value;

    Axios()
      .get("name/" + this.name)
      .then(respuesta => {
        if(respuesta.statusText == 'OK'){
          this.array = respuesta.data;
        }
      })
      .catch(() => {
        Swal.fire({
        title: "No hay coincidencias",
        position: "center",
        timer: 1000,
        text: "No se encontró ningun Pais con ese Nombre",
        showConfirmButton: false,
        // confirmButtonText: "Aceptar",
        // confirmButtonColor: "#238276",
        backdrop: "rgba(0,0,0,0)",
        background: "#eeeeee",
        });        
        this.array[0] = [];
        console.log(this.array);  
      });
  }

}
