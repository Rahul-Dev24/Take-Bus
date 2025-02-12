import { Component, inject } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-update.component.html',
  styleUrl: './home-page-update.component.scss'
})
export class HomePageUpdateComponent {

  appService: AppService = inject(AppService);
  bannerImg: Array<BannerImg> = [];
  showImag: boolean = false;

  uploadFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.bannerImg.push({
        file: file,
        url: e.target.result
      });
    }
    reader.readAsDataURL(file);
    this.showImag = true;
  }

  deleteImage(data: BannerImg) {
    if (this.bannerImg.length == 0) {
      this.showImag = false;
      return;
    }
    this.bannerImg.splice(this.bannerImg.indexOf(data), 1);
    this.showImag = false;
  }
}


interface BannerImg {
  file: any;
  url: any;
}