import { Injectable } from '@angular/core';
import { Http, Event } from 'ngkit';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  /**
   * Create a new instance.
   *
   * @param  {Http} http
   * @param  {Event} event
   */
  constructor(private http: Http, private event: Event) { }

  /**
   * Posts a registration to the api.
   *
   * @param  {any} data
   * @return {Promise<any>}
   */
  update(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(`user`, data).first()
        .subscribe(res => {
          resolve(res);
        }, error => reject(error));
    });
  }

  /**
   * Posts a profile-image to the api.
   *
   * @param  {any} data
   * @return {Promise<any>}
   */
  updateProfileImage(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`user/profile-image`, data).first()
        .subscribe(res => {
          resolve(res);
        }, error => reject(error));
    });
  }

  /**
     * Search for a user.
     *
     * @param  {object}  data
     * @return {Observable<any>}
     */
  search(data: any): Observable<any> {
    return this.http.post('users/search', data).first();
  }

}
