import { Component } from '@angular/core';
import { ProfileInfoPage } from './profile-info.page';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Authentication } from 'ngkit';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'review-page',
  templateUrl: 'review.page.html'
})
export class ReviewPage {
  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  /**
     * The form of the component.
     *
     * @type {FormGroup}
     */
  form: FormGroup = new FormGroup({
    'score': new FormControl(''),
    'type': new FormControl(''),
    'review': new FormControl('')
  });

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
    public view: ViewController
  ) {
  }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    this.user = this.params.data.user;
  }

  submitReview() {
    let data = this.form.value;
    data = Object.assign({
      'sender_id': this.auth.user().id,
      'recipient_id': this.user.id
    }, data);

    this.userService.sendReview(data).then((res) => {
      this.view.dismiss(res.review);
    })
  }

  close() {
    this.view.dismiss();
  }
}
