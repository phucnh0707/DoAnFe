import { Component } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dataPro:any;

  constructor(private commonService:CommonService){}

  ngOnInit() {
    this.getLastProduct();
  }

  getLastProduct(){
    this.commonService.listAllProduct().subscribe((res)=>{
    this.dataPro = res;
    })
  }
}
