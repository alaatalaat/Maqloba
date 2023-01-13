// import { Loader } from './../../../node_modules/@googlemaps/js-api-loader/src/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {
  latitude = 51.678418 ;
  langtude = 7.809007  ;
  constructor() { }

  ngOnInit(): void {

  }

}
