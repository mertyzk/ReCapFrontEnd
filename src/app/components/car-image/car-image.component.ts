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
  dataLoaded = false;
  message: string = '';
  success: boolean = false;

  constructor(private carImageService: CarImageService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.carImageService.getImages().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(id: number) {
    this.carImageService.getCarImagesByCarId(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getImageSource(carImage: CarImage): string {
    let url: string = 'https://localhost:15139/Uploads/Images/DefaultImage.jpg' ;
    return url;
  }
}
