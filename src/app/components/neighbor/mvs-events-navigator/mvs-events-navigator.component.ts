import { Component, ElementRef, AfterViewInit, viewChild, ChangeDetectionStrategy } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-mvs-events-navigator',
  templateUrl: './mvs-events-navigator.component.html',
  styleUrls: ['./mvs-events-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvsEventsNavigatorComponent implements AfterViewInit {
  mapElement = viewChild<ElementRef>('mvsMapContainer');

  public map!: Map;

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const element = this.mapElement()?.nativeElement;
    if (!element) {
      return;
    }

    this.map = new Map({
      target: element,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([2.3522, 48.8566]), // Coordonnées de Paris [Longitude, Latitude]
        zoom: 12,
      }),
    });
  }

  ionViewDidEnter() {
    if (this.map) {
      setTimeout(() => {
        this.map.updateSize();
      }, 100);
    }
  }
}
