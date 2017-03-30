import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
     * If the user made a request.
     *
     * @type {boolean}
     */
  madeRequest: boolean = false;

  /**
   * User search results.
   *
   * @type {any[]}
   */
  users: any[] = null;

  /**
   * The constructor for the class
   * @param  {NavController} navCtrl
   * @param  {UserService}   userService
   */
  constructor(
    public nav: NavController,
    private userService: UserService
  ) { }


  /**
     * Search for users.
     *
     * @param  {object} event
     * @return {void}
     */
  search(event): void {
    if (event.type == 'input') {
      let data = { search: event.target.value }

      this.userService.search(data).subscribe((res: any) => {
        this.users = res.data;
      });
    }
  }

  goToUser(id: any): void {
    this.nav.push(ProfilePage, { id: id });
  }
}
