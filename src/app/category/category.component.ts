import { CommonService } from '../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  dataCate: any;

  checkAction = false;

  objCat = {
    catName:'',
    id:'',
  }

  constructor(private commonService:CommonService){}

  ngOnInit():void{
  this.getLastCategory();
  }
  //Them moi
  addNewCategory(formValue:any){
    console.log(formValue);
    //luu vao
    this.commonService.createCategory(formValue).subscribe((res)=>{
      console.log("Them thanh cong");
      this.getLastCategory();
    });
  }

  //Lay danh sach
  getLastCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
    this.dataCate = res;
    })
  }
  //Lấy dữ liệu để sửa
  editCat(itemCat:any){
    this.checkAction = true;
    this.objCat = itemCat;
    
  }
  udapteCategory(itemCat:any){
    this.checkAction = false;
    console.log(itemCat);
    this.commonService.updateCategory(itemCat).subscribe((res)=>{
      this.getLastCategory;
    });
  }

  deleteCat(dataCat:any) {
  this.commonService.deleteCategory(dataCat).subscribe((res)=>{
    this.getLastCategory;
  });
  }
}
