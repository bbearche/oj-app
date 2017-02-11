import { Injectable } from '@angular/core';
import { Http, Event } from 'ngkit';

@Injectable()
export class AuthService {

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
  register(data: any): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.post(`register`, data).first()
        .subscribe(res => resolve(res), error => reject(error));
    });
  }
}
