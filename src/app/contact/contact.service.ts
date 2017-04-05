import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ContactService {

  private headers: Headers;
  private options: RequestOptions;

  private contacts = [];

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public getContacts(){
    return this.http
      .get('/api/contacts', this.options)
      .map( res => res.json() );
  }

  /**
   * Adds a new contacts
   */
  public addContact(contact) {
    return this.http
      .post('/api/contacts', JSON.stringify(contact), this.options)
      .map( res => res.json() );
  }

  /**
   * Delete contact
   */
  public deleteContact(id) {
    return this.http
      .delete('/api/contacts/' + id, this.options)
      .map( res => res.json() );
  }

  /**
   * Delete contact
   */
  public findContact(id) {
    return this.http
      .get('/api/contact/' + id, this.options)
      .map( res => res.json() );
  }

  /**
   * Update contact
   */
  public updateContact(contact) {
    return this.http
      .put('/api/contacts', JSON.stringify(contact), this.options)
      .map( res => res.json() );
  }
}
