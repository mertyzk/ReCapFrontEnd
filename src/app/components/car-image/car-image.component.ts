import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  message:string = "";
  success:boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private carImageService: CarImageService,
    private carService:      CarService,
    private rentalService:   RentalService,
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarImagesByCarId(id: number) {
    this.carImageService.getCarImagesByCarId(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getImageSource(carImage:CarImage):string{
    let url:string = "https://localhost:15139/" + carImage.imagePath;
    return url;
  }
}