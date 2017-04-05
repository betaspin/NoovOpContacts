import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
const _ = require('lodash');

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // Users list
  public users = [];

  // Data for add or update users
  private userInfo = {
    id: "",
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    phone: ""
  };

  public addButton = true;

  public formTitle = "Ajouter un utilisateur";

  public constructor(private userService : UserService) { }

  /**
   * Get users list
   */
  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  /**
   * Adds a new users
   */
  public addUser() {
    this.userService.addUser(this.userInfo).subscribe((users) => {
      // Add the users in the userss list
      this.users.push(users);
      // Reset form
      this.resetUserInfo();
    });
  }

  /**
   * Delete users
   */
  public deleteUser(id) {
    this.userService.deleteUser(id).subscribe((users) => {
      // Remove the users in userss list
      _.remove(this.users, function(_users){
        return users.id == _users.id;
      });
    });
  }

  /**
   * Reset form
   */
  public resetUserInfo() {
    this.userInfo = {
      id: "",
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      phone: ""
    };
    // Show button add and hide button update and reset
    this.addButton = true;
    // Change form title
    this.formTitle = "Ajouter un users";
  }

  /**
   * Display a users
   */
  public findUser(id) {
    this.userService.findUser(id).subscribe((users) => {
      this.userInfo = users;
      // Hide button add and show button update and reset
      this.addButton = false;
      // Change form title
      this.formTitle = "Modifier le users";
    });
  }

  /**
   * Update a users
   */
  public updateUser() {
    this.userService.updateUser(this.userInfo).subscribe((users) => {
      // Update userss list
      for(let idx in this.users){
        if(this.users[idx].id == users.id){
          this.users[idx] = users;
        }
      }
      // Reset form
      this.resetUserInfo();
    });
  }
}
