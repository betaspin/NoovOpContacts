import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
const _ = require('lodash');

@Component({
  selector: 'contact-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  // Contacts list
  public contacts = [];

  // Data for add or update contact
  private contactInfo = {
    id: "",
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    phone: ""
  };

  public addButton = true;

  public formTitle = "Ajouter un contact";

  public constructor(private contactService : ContactService) { }

  /**
   * Get contacts list
   */
  ngOnInit() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  /**
   * Adds a new contacts
   */
  public addContact() {
    this.contactService.addContact(this.contactInfo).subscribe((contact) => {
      // Add the contact in the contacts list
      this.contacts.push(contact);
      // Reset form
      this.resetContactInfo();
    });
  }

  /**
   * Delete contact
   */
  public deleteContact(id) {
    this.contactService.deleteContact(id).subscribe((contact) => {
      // Remove the contact in contacts list
      _.remove(this.contacts, function(_contact){
        return contact.id == _contact.id;
      });
    });
  }

  /**
   * Reset form
   */
  public resetContactInfo() {
    this.contactInfo = {
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
    this.formTitle = "Ajouter un contact";
  }

  /**
   * Display a contact
   */
  public findContact(id) {
    this.contactService.findContact(id).subscribe((contact) => {
      this.contactInfo = contact;
      // Hide button add and show button update and reset
      this.addButton = false;
      // Change form title
      this.formTitle = "Modifier le contact";
    });
  }

  /**
   * Update a contact
   */
  public updateContact() {
    this.contactService.updateContact(this.contactInfo).subscribe((contact) => {
      // Update contacts list
      for(let idx in this.contacts){
        if(this.contacts[idx].id == contact.id){
          this.contacts[idx] = contact;
        }
      }
      // Reset form
      this.resetContactInfo();
    });
  }
}
