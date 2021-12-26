import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string = "https://localhost:15139/api/";

  getCarImagesByCarId(id:number):Observable<ListResponseModel<CarImage>>{

    let newUrl:string = this.apiUrl + "carimages/getimagesbycarid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }
}