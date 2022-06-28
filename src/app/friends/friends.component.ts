import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.fetchFriends().subscribe((res: any) => {
      this.friendsData = res;
    });
  }
friendsData: any;

onNavToOrderDetails(friend: any) {
  this.router.navigate(['/user-page-component'], { state: {data: friend} });
}
}

