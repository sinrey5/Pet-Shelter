import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('/api/pets');
  }

  // tslint:disable-next-line:ban-types
  getPetByID(id: String) {

    return this._http.get(`/api/pets/${id}`);
  }

  addPet(newPet) {
    return this._http.post('/api/pets', newPet);
  }

  // tslint:disable-next-line:ban-types
  updatePetByID(id: String, onePet) {
    return this._http.put(`/api/pets/${id}`, onePet);
  }

  // tslint:disable-next-line:ban-types
  deletePetByID(id: String) {
    return this._http.delete(`/api/pets/${id}`);
  }

  // tslint:disable-next-line:ban-types
  addLike(id: String, onePet) {
    return this._http.put(`/api/pets/${id}/like`, onePet);
  }

}
