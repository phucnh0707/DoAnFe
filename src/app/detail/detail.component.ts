import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(private commonService:CommonService,private activatedRoute: ActivatedRoute){}
  id:any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  

}
