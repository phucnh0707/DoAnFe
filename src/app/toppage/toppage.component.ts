import { Component } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.scss']
})
export class ToppageComponent {

  constructor(private commonService:CommonService){}
  dataCate: any;

  ngOnInit():void {
  this.getLastCategory();
  }
   //Lay danh sach
   getLastCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
    this.dataCate = res;
    })
  }

}
