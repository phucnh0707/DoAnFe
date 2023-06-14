import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Product } from '../model/product';
@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.scss']
})
export class ToppageComponent {

  constructor(private commonService:CommonService){}
  dataCate: any;
  proName:any;
  products: Product[] = [];
  ngOnInit():void {
    // this.commonService.getProduct().subscribe((response) =>{
    //   this.products = response;
    // });
  this.getLastCategory();
  }
  Search(){
    if(this.proName == ""){
      this.ngOnInit();
    }else{
    this.products = this.products.filter(res=>{
      return res.proName.toLocaleLowerCase().match(this.proName.toLocaleLowerCase());
    });
    }
  }
   //Lay danh sach
   getLastCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
    this.dataCate = res;
    })
  }

}
