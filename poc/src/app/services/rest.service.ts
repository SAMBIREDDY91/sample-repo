import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

  constructor(public http: HttpClient) {}

  public findAll<T>(url: string): Observable<T> {
    console.log(url);
    return this.http.get<T>(url);
  }

  public findOne<T>(id: number, url: string): Observable<T> {
    return this.http.get<T>(url + id);
  }

  public post<T>(itemName: any, url: string): Observable<T> {
    console.log('create plan');
    const postObj = JSON.stringify(itemName);
    console.log(postObj);
    return this.http.post<T>(url, postObj);
  }

  public update<T>(itemToUpdate: any, url: string): Observable<T> {
    console.log('Create franchise req');
    console.log(JSON.stringify(itemToUpdate));
    return this.http.put<T>(url, JSON.stringify(itemToUpdate));
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}