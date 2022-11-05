import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detallereceta',
  templateUrl: './detallereceta.page.html',
  styleUrls: ['./detallereceta.page.scss'],
})
export class DetallerecetaPage implements OnInit {

  id: any;
  year:any;
  studentOne:any;
  studentTwo:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
    ) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any) =>{
      console.log("Success",res);
      let student = res[0];
      this.year = student.year;
      this.studentOne = student.studentOne;
      this.studentTwo = student.studentTwo;
    },(err:any) => {
      console.log("Error",err);
    })
  }

}
