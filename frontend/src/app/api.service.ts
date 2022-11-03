import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 headers: HttpHeaders;

  constructor(
    public http: HttpClient

    ) {
    this.headers = new HttpHeaders();
    this.headers.append("Acept",'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');


     }
  addStudent(data){
    return this.http.post('http://localhost/PHP-IONIC-CRUD/backend/create.php',data);
  }

  getStudents(){
    return this.http.get('http://localhost/PHP-IONIC-CRUD/backend/getStudents.php');
  }
  deleteStudent(id){
    return this.http.delete('http://localhost/PHP-IONIC-CRUD/backend/delete.php?id='+id);
  }
  getStudent(id){
    return this.http.get('http://localhost/PHP-IONIC-CRUD/backend/getSingleStudent.php?id='+id);
  }
  updateStudent(id, data){
    return this.http.put('http://localhost/PHP-IONIC-CRUD/backend/updateStudent.php?id='+id,data)
  }



}
