import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/Category';
import { AlertService } from '../../../../services/alert.service';
import { CommonModule } from '@angular/common';
import { NoRecordFoundComponent } from "../../../../components/no-record-found/no-record-found.component";
import { DUIDialog, DUIButton, DUISwitch } from 'david-ui-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../../services/app.service';


@Component({
  selector: 'app-category',
  imports: [CommonModule, NoRecordFoundComponent, DUIDialog, DUIButton, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  categroyList: Array<any> = [];
  tableLoading: boolean = false;
  openEdit: boolean = false;
  editForm: FormGroup;
  loadingEditBtn: boolean = false;
  editImg: any;
  popupMode: any;
  btnLoading: boolean = false;
  selectedItem: any;

  constructor(
    private readonly categortService: CategoryService,
    private readonly alertService: AlertService,
    private readonly fromBuilder: FormBuilder,
    private readonly appService: AppService
  ) {
    this.editForm = this.fromBuilder.group({
      name: ['', [Validators.required]],
      status: [true, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.tableLoading = true;
    this.categortService.getCategory().subscribe({
      next: (res) => {
        this.categroyList = res?.data;
        this.tableLoading = false;
      },
      error: (err) => {
        this.alertService.showError(err);
      }
    });
  }

  openAddCategory(category?: any) {
    if (category) {
      this.editForm.patchValue(category);
      this.popupMode = true
      this.selectedItem = category;
    }
    this.openEdit = !this.openEdit;
  }

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target?.files[0];
    const fr = new FileReader();
    fr.onload = (e: any) => {
      this.editImg = {
        url: e.target.result,
        file: event
      };
    }
    fr.readAsDataURL(file);
  }

  editCategory() {
    this.btnLoading = true;
    if (this.editImg?.url && this.editImg?.file) {
      this.appService.uploadFile(this.editImg?.file).subscribe({
        next: (res: any) => {
          this.createCategory(res?._id, (res?.secure_url || res?.url));
        },
        error: (err) => {
          this.alertService.showError(err);
        }
      })
    } else {
      this.createCategory('', '')
    }

  }

  createCategory(imageId: string, imgUri: string) {
    let val = this.editForm.value;
    if (imageId) val['imgId'] = imageId;
    if (imgUri) val['image'] = imgUri;
    val['status'] ||= false;
    const service = this.popupMode && this.selectedItem ? this.categortService?.updateCategory(this.selectedItem?._id, val) : this.categortService.createCategory(val);
    service.subscribe({
      next: (res: any) => {
        this.closeEditPopup();
        this.alertService.showSuccess(res?.message);
      },
      complete: () => {
        this.btnLoading = false;
        this.closeEditPopup();
        this.getAllCategory();
      },
      error: (err) => {
        this.btnLoading = false;
        this.alertService.showError(err);
      }
    })
  }

  deleteCategory(_id: string) {
    this.categortService.deleteCategory(_id).subscribe({
      next: (res) => {
        this.alertService.showSuccess(res?.message);
        this.getAllCategory();
      },
      error: (err) => {
        this.alertService.showError(err);
      }
    })
  }

  closeEditPopup() {
    this.editImg = null;
    this.selectedItem = null;
    this.openEdit = false;
    this.popupMode = false;
    this.editForm.reset();
  }

}
