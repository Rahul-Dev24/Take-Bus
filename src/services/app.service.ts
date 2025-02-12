import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as endPoints from "../common/end-points.json";
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { AlertService } from './alert.service';
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private readonly http: HttpClient,
    private readonly alertSevice: AlertService
  ) { }

  _DB_FILE_RESPONSE: any;

  uploadFile(file: any): Observable<any> {
    const fileName = file?.target?.files[0]?.name;
    const fileForm = new FormData();
    fileForm.append("file", file?.target.files[0]);
    fileForm.append("cloud_name", "dvmzfc3j9");
    fileForm.append("upload_preset", "Bus_booking");

    if (fileName) {
      return this.http.post(env.CLOUDINARY_URL, fileForm).pipe(
        switchMap((res: any) => {
          res['name'] = fileName;
          return this.fileUploadDB(res)
        }),
        catchError((err: any) => {
          this.alertSevice.showError(err);
          return throwError(() => err);
        })
      )
    }
    return of(null)
  }

  private fileUploadDB(file: any): Observable<any> {
    return this.http.post(`${env.BASE_URL}/${endPoints.FILE_UPLOAD}`, { file }).pipe(
      map((response: any) => response?.data), // Extract the data field
      catchError((err: any) => {
        this.alertSevice.showError(err);
        return throwError(() => err); // Propagate the error
      })
    );
  }


}
