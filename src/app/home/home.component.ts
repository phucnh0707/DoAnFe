import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Product } from '../model/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  // dataPro:any;
  p: number = 1;
  dataCate: any;
  proName:any;
  constructor(private commonService:CommonService){}

  ngOnInit():void {
    this.commonService.getProduct().subscribe((response) =>{
      this.products = response;
    });
    // this.getLastProduct();
  this.getLastCategory();

  }

  // getLastProduct(){
  //   this.commonService.listAllProduct().subscribe((res)=>{
  //   this.dataPro = res;
  //   })
  // }
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
