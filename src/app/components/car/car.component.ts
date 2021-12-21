import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  car1 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2011,
    dailyPrice: 150,
    description: 'araba1',
  };
  car2 = {
    carId: 2,
    brandId: 2,
    colorId: 2,
    modelYear: 2012,
    dailyPrice: 250,
    description: 'araba2',
  };
  car3 = {
    carId: 3,
    brandId: 3,
    colorId: 3,
    modelYear: 2013,
    dailyPrice: 350,
    description: 'araba3',
  };
  car4 = {
    carId: 4,
    brandId: 4,
    colorId: 4,
    modelYear: 2014,
    dailyPrice: 450,
    description: 'araba4',
  };

  cars = [this.car1, this.car2, this.car3, this.car4];

  constructor() {}

  ngOnInit(): void {}
}
