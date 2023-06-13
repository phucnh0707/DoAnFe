import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  //Ham luu db
  createCategory(dataCat: any) {
    //luu vao db
    return this._http.post("http://localhost:3000/category", dataCat);
  }

  listAllCategory() {
    return this._http.get("http://localhost:3000/category");
  }

  updateCategory(dataCat: any) {
    return this._http.put("http://localhost:3000/category/" + dataCat.id, dataCat);
  }

  deleteCategory(dataCat: any) {
    return this._http.delete("http://localhost:3000/category/" + dataCat.id);
  }

  listAllProduct() {
    return this._http.get("http://localhost:3000/product");
  }

  listProductByCat(catId:any){
    return this._http.get("http://localhost:3000/product?catId=" + catId);
  }


}
