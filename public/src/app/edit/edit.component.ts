import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  onePet = {
    // Name: "",
    // type: "",
    // description:"",
    // skills:[]
  };

  EditErrors: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      console.log(params['id']);
      // tslint:disable-next-line:no-string-literal
      this.showOnePet(params['id']);
    });
  }

  // tslint:disable-next-line:ban-types
  showOnePet(id: String) {
    const observable = this._httpService.getPetByID(id);
    observable.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['message']) {
        console.log(data);
        this.EditErrors = {message: 'ID is not found. Please try with correct ID or create a new one.'};
      } else {
        console.log(data);
        this.onePet = data;
      }
    });
  }

  onSubmitEdit() {
    // tslint:disable-next-line:no-string-literal
    const observable = this._httpService.updatePetByID(this.onePet['_id'], this.onePet);
    observable.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['errors']) {
        console.log('errors', data);
        this.EditErrors = data;
      } else {
        // tslint:disable-next-line:no-string-literal
        this._router.navigate([`/pets/${this.onePet['_id']}`]);
      }
    });
  }

}
