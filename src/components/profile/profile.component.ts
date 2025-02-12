import { Component, effect, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DUIDialog, DUIButton } from 'david-ui-angular';
import { AlertService } from '../../services/alert.service';
import { AppService } from '../../services/app.service';
import { UserService } from '../../services/user.service';
import { NoRecordFoundComponent } from "../no-record-found/no-record-found.component";

@Component({
  selector: 'app-profile',
  imports: [RouterLink, DUIDialog, DUIButton, ReactiveFormsModule, NoRecordFoundComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  openEdit: boolean = false;
  openWellet: boolean = false;
  editImg!: any;
  userData: any;
  editForm: FormGroup;
  loadingEditBtn: boolean = false;
  profileImg!: string;
  openPassword: boolean = false;
  profilePageLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private alertService: AlertService, private appService: AppService, private userService: UserService) {
    effect(() => {
      this.profileImg = userService?.getProfileImg();
    })

    this.editForm = this.formBuilder.group({
      profileImg: [null],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.profilePageLoading = true
    this.userService.getUser().subscribe({
      next: (res: any) => {
        localStorage.setItem("profileImg", res?.data?.profileImage?.secure_url);
        this.userService.getProfileImg.set(res?.data?.profileImage?.secure_url);
        this.userData = res?.data?.user;
        // this.editForm.get("profileImg")?.setValue(res?data?.profileImgage?.secure_url);
        this.editForm.get("name")?.setValue(this.userData?.name);
        this.editForm.get("email")?.setValue(this.userData?.email);
        this.editForm.get("phoneNo")?.setValue(this.userData?.phoneNo);
        this.editForm.get("address")?.setValue(this.userData?.address);
        this.profilePageLoading = false;
      },
      error: (err) => {
        this.alertService.showError(err);
      }
    })
  }

  editProfile() {
    if (this.editForm?.invalid) {
      this.alertService.showInfo("All the Feilds Manidatery.");
      return;
    }
    this.loadingEditBtn = true;
    if (this.editImg?.file && this.editImg?.url) {
      this.appService.uploadFile(this.editImg?.file).subscribe({
        next: (res: any) => {
          localStorage.setItem("profileImg", res?.secure_url);
          this.editForm.get("profileImg")?.setValue(res?._id);
          this.updateUser(this.editForm.value);
        },
        error: (err) => {
          this.alertService.showError(err);
        }
      })
    } else {
      delete this.editForm.value['profileImg'];
      this.updateUser(this.editForm.value);
    }

  }

  updateUser(data: any) {
    this.userService.updateUser(data).subscribe({
      next: (res: any) => {
        this.alertService.showSuccess(res?.message);
        this.loadingEditBtn = false;
        this.getUserData();
        this.closeEditPopup();
      },
      error: (err) => {
        this.alertService.showError(err);
      }
    })
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.editImg = {
        url: e.target.result,
        file: event
      };
    }
    reader.readAsDataURL(file);
  }

  closeEditPopup() {
    this.editImg = null;
    this.openEdit = !this.openEdit;
  }

  closeWelletPopup() {
    this.openWellet = !this.openWellet;
  }

}
