import { Component } from '@angular/core';
import { ProfileInfoPage } from './profile-info.page';
import { ReviewPage } from './review.page';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Authentication } from 'ngkit';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  /**
   * The orange types for review score.
   *
   * @type {any[]}
   */
  orangeTypes: any[] = [];

  /**
   * The users reviews.
   *
   * @type {any[]}
   */
  reviews: any[] = [];

  /**
   * The loading state of the component.
   *
   * @type {boolean}
   */
  loading: boolean = false;

  /**
   * The constructor for the class.
   *
   * @param  {NavController}  nav
   * @param  {Authentication} auth
   */
  constructor(
    public nav: NavController,
    public auth: Authentication,
    public params: NavParams,
    public userService: UserService,
    public modal: ModalController
  ) { }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    if (this.params.data.id) {
      this.userService.getUser(this.params.data.id).then((res) => {
        this.user = res.data;
        this.calculateOranges(this.user.total_score);
        this.reviews = this.user.reviews.data;
      })
    } else {
      this.user = this.auth.user();
      this.calculateOranges(this.user.total_score);
      this.reviews = this.user.reviews.data;
    }

  }

  /**
   * Navigates to the profile info page.
   */
  goToInfo(user: number) {
    this.nav.push(ProfileInfoPage, { user: user });
  }

  /**
   * Calculates orange types.
   *
   * @param  {number} score
   * @return {any}
   */
  calculateOranges(score: number): any {
    var count;

    for (count = 1; count <= score; count++) {
      this.orangeTypes.push('full');
      if ((score - count) < 1 && (score - count) > 0) {
        this.orangeTypes.push('half');
      }
    }
  }

  /**
     * Get more reviews.
     *
     * @param {any} event
     */
  getMoreReviews(infiniteScroll: any): void {
    if (this.user.reviews.next_page_url) {
      this.loading = true;

      this.userService.getUser(
        this.user.id, { page: this.user.reviews.current_page + 1 }
      ).then((res) => {
        res.data.reviews.data.forEach(review => this.reviews.push(review));
        this.user = res.data;
        this.loading = false;
        infiniteScroll.complete();
      })
    } else {
      infiniteScroll.complete();
    }
  }

  /**
   * Opens the review Modal.
   */
  openReviewModal(user: any): void {
    let reviewModal = this.modal.create(ReviewPage, { user: user });
    reviewModal.present();

    reviewModal.onDidDismiss(data => {
      if (data) {
        this.reviews.unshift(data);
      }
    });
  }
}
