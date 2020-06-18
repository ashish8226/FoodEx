import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Menu} from "../models/menu";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuUrl = 'http://localhost:4000/api/menus';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getMenus() {
    return this.http.get(this.menuUrl).pipe(catchError(this.handleError));
  }

  addMenu(menu: Menu): Observable<Menu> {

    return this.http.post<Menu>(this.menuUrl,menu, {headers: this.headers});
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
