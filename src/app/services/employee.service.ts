import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employees',data);
  }
  updateEmployee(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employees/${id}`,data);
  }
  showall():Observable<any>{
    return this.http.get('http://localhost:3000/employees');
  }
  deleteemp(id:number): Observable<any> {
      return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
  statis():number{
    return this.addEmployee.length;
  }
}

