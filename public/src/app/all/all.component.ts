import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  pets: any;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this.getPetsFromService();
  }

  getPetsFromService() {
    const observable = this._httpService.getPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }
}
