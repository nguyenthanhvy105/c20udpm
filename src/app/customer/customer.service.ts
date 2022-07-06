import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(term?: string): Observable<Customer[]> {
    if (term) {
      return this.http.get<any>(`https://api.github.com/search/users?q=${term}`)
        .pipe(
          map(response => response.items.map((item: any) => {
            return {
              id: item.id,
              name: item.login,
              avatarUrl: item.avatar_url,
              githubUrl: item.gists_url,
              score: item.score
            }
          })),
        );
    } else {
      return of([]);
    }
  }
}
