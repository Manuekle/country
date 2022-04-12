import { Component, OnInit } from '@angular/core';
import Axios from "./../../../Axios";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {

  name:string = '';
  array:any = [];

  searchCapital(event:any) {
    this.name = event.target.value;
      Axios()
        .get("capital/" + this.name)
        .then(respuesta => {
          console.log(respuesta.data);
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
        });
    }

}
