import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private viewToggleSubject = new Subject<boolean>();
  viewToggle$ = this.viewToggleSubject.asObservable();
  private apiUrl = 'http://localhost:3000/listings';
  private detailsApiUrl = 'http://localhost:3000/details';

  constructor(private http: HttpClient) { }

  getListings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getListingById(id: number): Observable<any> {
    const url = `${this.detailsApiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  toggleView(showView: boolean) {
    this.viewToggleSubject.next(showView);
  }
}
