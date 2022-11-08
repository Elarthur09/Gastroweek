import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verecetas',
  templateUrl: './verecetas.page.html',
  styleUrls: ['./verecetas.page.scss'],
})
export class VerecetasPage  {

  year:any;
  studentOne:any;
  studentTwo:any;
  students: any = [];

  constructor(
    public _apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,

    ) {

    this.getStudents();
     }

  ngOnInit() {
  }
   getStudents(){
    this._apiService.getStudents().subscribe((res:any) => {
      console.log("Success ===",res);
      //alert(" Registro Exitoso");
      this.students = res;
    },(error: any) => {
      //alert("Error");
      console.log("Error ===",error);
    })
  }

   deleteStudent(id){
    this._apiService.deleteStudent(id).subscribe((res:any) => {
      console.log("Success ===",res);
      this.getStudents = res;
       alert(" Eliminación correcta");
    },(error: any) => {
      //alert("Error");
      console.log("Error ===",error);
    })
  }
    refreshPage(e){
    this.getStudents();
    setTimeout(() => {
      console.log("La operación se ha agregado");
      // Any calls to load data go here
      e.target.complete();
    }, 2000);
  };
  

}
