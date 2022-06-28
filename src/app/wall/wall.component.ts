import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ApiService } from '../Services/api.service'
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.fetchPostWall().subscribe((res: any) => {
      this.wallData = res;
    });

  }

  wallData: any;
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  
}
