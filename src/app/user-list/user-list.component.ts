import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-user-list',
  template: `
  <div style = "margin-top: 10px">
    <button (click)="handleClick($event)" type = "button">Click to get list of users</button>
  </div>

  <div style = "margin-top: 10px">
  <table>
  <tr *ngFor = "let user of users">
  <td>{{user.username}}</td>
  <td>{{user.email}}</td>
  </tr>
  </table>
</div>
 `,
  styles: [`
  table, th , td {
    border: 1px solid grey;
    border-collapse: collapse;
    padding: 5px;
  }
  
  `]
  
})
export class UserListComponent implements OnInit {

  public users = [];
  constructor(private _detailsService: DetailsService) { }

  ngOnInit()
  {
   
  }

  handleClick(event: Event) {
    //console.log('Click!', event)
    (this._detailsService.getUserDetails()
    .subscribe(data => this.users= data),event);

     

  }


}
