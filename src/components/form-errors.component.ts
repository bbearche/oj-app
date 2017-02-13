import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-errors',
  template: `
        <div class="form-errors" *ngIf="error" [ngClass]="{'has-errors': error}">
            {{ error }}
        </div>
    `,
})
export class FormErrorsComponent {
  /**
   * Form errors.
   *
   * @return {any}
   */
  @Input() errors: any;

  /**
   * Get errors from input.
   *
   * @return {mixed}
   */
  get error(): any {
    if (this.errors) {
      if (typeof this.errors == 'object') {
        let key = Object.keys(this.errors)[0];

        return this.errors[key];
      } else {
        return this.errors;
      }
    }

    return null;
  }
}
