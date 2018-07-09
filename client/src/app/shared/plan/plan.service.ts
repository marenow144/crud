import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class PlanService {
  public API = '//localhost:8080';
  public PLAN_API = this.API + '/plans';




  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(this.API+'/plans');
  }
  get(id: number) {
    return this.http.get(this.PLAN_API+'/'+id);
  }
  save (plan: any)  {
    return this.http.post(this.PLAN_API,plan);

  }
  // save(plan: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (plan['href']){
  //     result = this.http.put(plan.href, plan);
  //   }
  //   else {
  //     result = this.http.post(this.API+'/plans',plan);
  //   }
  //   return result;
  //  // return this.http.get(this.API+'/plan-add/'+plan);
  // }
  remove(href) {
    return this.http.delete(href);
  }
}
