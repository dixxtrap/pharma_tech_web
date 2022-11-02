import { Component, OnInit, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-google-maps-pharma',
  templateUrl: './google-maps-pharma.component.html',
  styleUrls: ['./google-maps-pharma.component.css']
})
export class GoogleMapsPharmaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  center = {
    lat: 14.7645042,
    lng: -17.3660286
};
zoom = 12;
heatmapOptions = {
    radius: 5
};
heatmapData = [{
    lat: 37.782,
    lng: -122.447
}, {
    lat: 37.782,
    lng: -122.445
}, {
    lat: 37.782,
    lng: -122.443
}, {
    lat: 37.782,
    lng: -122.441
}, {
    lat: 37.782,
    lng: -122.439
}, {
    lat: 37.782,
    lng: -122.437
}, {
    lat: 37.782,
    lng: -122.435
}, {
    lat: 37.785,
    lng: -122.447
}, {
    lat: 37.785,
    lng: -122.445
}, {
    lat: 37.785,
    lng: -122.443
}, {
    lat: 37.785,
    lng: -122.441
}, {
    lat: 37.785,
    lng: -122.439
}, {
    lat: 37.785,
    lng: -122.437
}, {
    lat: 37.785,
    lng: -122.435
}];
}
