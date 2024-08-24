import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  emailPreferencesForm: FormGroup;
  courseHistory: any[] = [];
  loading = false;
  success = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initForms();
    this.loadUserProfile();
    this.loadCourseHistory();
  }

  initForms() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this.emailPreferencesForm = this.formBuilder.group({
      newsletter: [false],
      courseUpdates: [false],
      promotions: [false]
    });
  }

  loadUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.profileForm.patchValue(data);
        this.emailPreferencesForm.patchValue(data.emailPreferences);
      },
      (error) => {
        console.error('Error loading user profile', error);
      }
    );
  }

  loadCourseHistory() {
    this.userService.getCourseHistory().subscribe(
      (data) => {
        this.courseHistory = data;
      },
      (error) => {
        console.error('Error loading course history', error);
      }
    );
  }

  onSubmitProfile() {
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.updateUserProfile(this.profileForm.value).subscribe(
      (data) => {
        this.success = true;
        this.loading = false;
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  onSubmitPassword() {
    if (this.passwordForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.changePassword(this.passwordForm.value).subscribe(
      (data) => {
        this.success = true;
        this.loading = false;
        this.passwordForm.reset();
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  onSubmitEmailPreferences() {
    this.loading = true;
    this.userService.updateEmailPreferences(this.emailPreferencesForm.value).subscribe(
      (data) => {
        this.success = true;
        this.loading = false;
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }
}