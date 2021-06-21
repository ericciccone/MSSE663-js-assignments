import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


 getData() {
   return this.httpClient.get(environment.apiUrl+'/employees')
 }



 insertData(data: any) {
  return this.httpClient.post(environment.apiUrl+'/employee/add', data);
 }

 getDataById(id) {
   return this.httpClient.get(environment.apiUrl+'/employee/'+id);
 }

 updateData(id, data) {
  return this.httpClient.put(environment.apiUrl+'/employee/update/'+id, data);
 }

 deleteData(id) {
  return this.httpClient.delete(environment.apiUrl+'/employee/'+id);
 }
}
