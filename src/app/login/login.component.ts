import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <form action = "/users">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
