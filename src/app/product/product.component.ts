import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private commonService:CommonService,private activatedRoute: ActivatedRoute){}
  dataPro:any;
  catId:any;
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.catId = params.get('id');
      console.log(this.catId);
    });
    this.getProductCatId(this.catId);
  };

  getProductCatId(id:any){
    this.commonService.listProductByCat(id).subscribe((res)=>{
    this.dataPro = res;
    })
  };
}
