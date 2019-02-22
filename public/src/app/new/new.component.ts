import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet = {
    Name: '',
    type: '',
    description: '',
    skills: []
  };
  createNewErrors: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onSubmitNew() {
    const observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['errors']) {
        console.log(data);
        this.createNewErrors = data;
      } else {
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
