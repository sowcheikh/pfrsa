import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  form: FormGroup;
  isAddMode: boolean;
  submitted = false;
  loading = false;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private alertService: AlertService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;

    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      libelle: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.profileService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createProfile();
    } else {
      this.updateProfile();
    }
  }

  // tslint:disable-next-line:typedef
  private createProfile() {
    this.profileService.create(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User added', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  // tslint:disable-next-line:typedef
  private updateProfile() {
    this.profileService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User updated', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
